const multer=require("multer")
const sharp=require("sharp")
const path=require("path")

const userStorage=multer.diskStorage({

    destination:function(req,file,callback){
        console.log(req)
        console.log(file)
        callback(null,path.join(__dirname,"../public/images"))
    },

    filename:function(req,file,callback){
        const uniqueSuffix=Date.now()+ "-"+Math.round(Math.random()*1E9)
        callback(null,file.fieldname+"."+uniqueSuffix+".jpeg")
    }

})


const userFilter=(req,file,callback)=>{

    if(file.mimetype.startWith("image")){
        callback(null,true)
    }else{
        callback({
            message:"Unsupported file format"
        },false)
    }

}

const uploadPhotos=multer({
    storage:userStorage,
    fileFilter:userFilter,
    limits:{fieldSize:2000000}
})


module.exports=uploadPhotos