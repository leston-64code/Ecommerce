const mongoose=require("mongoose")

const proCategorySchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true,
        index:true
    }
},
{
    timestamps:true
}
)

module.exports=mongoose.model("Procategory",proCategorySchema)