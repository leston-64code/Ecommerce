const catchAsyncErrors = require("../middlewares/catchAsyncErrors")
const Address = require("../models/addressModel")
const ErrorHandler = require("../utils/ErrorHandler")
const User = require("../models/userModel")

exports.createAddress = catchAsyncErrors(async (req, res, next) => {
    const id = req.user._id
    const user = await User.findById(id)
    if (user) {
        const newaddress = await Address.create(req.body)
        user.address.push(newaddress)
        await user.save()
        return res.status(200).json({
            success: true,
            msg: "Address added"
        })
    } else {
        return next(new ErrorHandler("User not found", 400))
    }
})

exports.deleteAddress = catchAsyncErrors(async (req, res, next) => {
    const id = req.user._id
    const addressID = req.params.id
    const user = await User.findById(id)
    if (user) {
        const address = await Address.findByIdAndDelete(addressID)
        if (address) {
            let newAdd = []
            for (let i = 0; i < user.address.length; i++) {
                let ele = user.address[i]
                if (ele._id.toString != addressID.toString()) {
                    newAdd.push(ele)
                }
            }
            user.address = newAdd
            await user.save()
            return res.status(200).json({
                success: true,
                address
            })
        } else {
            return next(new ErrorHandler("Address not found", 400))
        }
    } else {
        return next(new ErrorHandler("User not found", 400))
    }
})

exports.updateAddress = catchAsyncErrors(async (req, res, next) => {
    const id = req.user._id
    const addressID = req.params.id
    const user = await User.findById(id)
    if (user) {
        const address = await Address.findByIdAndUpdate(addressID, req.body)
        if (address) { return res.status(200).json({ success: true, msg: "Address updated" }) } else {
            return res.status(200).json({
                success: false,
                msg: "Address not found or could not be updated"
            })
        }
    } else {
        return next(new ErrorHandler("User not found", 400))
    }
})