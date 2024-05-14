const catchAsyncErrors = require("../../middlewares/catchAsyncErrors");
const Brand = require("../../models/brandModel");
const ErrorHandler = require("../../utils/ErrorHandler");

exports.createBrand = catchAsyncErrors(async (req, res, next) => {
     const brand = await Brand.create(req.body)
     if (brand != null) {
          return res.status(200).json({
               success: true,
               message: "Brand added successfully",
               brand
          })
     }
})

exports.updateBrand = catchAsyncErrors(async (req, res, next) => {
     const { id } = req.params
     const updatedBrand = await Brand.findByIdAndUpdate(id, req.body, { new: true })
     if (updatedBrand != null) {
          return res.status(200).json({
               success: true,
               updatedBrand
          })
     } else {
          return next(new ErrorHandler("Could not be updated", 400))
     }
})

exports.deleteBrand = catchAsyncErrors(async (req, res, next) => {
     const { id } = req.params
     const deletedBrand = await Brand.findByIdAndDelete(id)
     if (deletedBrand != null) {
          return res.status(200).json({
               success: true,
               deletedBrand
          })
     } else {
          return next(new ErrorHandler("Could not be deleted", 400))
     }
})

exports.getOneBrand = catchAsyncErrors(async (req, res, next) => {
     const { id } = req.params
     const brand = await Brand.findById(id)
     if (brand != null) {
          return res.status(200).json({
               success: true,
               brand
          })
     } else {
          return next(new ErrorHandler("Brand not found", 400))
     }
})

exports.getAllBrands = catchAsyncErrors(async (req, res, next) => {
     const brands = await Brand.find()
     const brandsCount = await Brand.countDocuments()
     if (brands != null) {
          return res.status(200).json({
               success: true,
               brandsCount,
               brands
          })
     } else {
          return next(new ErrorHandler("There was some issue", 400))
     }
})

