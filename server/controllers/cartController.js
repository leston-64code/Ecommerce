const catchAsyncErrors = require("../middlewares/catchAsyncErrors")
const Cart=require("../models/cartModel")
const Product=require("../models/productModel")
const User=require("../models/userModel")
const CartProduct=require("../models/cartProModel")
const ErrorHandler = require("../utils/ErrorHandler")

exports.addToCart=catchAsyncErrors(async(req,res,next)=>{
    const id=req.params.id
    const product=await Product.findById(id)
    const user=await User.findById(req.user._id).populate("cart")

    if(user.cart==null){
        
        const cartPro=await CartProduct.create({
            product:product._id,
            price:product.price,
        })
        
        let cartTotal=product.price
        let totalAfterDiscount=product.price
        let orderBy=req.user._id

        const newcart=await Cart.create({cartTotal,totalAfterDiscount,orderBy,products:[cartPro]})
        user.cart=newcart

        await user.save()
        res.status(200).json({
            success:true,
            msg:"Added to cart"
        })

    }else{

        const cartPro=await CartProduct.create({
            product:product._id,
            price:product.price,
        })
        let totalPrice=0;

        const cart=await Cart.findById(user.cart._id).populate("products")
        if(cart){
            
            cart.products.push(cartPro)

            for(let i=0;i<cart.products.length;i++){
                let ele=cart.products[i]
                totalPrice=totalPrice+ele.price
            }
            
            cart.cartTotal=totalPrice

            cart.totalAfterDiscount=totalPrice

            await cart.save()
                return res.status(200).json({
                success:true,
                msg:"Added to cart"
            })

    }else{
        return next(new ErrorHandler("Could not be added to cart",400))
    }

    }
})

exports.getUserCart=catchAsyncErrors(async(req,res,next)=>{

})

exports.removeFromCart=catchAsyncErrors(async(req,res,next)=>{

})