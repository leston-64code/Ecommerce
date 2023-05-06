const mongoose=require("mongoose")

const orderSchema=new mongoose.Schema({
    products:[
        {
            product:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"Product"
            },
            count:{
                type:Number,
                required:true
            },
            color:{
                type:String,
                required:true
            },
        }
    ],
    payementIntent:{},
    orderStatus:{
        type:String,
        default:"Not Processed",
        required:true,
        enum:["Not Processed","Cash on Delivery","Dispatched","Processing","Cancelled","Delivered"]
    },
    orderBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
},
{
    timestamps:true
}
)


module.exports=mongoose.model("Order",orderSchema)