const catchAsyncErrors = require("../middlewares/catchAsyncErrors")
const Product=require("../models/productModel")
const ErrorHandler = require("../utils/ErrorHandler")
const slugify=require("slugify")

exports.createProduct=catchAsyncErrors(async(req,res,next)=>{
    if(req.body.title){
        req.body.slug=slugify(req.body.title)
    }
    const newProduct=await Product.create(req.body)
    if(newProduct){
        return res.status(200).json({
            success:true,
            newProduct
        })
    }else{
        return next(new ErrorHandler("Product could not be created",400))
    }
})

exports.getProduct=catchAsyncErrors(async(req,res,next)=>{
    const {id}=req.params
    const findProduct=await Product.findById(id)
    if(findProduct){
        return res.status(200).json({
            success:true,
            findProduct
        })
    }else{
        return next(new ErrorHandler("Could not find product",400))
    }
})

exports.getAllProducts=catchAsyncErrors(async(req,res,next)=>{
    const products=await Product.find()
    const productsCount=await Product.countDocuments()
    if(products){
        return res.status(200).json({
            success:true,
            productsCount,
            products
        })
    }else{
        return next(new ErrorHandler("Could not find products",400))
    }
})

exports.updateProduct=catchAsyncErrors(async(req,res,next)=>{
    const {id}=req.params
    if(req.body.title){
        req.body.slug=slugify(req.body.title)
    }
    const updateProduct=await Product.findOneAndUpdate({id},req.body,{new:true})
    if(updateProduct){
        return res.status(200).json({
            success:true,
            updateProduct
        })
    }else{
        return next(new ErrorHandler("Could not be updated",400))
    }
    
})