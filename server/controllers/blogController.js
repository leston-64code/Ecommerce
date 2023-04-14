const catchAsyncErrors = require("../middlewares/catchAsyncErrors")
const Blog=require("../models/blogModel")

exports.createBlog=catchAsyncErrors(async(req,res,next)=>{
    const newBlog= await Blog.create(req.body)
        res.status(200).json({
            success:true,
            newBlog
        })
    
})

exports.updateBlog=catchAsyncErrors(async(req,res,next)=>{
    const {id}=req.params
    const updatedBlog=await Blog.findByIdAndUpdate(id,req.body,{
        new:true
    })
    if(updatedBlog){
        res.status(200).json({
            success:true,
            updatedBlog
        })
    }
})