const catchAsyncErrors = require("../middlewares/catchAsyncErrors")
const Coupon = require("../models/couponModel")
const ErrorHandler = require("../utils/ErrorHandler")


exports.createCoupon = catchAsyncErrors(async (req, res, next) => {
    const newCoupon = await Coupon.create(req.body)
    if (newCoupon != null) {
        return res.status(200).json({ success: true, newCoupon })
    }
})

exports.getAllCoupons = catchAsyncErrors(async (req, res, next) => {
    const coupons = await Coupon.find()
    const couponCount = await Coupon.countDocuments()
    if (coupons != null) {
        return res.status(200).json({ success: true, couponCount, coupons })
    } else {
        return next(new ErrorHandler("Could not get coupons ", 400))
    }
})

exports.updateCoupon = catchAsyncErrors(async (req, res, next) => {
    const { id } = req.params
    const updatedCoupon = await Coupon.findByIdAndUpdate(id, req.body, { new: true })
    if (updatedCoupon != null) {
        return res.status(200).json({ success: true, updatedCoupon })
    } else {
        return next(new ErrorHandler("Could not be updated", 400))
    }
})

exports.deleteCoupon = catchAsyncErrors(async (req, res, next) => {
    const { id } = req.params
    const deletedCoupon = await Coupon.findByIdAndDelete(id)
    if (deletedCoupon != null) {
        return res.status(200).json({ success: true, deletedCoupon })
    } else {
        return next(new ErrorHandler("Could not be deleted", 400))
    }
})