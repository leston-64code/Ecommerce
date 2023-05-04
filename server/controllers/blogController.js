const catchAsyncErrors = require("../middlewares/catchAsyncErrors")
const Blog=require("../models/blogModel")
const ErrorHandler = require("../utils/ErrorHandler")
const cloudinary=require("cloudinary")
const path=require("path")
const fs=require("fs")

cloudinary.config({
    cloud_name: "dn9cofvdv",
    api_key: "912278242495112",
    api_secret: "v1TTxBjJa3A6gVAZiJMazvrYT7I"
  })


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
    const getBlog=await Blog.findById(id).populate("likes","firstname email").populate("dislikes","firstname email")
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

exports.disLikeBlog=catchAsyncErrors(async(req,res,next)=>{
    const {blogID}=req.body
    const blog=await Blog.findById(blogID)
    const loginUserID=req?.user?._id

    const isDisLiked= blog?.isDisLiked

    const alreadyLiked=blog?.likes?.forEach((ele,index)=>{
        return ele._id.toString()===loginUserID.toString()
    })

    if(alreadyLiked){
        const blog=await Blog.findByIdAndUpdate(blogID,{
            $pull:{likes:loginUserID},
            isLiked:false
        },{
            new:true
        })
        if(blog){
            res.status(200).json({success:true,blog})
        }
    }

    if(isDisLiked){
        const blog=await Blog.findByIdAndUpdate(blogID,{$pull:{dislikes:loginUserID},isDisLiked:false},{new:true})
        if(blog){
            res.status(200).json({success:true,blog})
        }
    }else{
        const blog=await Blog.findByIdAndUpdate(blogID,{$push:{dislikes:loginUserID},isDisLiked:true},{new:true})
        if(blog){
            res.status(200).json({success:true,blog})
        }
    }


})

exports.uploadBlogImages=catchAsyncErrors(async(req,res,next)=>{
    // console.log(req.files)

    const id=req.params.id
    const blog=await Blog.findById(id)
    let imgUrlData=[]
    
    try {

        for(let i=0;i<req.files.length;i++){
            let ele=req.files[i]
            let name=ele.filename
            let imagepath=path.join(req.files[0].destination,"blogs",name)
            
            let cloudRes=await cloudinary.uploader.upload(imagepath,{resource_type:"image"})
            
            imgUrlData.push({
                public_id:cloudRes.public_id,
                url:cloudRes.secure_url
            })
    
            fs.unlinkSync(ele.path)
            fs.unlinkSync(imagepath)
        }
        
        blog.images=imgUrlData
        await blog.save()
    
    } catch (error) {
        return next(error)
    }
    return res.status(200).json({
        success:true,
        msg:"Images added successfully"
    })
})