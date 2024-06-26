const catchAsyncErrors = require("../middlewares/catchAsyncErrors")
const User = require("../models/userModel")
const ErrorHandler = require("../utils/ErrorHandler")
const generateToken = require("../utils/jwtToken")
const validateMondoDbId = require("../utils/validateMongoId")
const generateRefreshToken = require("../utils/refreshToken")
const jwt = require("jsonwebtoken")
const { sendEmail } = require("./emailController")
const crypto = require("crypto")
const { generateVerificationCode } = require("../utils/generateRandomCode")
const VerificationCode = require("../models/verificationCodeModel")
const { userVerifcationEmail } = require("./emails/userEmailVerificationEmail")
const { welcomeEmail } = require("./emails/welcomeEmail")


exports.createUser = catchAsyncErrors(async (req, res, next) => {
    const email = await req.body.email
    const findUser = await User.findOne({ email })
    if (!findUser) {
        // Create User
        const newUser = await User.create(req.body)
        if (newUser) {

            let user = {
                id: newUser._id,
                email: newUser.email,
                isEmailVerified: newUser.isEmailVerified,
                role: newUser.role,
                isBlocked: newUser.isBlocked
            }
            req.session.userData = user;

            let randomCode = generateVerificationCode()

            await VerificationCode.create({
                userId: newUser._id,
                verificationCode: randomCode
            })

            let htmlEmail = userVerifcationEmail(randomCode)

            await sendEmail({
                to: newUser.email,
                subject: "Verify your account",
                text: "",
                html: htmlEmail
            })

            return res.status(200).json({
                success: true,
                newUser
            })
        } else {
            return next(new ErrorHandler("User could not be created", 400))
        }
    }
    else {
        // User already exists
        return next(new ErrorHandler("User already exists", 400))
    }
}
)

exports.requestVerificationCode = catchAsyncErrors(async (req, res, next) => {
    let randomCode = generateVerificationCode()

    let verification = await VerificationCode.create({
        userId: req.session.userId,
        verificationCode: randomCode
    })

    let user = await User.findById(req.session.userId)

    if (verification) {
        let htmlEmail = userVerifcationEmail(randomCode)

        await sendEmail({
            to: user.email,
            subject: "Verify your account",
            text: "",
            html: htmlEmail
        })

        return res.status(200).json({
            success: true,
            msg: "Verification code has been sent to the email provided"
        })
    } else {
        return next(new ErrorHandler("Code could not be generated at the moment", 400))
    }

})

exports.verifyUserVerificationCode = catchAsyncErrors(async (req, res, next) => {
    const { providedCode } = req.body

    const verification = await VerificationCode.findOne({ userId: req.session.userId });

    if (!verification) {
        // If no verification document found for the user ID
        return next(new ErrorHandler("Verification code not found or expired", 400))
    }

    // Compare the provided code with the stored verification code
    if (verification.verificationCode === providedCode) {
        // If the codes match
        let updatedUser = await User.findByIdAndUpdate(req.session.userId, { isEmailVerified: true })

        await VerificationCode.findOneAndDelete({ verificationCode: verification.verificationCode })

        let htmlEmail = welcomeEmail(updatedUser.firstname)

        await sendEmail({
            to: updatedUser.email,
            subject: "Welcome to our platform",
            text: "",
            html: htmlEmail
        })
        return res.status(200).json({
            success: true,
            msg: "Account verified successfully"
        })

    } else {
        return next(new ErrorHandler("Invalid verification code", 400))
    }
})

