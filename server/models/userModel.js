const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const crypto = require("crypto")

// New User Schema
let userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        index: true,
        trim: true,
        maxLength: 100,
        minLength: 2
    },
    lastname: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    mobile: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    role: {
        type: String,
        default: "user"
    },
    isBlocked: {
        type: Boolean,
        default: false
    },
    cart: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Cart",
        default: null
    },
    address: [
        {
            type: mongoose.SchemaTypes.ObjectId,
            ref: "Address"
        }
    ],
    wishList: [
        {
            type: mongoose.SchemaTypes.ObjectId,
            ref: "Product"
        }
    ],
    refreshToken: {
        type: String
    },
    isEmailVerified: {
        type: Boolean,
        default: false
    },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date
},
    {
        timestamps: true
    }
)


userSchema.pre("save", async function (next) {
    // if password is not modified then don't encrypt again
    if (!this.isModified("password")) {
        next()
    }
    const salt = await bcrypt.genSaltSync(10)
    this.password = await bcrypt.hash(this.password, salt)
    next()
})

userSchema.methods.isPasswordMatched = async function (enteredPass) {
    return await bcrypt.compare(enteredPass, this.password)
}

userSchema.methods.createPasswordResetToken = async function () {
    const resetToken = crypto.randomBytes(32).toString("hex")
    this.passwordResetToken = crypto
        .createHash("sha256")
        .update(resetToken)
        .digest("hex")
    this.passwordResetExpires = Date.now() + 30 * 60 * 1000  // 10 minutes
    return resetToken
}

module.exports = mongoose.model("User", userSchema)