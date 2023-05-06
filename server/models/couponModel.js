const mongoose=require("mongoose")

const couponSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        index:true,
        uppercase:true
    },
    expiry:{
        type:Date,
        required:true
    },
    applied_users:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        }
    ],
    remaining_redeems:{
        type:Number,
        required:true
    },
    discount:{
        type:Number,
        required:true
    }
},
{
    timestamps:true
}
)

module.exports=mongoose.model("Coupon",couponSchema)