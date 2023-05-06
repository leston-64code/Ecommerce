const mongoose=require("mongoose")

const addressSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phone:[
        {
            type:Number,
            required:true
        }
    ],
    pincode:{
        type:Number,
        required:true
    },
    streetaddress:{
        type:String,
        required:true,
    },
    landMark:{
        type:String
    },
    district:{
        type:String,
        required:true,
    },
    state:{
        type:String,
        required:true,
    },
    address_type:{
        type:String,
        required:true,
        enum:["home","work"]
    }
})

module.exports=mongoose.model("Address",addressSchema)