const catchAsyncErrors = require("../middlewares/catchAsyncErrors")
const Blog=require("../models/blogModel")
const ErrorHandler = require("../utils/ErrorHandler")

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

    if(updatedBlog!=null){

       return res.status(200).json({
            success:true,
            updatedBlog
        })
    }else{
        return next(new ErrorHandler("Blog could not be updated",400))
    }

})

exports.getBlog=catchAsyncErrors(async(req,res,next)=>{
    const {id}=req.params
    const getBlog=await Blog.findById(id)
    await Blog.findByIdAndUpdate(id,{$inc:{numOfViews:1}},{
        new:true
    })
    return res.status(200).json({
        success:true,
        getBlog
    })
})

exports.getAllBlogs=catchAsyncErrors(async(req,res,next)=>{

    const blogs=await Blog.find()
    const blogCount=await Blog.countDocuments()

    return res.status(200).json({
        success:true,
        blogCount,
        blogs
    })
})

exports.deleteBlog=catchAsyncErrors(async (req,res,next)=>{
    const {id}=req.params
    const deletedBlog=await Blog.findByIdAndDelete(id)

    if(deletedBlog!=null){

        return res.status(200).json({
            success:true,
            deletedBlog
        })

    }else{
        return next(new  ErrorHandler("Blog could not be deleted",400))
    }
})

exports.likeBlog=catchAsyncErrors(async(req,res,next)=>{
    const {blogID}=req.body
    const blog=await Blog.findById(blogID)
    const loginUserID=req?.user?._id

    const isLiked= blog?.isLiked

    const alreadyDisliked=blog?.dislikes?.forEach((ele,index)=>{
        return ele._id.toString()===loginUserID.toString()
    })

    if(alreadyDisliked){
        const blog=await Blog.findByIdAndUpdate(blogID,{
            $pull:{dislikes:loginUserID},
            isDisliked:false
        },{
            new:true
        })
        if(blog){
            res.status(200).json({success:true,blog})
        }
    }

    if(isLiked){
        const blog=await Blog.findByIdAndUpdate(blogID,{$pull:{likes:loginUserID},isLiked:false},{new:true})
        if(blog){
            res.status(200).json({success:true,blog})
        }
    }else{
        const blog=await Blog.findByIdAndUpdate(blogID,{$push:{likes:loginUserID},isLiked:true},{new:true})
        if(blog){
            res.status(200).json({success:true,blog})
        }
    }


})