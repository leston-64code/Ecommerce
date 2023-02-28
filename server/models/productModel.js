const mongoose=require("mongoose")

// New Product Schema
let productSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true
    },
    slug:{
        type:String,
        unique:true,
        required:true,
        lowercase:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    category:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"Category"
    },
    brand:{
        type:String,
        enum:["Apple","Samsung","Lenovo"]
    },
    quantity:{
        type:Number,
        required:true
    },
    images:{
        type:Array
    },
    color:{
        type:String,
        enum:["Black","Brown","Red"]
    },
    sold:{
        type:Number,
        default:0
    },
    ratings:[
        {
            star:Number,
            postedBy:{
                type:mongoose.SchemaTypes.ObjectId,
                ref:"User"
            }
        }
    ]
},
    {
        timestamps:true
    }
)


module.exports=mongoose.model("Product",productSchema)