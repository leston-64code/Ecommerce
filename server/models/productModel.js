const mongoose=require("mongoose")

// New Product Schema
let productSchema=new mongoose.Schema({
    title:{
        type:String,
        required:[true,"title requeired"],
        unique:true,
        trim:true,
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

        type:String,
        required:true
    },
    brand:{
        type:String,
        required:true
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
        required:true
    },
    sold:{
        type:Number,
        default:0,
        select:false
    },
    ratings:[
        {
            star:Number,
            comment:{
                type:String
            },
            postedBy:{
                type:mongoose.SchemaTypes.ObjectId,
                ref:"User"
            }
        }
    ],
    totalRatings:{
        type:Number,
        default:0
    }
},
    {
        timestamps:true
    }
)


module.exports=mongoose.model("Product",productSchema)