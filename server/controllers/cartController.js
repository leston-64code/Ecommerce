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
            totalPrice:product.price
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
            totalPrice:product.price
        })
        let totalCartPrice=0;

        const cart=await Cart.findById(user.cart._id).populate("products")
        if(cart){
            
            cart.products.push(cartPro)

            for(let i=0;i<cart.products.length;i++){
                let ele=cart.products[i]
                totalCartPrice=totalCartPrice+ele.totalPrice
            }
            
            cart.cartTotal=totalCartPrice

            cart.totalAfterDiscount=totalCartPrice

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
    let cart=await Cart.findById(req.user.cart._id).populate("products")
    if(cart){ 
        let count=cart.products.length
        return res.status(200).json({
            success:true,
            count,
            cartItems:cart
        })
    }else{
        return next(new ErrorHandler("Cart not found",400))
    }
})

exports.removeFromCart=catchAsyncErrors(async(req,res,next)=>{
    const cartProID=req.params.id
    let cart=await Cart.findById(req.user.cart)
    let cartPro=await CartProduct.findById(cartProID)

    if(cart && cartPro){

        let cartProducts=[]
        for(let i=0;i<cart.products.length;i++){
            let ele=cart.products[i]
            if(ele._id.toString()!=cartProID.toString()){
                cartProducts.push(ele)
            }else{
                await CartProduct.findByIdAndDelete(cartProID)
            }
        }

        cart.products=cartProducts
        cart.cartTotal=cart.cartTotal-cartPro.price
        cart.totalAfterDiscount=cart.totalAfterDiscount-cartPro.price
        await cart.save()

        return res.status(200).json({
            success:true,
            msg:"Removed from cart"
        })

    }else{
        return next(new ErrorHandler("Cart product not found",400))
    }
})

exports.updateQuantity=catchAsyncErrors(async(req,res,next)=>{
    const id=req.params.id
    let {count}=req.body
    const product=await CartProduct.findById(id)
    if(product){
        product.count=count
        product.totalPrice=product.price*count;
        await product.save()

        let cart=await Cart.findById(req.user.cart).populate("products")
        let newTotalCartPrice=0;
        for(let i=0;i<cart.products.length;i++){
            let ele=cart.products[i]
            newTotalCartPrice=newTotalCartPrice+ele.totalPrice
        }
        // console.log(newTotalCartPrice)
        cart.cartTotal=newTotalCartPrice
        cart.totalAfterDiscount=newTotalCartPrice
        await cart.save()
        return res.status(200).json({
            success:true,
            msg:"Quantity updated"
        })
    }else{
        return next(new ErrorHandler("Something went wrong",400))
    }
})