exports.adminLogin = catchAsyncErrors(async (req, res, next) => {
    const { email, password } = req.body
    const findUser = await User.findOne({ email }).select("+password")
    if (findUser && findUser.role === "admin") {
        const isMatched = await findUser.isPasswordMatched(password)

        if (isMatched) {


            let user = {
                id: findUser._id,
                email: findUser.email,
                isEmailVerified: findUser.isEmailVerified,
                role: findUser.role,
                isBlocked: findUser.isBlocked
            }
            req.session.userData = user;

            return res.status(200).json({
                success: true,
                // token: generateToken(findUser._id)
            })
        } else {
            return next(new ErrorHandler("Please enter valid credentials", 400, "manual"))
        }
    } else {
        return next(new ErrorHandler("User not found or not an admin", 404, "manual"))
    }
})

exports.loginUser = catchAsyncErrors(async (req, res, next) => {
    const { email, password } = req.body
    const findUser = await User.findOne({ email }).select("+password")
    if (findUser) {
        const isMatched = await findUser.isPasswordMatched(password)

        if (isMatched) {

            // const refreshToken = await generateRefreshToken(findUser._id)
            // const updateUser = await User.findByIdAndUpdate(findUser._id, { refreshToken }, { new: true })

            // res.cookie("refreshToken", refreshToken, {
            //     httpOnly: true,
            //     maxAge: 72 * 60 * 60 * 1000
            // })
            let user = {
                id: findUser._id,
                email: findUser.email,
                isEmailVerified: findUser.isEmailVerified,
                role: findUser.role,
                isBlocked: findUser.isBlocked
            }
            req.session.userData = user;

            return res.status(200).json({
                success: true,
                token: generateToken(findUser._id)
            })

        } else {
            return next(new ErrorHandler("Please enter valid credentials", 400, "manual"))
        }
    } else {
        return next(new ErrorHandler("User not found", 404, "manual"))
    }
})

// Handle refresh Token
exports.handleRefreshToken = catchAsyncErrors(async (req, res, next) => {
    const cookie = req.cookies;
    // console.log(cookie)
    if (!cookie.refreshToken) {
        return next(new ErrorHandler("No refresh token in cookies", 400))
    } else {
        const refreshToken = cookie.refreshToken
        // console.log(refreshToken)
        const user = await User.findOne({ refreshToken })
        if (!user) {
            return next(new ErrorHandler("No refresh token present in database", 400))
        }
        jwt.verify(refreshToken, process.env.JWT_SECRET, (err, decoded) => {
            // console.log(decoded.id )
            // console.log(user._id)
            if (err || user._id.toString() !== decoded.id) {
                // return next(new ErrorHandler("There is something wrong with refresh token",400))
                return next(err)
            } else {
                const accessToken = generateToken(user._id)
                return res.json({
                    success: true,
                    accessToken
                })
            }
        })
    }

})

exports.logoutUser = catchAsyncErrors(async (req, res, next) => {
    const cookie = req.cookies;
    if (!cookie.refreshToken) {
        return next(new ErrorHandler("No refresh token in cookies", 400))
    } else {
        const refreshToken = cookie.refreshToken
        const user = await User.findOne({ refreshToken })
        if (!user) {
            res.clearCookie("refreshToken", {
                httpOnly: true,
                secure: true
            })

            return res.sendStatus(204) //forbidden

        } else {
            await User.findOneAndUpdate({ refreshToken }, {
                refreshToken: ""
            })

            res.clearCookie("refreshToken", {
                httpOnly: true,
                secure: true
            })

            return res.sendStatus(204) //forbidden
        }
    }
})

exports.forgotPasswordToken = catchAsyncErrors(async (req, res, next) => {
    const { email } = req.body;
    const user = await User.findOne({ email })
    if (!user) {
        return next(new ErrorHandler("Invalid email addresss", 400))
    } else {
        const token = await user.createPasswordResetToken()
        // Why we are saving here because in the createPasswordResetTokne fun functon we entered new data into the user doc ie expiretime and reset token so we need to save that
        await user.save()
        const resetURL = `Hi, Please follow this link to reset your password . This link is valid till 10 minutes from now.<a href="http://localhost:5000/api/user/reset-password/${token}">Click Here</a>`

        const data = {
            to: email,
            text: "Hey user,",
            subject: "Forgot Password Link",
            html: resetURL
        }

        sendEmail(data)
        return res.json(token)

    }
})

