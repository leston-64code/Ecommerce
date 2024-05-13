const catchAsyncErrors = require("../../middlewares/catchAsyncErrors");
const proCategory = require("../../models/proCategoryModel");
const ErrorHandler = require("../../utils/ErrorHandler");

exports.createCategory = catchAsyncErrors(async (req, res, next) => {
     
     const category = await proCategory.create(req.body)
     if (category != null) {
          return res.status(200).json({
               success: true,
               message:"Category created"
          })
     }
})

exports.updateCategory = catchAsyncErrors(async (req, res, next) => {
     const { id } = req.params
     const updatedCategory = await proCategory.findByIdAndUpdate(id, req.body, { new: true })
     if (updatedCategory != null) {
          return res.status(200).json({
               success: true,
               updatedCategory
          })
     } else {
          return next(new ErrorHandler("Could not be updated", 400))
     }
})

exports.deleteCategory = catchAsyncErrors(async (req, res, next) => {
     const { id } = req.params
     const deletedCategory = await proCategory.findByIdAndDelete(id)
     if (deletedCategory != null) {
          return res.status(200).json({
               success: true,
               deletedCategory
          })
     } else {
          return next(new ErrorHandler("Could not be deleted", 400))
     }
})

exports.getOneCategory = catchAsyncErrors(async (req, res, next) => {
     const { id } = req.params
     const category = await proCategory.findById(id)
     if (category != null) {
          return res.status(200).json({
               success: true,
               category
          })
     } else {
          return next(new ErrorHandler("Category not found", 400))
     }
})

exports.getAllCategories = catchAsyncErrors(async (req, res, next) => {
     const categories = await proCategory.find()
     const categoriesCount = await proCategory.countDocuments()
     if (categories != null) {
          return res.status(200).json({
               success: true,
               categoriesCount,
               categories
          })
     } else {
          return next(new ErrorHandler("There was some issue", 400))
     }
})

