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
    // *************************            FILTERING              ***************************

    // The fist section what it does is it will remove the 4 fields from the req.query objects duplicate only that much work is done in first para
    const queryObj={...req.query}
    const excludeFields=["page","sort","fields","limit"]
    excludeFields.forEach((ele,index)=>{
        delete queryObj[ele]
    })
    // console.log(queryObj,req.query)


    // ***************************************************************
    // Here in this para we convert the queryOjb into a string so that we can replace the gte lt lte gt with a dollar sign because mongodb requries dollar sign before these type of queries 
    // and later while sending the req to get all products we convert the json string back to json object
    let queryStr=JSON.stringify(queryObj)
    // console.log(queryStr)
    queryStr=queryStr.replace(/\b(gte|gt|lte|lt)\b/g,(match)=>`$${match}`)
    // console.log(queryStr)
    // console.log(JSON.parse(queryStr))



    // **********************        SORTING      *************************
    // Sorting is working now we need to call that on the request that we send to mongodb
    let sortBy
    if(req.query.sort){
        sortBy=req.query.sort.split(",").join(" ")
        // console.log(sortBy)
    }else{
        // products=products.sort("-createdAt")
    }



    //***********************  LIMITING THE FIELDS    ********************
    let fields
    if(req.query.fields){
        // console.log(req.query.fields)
        fields=req.query.fields.split(",").join(" ")
        // console.log(fields)
    }else{
        fields="-__v"
    }


// *************        PAGINATION *******************
    const page=req.query.page
    const limit=req.query.limit
    const skip=(page-1)*limit
    // console.log(page,limit,skip)



    let products=await Product.find(JSON.parse(queryStr)).select(fields).sort(sortBy).skip(skip).limit(limit)
    const productsCount=products.length

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

exports.deleteProduct=catchAsyncErrors(async(req,res,next)=>{
    const {id}=req.params
    console.log(id)
    const deletedProduct=await Product.findByIdAndDelete({_id:id})
    if(deletedProduct){
        return res.status(200).json({
            success:true,
            deletedProduct
        })
    }else{
        return next(new ErrorHandler("Could not be deleted",400))
    }
    
})