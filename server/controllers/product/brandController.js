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

     console.log(req.query)

     const { filter = {}, range = [0, 2], limit = 3, page = 1, sort = ["createdAt", "ASC"] } = req.query

     // const parsedFilter = JSON.parse(filter);
     // const parsedRange = JSON.parse(range);
     // const parsedSort = JSON.parse(sort);
     // console.log(parsedFilter, parsedRange, parsedSort)

     let query = {}

     // if (parsedFilter.title) {
     //      query.title = { '$regex': parsedFilter.title, '$options': "i" }
     // }
     // console.log("hello")
     // if (parsedFilter.createdAt_gte || parsedFilter.createdAt_lte) {
     //      query.createdAt = {}
     //      if (parsedFilter.createdAt_gte) {
     //           query.createdAt.$gte = new Date(parsedFilter.createdAt_gte)
     //      }
     //      if (parsedFilter.createdAt_lte) {
     //           query.createdAt.$lte = new Date(parsedFilter.createdAt_lte)
     //      }
     // }
     if (filter.title) {
          query.title = { '$regex': filter.title, '$options': "i" }
     }

     if (filter.createdAt_gte || filter.createdAt_lte) {
          query.createdAt = {}
          if (filter.createdAt_gte) {
               query.createdAt.$gte = new Date(filter.createdAt_gte)
          }
          if (filter.createdAt_lte) {
               query.createdAt.$lte = new Date(filter.createdAt_lte)
          }
     }

     let startIndex = (parseInt(page) - 1) * limit
     const brands = await Brand.find(query).skip(startIndex).limit(limit)
     const brandsCount = await Brand.countDocuments(query)

     let pageStats = {
          totalRecords: null,
          totalPages: null,
          nextPage: null,
          previousPage: null,
          currentPage: parseInt(page)
     }

     pageStats.totalRecords = brandsCount

     let totalPages = Math.ceil(brandsCount / limit)
     pageStats.totalPages = totalPages

     let currentPage = parseInt(page)
     console.log(currentPage)
     if (currentPage != totalPages) {
          pageStats.nextPage = currentPage + 1;
     }
     if (currentPage != 1) {
          pageStats.previousPage = currentPage - 1;
     }

     if (brands != null) {
          return res.status(200).json({
               success: true,
               brandsCount,
               brands,
               pageStats
          })
     } else {
          return next(new ErrorHandler("There was some issue", 400))
     }
})

