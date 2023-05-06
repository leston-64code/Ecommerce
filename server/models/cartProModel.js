const mongoose = require('mongoose');


var cartProSchema = new mongoose.Schema({
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product"
    },
    count:{
        type:Number,
        required:true,
        default:1
    },
    color:{
        type:String,
        required:true,
        default:"white"
    },
    price:{
        type:Number,
        required:true
    },
    totalPrice:{
        type:Number,
        required:true
    }
});

//Export the model
module.exports = mongoose.model('CartProduct',cartProSchema );