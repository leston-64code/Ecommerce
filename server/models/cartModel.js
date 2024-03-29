const mongoose = require('mongoose'); 


var cartSchema = new mongoose.Schema({
    products:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"CartProduct"
        }
    ],
    cartTotal:{
        type:Number,
        required:true
    },
    totalAfterDiscount:{
        type:Number,
        required:true,
        default:0
    },
    isCouponApplied:{
        type:Boolean,
        default:false
    },
    orderBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
},
{
    timestamps:true
});


module.exports = mongoose.model('Cart', cartSchema);