const catchAsyncErrors = require("../middlewares/catchAsyncErrors")
const User=require("../models/userModel")
const ErrorHandler = require("../utils/ErrorHandler")
const generateToken = require("../utils/jwtToken")
const validateMondoDbId = require("../utils/validateMongoId")

exports.createUser=catchAsyncErrors(async(req,res,next)=>{
    const email=await req.body.email
        const findUser=await User.findOne({email})
        if(!findUser){
            // Create User
            const newUser=await User.create(req.body)
            if(newUser){
              return res.status(200).json({
                    success:true,
                    newUser
                })
            }else{
                return next(new ErrorHandler("User could not be created",400))
            }
        }else{
            // User already exists
            return next(new ErrorHandler("User already exists",400))
        }
})

exports.loginUser=catchAsyncErrors(async (req,res,next)=>{
    const {email,password}=req.body
    const findUser=await User.findOne({email}).select("+password")
    if(findUser){
        const isMatched= await findUser.isPasswordMatched(password)
        if(isMatched){
            return res.status(200).json({
                success:true,
                token:generateToken(findUser._id)
            })
        }else{
            return next(new ErrorHandler("Please enter valid credentials",400))
        }
    }else{
        return next(new ErrorHandler("User not found",404))
    }
})

exports.getAllUsers=catchAsyncErrors(async (req,res,next)=>{
    const users=await User.find()
    const userCount=await User.countDocuments()
    if(users){
        return res.status(200).json({
            success:true,
            count:userCount,
            users
        })
    }else{
        return next(new ErrorHandler("Could not find users",400))
    }
})

exports.getUser=catchAsyncErrors(async(req,res,next)=>{
    const userid=req.params.id
    const user=await User.findById(userid)
    if(user){
        return res.status(200).json({
            success:true,
            user
        })
    }else{
        return next(new ErrorHandler("User not found",400))
    }
})

exports.deleteUser=catchAsyncErrors(async(req,res,next)=>{
    const userid=req.params.id
    validateMondoDbId(userid)
    const user=await User.findByIdAndDelete(userid)
    if(user){
        return res.status(200).json({
            success:true,
            deleteduser:user
        })
    }else{
        return next(new ErrorHandler("User not found",400))
    }
})

exports.updateUser=catchAsyncErrors(async(req,res,next)=>{
    // const userid=req.user._id.toString()
    const userid=req.user._id
    validateMondoDbId(userid)
    const user=await User.findByIdAndUpdate(userid,req.body,{new:true})
    if(user){
        return res.status(200).json({
            success:true,
            user
        })
    }else{
        return next(new ErrorHandler("User not found",400))
    }
})

exports.blockUser=catchAsyncErrors(async(req,res,next)=>{
    const {id}=req.params
    validateMondoDbId(id)
    const blockUser=await User.findByIdAndUpdate(id,{isBlocked:true},{new:true})
    if(blockUser){
        return res.status(200).json({
            success:true,
            msg:"User blocked successfully",
            blockUser
        })
    }else{
        return next(new ErrorHandler("User not found",400))
    }
})

exports.unblockUser=catchAsyncErrors(async(req,res,next)=>{
    const {id}=req.params
    validateMondoDbId(id)
    const unblockUser=await User.findByIdAndUpdate(id,{isBlocked:false},{new:true})
    if(unblockUser){
        return res.status(200).json({
            success:true,
            msg:"User unblocked successfully",
            unblockUser
        })
    }else{
        return next(new ErrorHandler("User not found",400))
    }
})