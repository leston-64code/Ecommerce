const catchAsyncErrors = require("../../middlewares/catchAsyncErrors");
const blogCategory = require("../../models/blogCategoryModel");
const ErrorHandler = require("../../utils/ErrorHandler");

exports.createCategory = catchAsyncErrors(async (req, res, next) => {
     const category = await blogCategory.create(req.body)
     if (category != null) {
          return res.status(200).json({
               success: true,
               message: "Blog category created"
               // category
          })
     }
})

exports.updateCategory = catchAsyncErrors(async (req, res, next) => {
     const { id } = req.params
     const updatedCategory = await blogCategory.findByIdAndUpdate(id, req.body, { new: true })
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
     const deletedCategory = await blogCategory.findByIdAndDelete(id)
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
     const category = await blogCategory.findById(id)
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
     const categories = await blogCategory.find()
     const categoriesCount = await blogCategory.countDocuments()
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

