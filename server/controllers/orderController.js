const catchAsyncErrors = require("../middlewares/catchAsyncErrors")
const Order=require("../models/orderModel")
const User=require("../models/userModel")
const Cart=require("../models/cartModel")
const Product=require("../models/productModel")
const CartProduct=require("../models/cartProductModel")
const uniqid = require('uniqid'); 
const ErrorHandler = require("../utils/ErrorHandler")

exports.createOrder=catchAsyncErrors(async(req,res,next)=>{
    const {COD}=req.body
    if(!COD){
        return next(new ErrorHandler("Creation of order failed"))
    }
    const cart=await Cart.findById(req.user.cart._id).populate("products")
  
    let finalAmount;
    if(cart.isCouponApplied===true){
        finalAmount=cart.totalAfterDiscount
    }
    finalAmount=cart.cartTotal

    let products=[];
    for(let i=0;i<cart.products.length;i++){
        let ele=cart.products[i]
        
        let obj={}
        obj.product=ele.product
        obj.count=ele.count
        obj.price=ele.price
        obj.color=ele.color
        if(ele.count>1){
            obj.totalPrice=ele.totalPrice
        }
        products.push(obj)
    }
    
    let paymentIntent={
        id:uniqid(),
        method:"COD",
        amount:finalAmount,
        status:"Cash on Delivery",
        created:Date.now(),
        currency:"Rupees"
    }

    const order=await Order.create({products,paymentIntent,orderBy:req.user._id,orderStatus:"Cash on Delivery"})

    if(order){
        for(let i=0;i<order.products.length;i++){
            let ele=order.products[i]
            await Product.findByIdAndUpdate(ele.product,{$inc:{sold:ele.count,quantity:-ele.count}})
        }
        for(let i=0;i<cart.products.length;i++){
            let ele=cart.products[i]
            await CartProduct.findByIdAndDelete(ele._id)
        }
    }

    return res.status(200).json({
        success:true,
        msg:"Order placed successfully",
        order
    })

})

exports.getOrder=catchAsyncErrors(async(req,res,next)=>{
    const order=await Order.find({orderBy:req.user._id})
    if(order){
        return res.status(200).json({
            success:true,
            order
        })
    }else{
        return next(new ErrorHandler("Order not found",400))
    }
})

exports.getAllOrders=catchAsyncErrors(async(req,res,next)=>{
    const orders=await Order.find()
    let count=orders.length
    console.log(count)
    if(orders){
        return res.status(200).json({
            success:true,
            count,
            orders
        })
    }else{
        return next(new ErrorHandler("Orders not found",400))
    }
})

exports.updateOrderStatus=catchAsyncErrors(async(req,res,next)=>{
    const id=req.params.id
    const status=req.body.status

    const order=await Order.findByIdAndUpdate(id,{orderStatus:status,paymentIntent:{status}},{new:true})

    if(order){
        return res.status(200).json({
            success:true,
            order
        })
    }else{
        return next(new ErrorHandler("Orders not found",400))
    }
})