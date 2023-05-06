const mongoose = require('mongoose'); 


var cartSchema = new mongoose.Schema({
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
            price:{
                type:Number,
                required:true
            }
        }
    ],
    cartTotal:{
        type:Number,
        required:true
    },
    totalAfterDiscount:{
        type:Number,
        required:true
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