exports.resetPassword = catchAsyncErrors(async (req, res, next) => {
    const { password } = req.body
    const token = req.params.token
    // console.log(token)
    const hashedToken = crypto.createHash("sha256").update(token).digest("hex")
    // console.log(hashedToken)
    const user = await User.findOne({ passwordResetToken: hashedToken, passwordResetExpires: { $gt: Date.now() } })
    if (!user) {
        return next(new ErrorHandler("Token expired . Please try again later"))
    }
    user.password = password
    user.passwordResetToken = undefined
    user.passwordResetExpires = undefined
    await user.save()
    return res.json({
        success: true,
        user
    })
})

exports.updatePassword = catchAsyncErrors(async (req, res, next) => {
    const { _id } = req.user
    const password = req.body.password
    //  You need to validate id here i have not done that here becasue my validate function needs further reserach before implementing
    const user = await User.findOne(_id)
    if (password) {
        user.password = password
        const updatedUser = await user.save()
        return res.status(200).json({
            success: true,
            updatedUser
        })
    } else {
        return next(new ErrorHandler("Could not update password", 400))

    }
})

exports.getAllUsers = catchAsyncErrors(async (req, res, next) => {
    const users = await User.find()
    const userCount = await User.countDocuments()
    if (users) {
        return res.status(200).json({
            success: true,
            count: userCount,
            users
        })
    } else {
        return next(new ErrorHandler("Could not find users", 400))
    }
})

exports.getUser = catchAsyncErrors(async (req, res, next) => {
    const userid = req.params.id
    const user = await User.findById(userid).populate("address cart cart.products._id")
    if (user) {
        return res.status(200).json({
            success: true,
            user
        })
    } else {
        return next(new ErrorHandler("User not found", 400))
    }
})

exports.deleteUser = catchAsyncErrors(async (req, res, next) => {
    const userid = req.params.id
    validateMondoDbId(userid)
    const user = await User.findByIdAndDelete(userid)
    if (user) {
        return res.status(200).json({
            success: true,
            deleteduser: user
        })
    } else {
        return next(new ErrorHandler("User not found", 400))
    }
})

exports.updateUser = catchAsyncErrors(async (req, res, next) => {
    // const userid=req.user._id.toString()
    const userid = req.user._id
    validateMondoDbId(userid)
    const user = await User.findByIdAndUpdate(userid, req.body, { new: true })
    if (user) {
        return res.status(200).json({
            success: true,
            user
        })
    } else {
        return next(new ErrorHandler("User not found", 400))
    }
})

exports.blockUser = catchAsyncErrors(async (req, res, next) => {
    const { id } = req.params
    validateMondoDbId(id)
    const blockUser = await User.findByIdAndUpdate(id, { isBlocked: true }, { new: true })
    if (blockUser) {
        return res.status(200).json({
            success: true,
            msg: "User blocked successfully",
            blockUser
        })
    } else {
        return next(new ErrorHandler("User not found", 400))
    }
})

exports.unblockUser = catchAsyncErrors(async (req, res, next) => {
    const { id } = req.params
    validateMondoDbId(id)
    const unblockUser = await User.findByIdAndUpdate(id, { isBlocked: false }, { new: true })
    if (unblockUser) {
        return res.status(200).json({
            success: true,
            msg: "User unblocked successfully",
            unblockUser
        })
    } else {
        return next(new ErrorHandler("User not found", 400))
    }
})

exports.getWishlist = catchAsyncErrors(async (req, res, next) => {
    const id = req.user._id
    const user = await User.findById(id).populate("wishList")
    if (user) {
        const wishList = user.wishList.length
        return res.status(200).json({
            success: true,
            count: wishList,
            user
        })
    } else {
        return next(new ErrorHandler("User not found", 400))
    }
})
