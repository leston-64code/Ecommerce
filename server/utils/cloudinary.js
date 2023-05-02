const cloudinary=require("cloudinary")

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret:process.env.CLOUD_API_SECRET
  });


  const cloudinarUploadImg=async(fileToUpload)=>{
    return new Promise((resolve)=>{
        cloudinary.uploader.upload(fileToUpload,(result)=>{
            resolve:{
                {
                    url:result.secure_url
                }
                {
                    resource_type:"auto"
                }
            }
        })
    })
  }


  const productImgResize=async(req,res,next)=>{
    if(!req.files){
        return next()
    }
    await Promise.all()
  }


  module.exports=cloudinarUploadImg