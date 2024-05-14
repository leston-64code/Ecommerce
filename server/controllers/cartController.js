const catchAsyncErrors = require("../middlewares/catchAsyncErrors")
const Cart = require("../models/cartModel")
const Product = require("../models/productModel")
const User = require("../models/userModel")
const CartProduct = require("../models/cartProductModel")
const ErrorHandler = require("../utils/ErrorHandler")
const Coupon = require("../models/couponModel")

exports.addToCart = catchAsyncErrors(async (req, res, next) => {
    const id = req.params.id
    const product = await Product.findById(id)
    const user = await User.findById(req.user._id).populate("cart")

    if (user.cart == null) {

        const cartPro = await CartProduct.create({
            product: product._id,
            price: product.price,
            totalPrice: product.price
        })

        let cartTotal = product.price
        let orderBy = req.user._id

        const newcart = await Cart.create({ cartTotal, orderBy, products: [cartPro] })
        user.cart = newcart

        await user.save()
        res.status(200).json({
            success: true,
            msg: "Added to cart"
        })

    } else {

        const cartPro = await CartProduct.create({
            product: product._id,
            price: product.price,
            totalPrice: product.price
        })
        let totalCartPrice = 0;

        const cart = await Cart.findById(user.cart._id).populate("products")
        if (cart) {

            cart.products.push(cartPro)

            for (let i = 0; i < cart.products.length; i++) {
                let ele = cart.products[i]
                totalCartPrice = totalCartPrice + ele.totalPrice
            }

            cart.cartTotal = totalCartPrice

            cart.totalAfterDiscount = totalCartPrice

            await cart.save()
            return res.status(200).json({
                success: true,
                msg: "Added to cart"
            })

        } else {
            return next(new ErrorHandler("Could not be added to cart", 400))
        }

    }
})

exports.getUserCart = catchAsyncErrors(async (req, res, next) => {
    let cart = await Cart.findById(req.user.cart._id).populate("products")
    if (cart) {
        let count = cart.products.length
        return res.status(200).json({
            success: true,
            count,
            cartItems: cart
        })
    } else {
        return next(new ErrorHandler("Cart not found", 400))
    }
})

exports.removeFromCart = catchAsyncErrors(async (req, res, next) => {
    const cartProID = req.params.id
    let cart = await Cart.findById(req.user.cart)
    let cartPro = await CartProduct.findById(cartProID)

    if (cart && cartPro) {

        let cartProducts = []
        for (let i = 0; i < cart.products.length; i++) {
            let ele = cart.products[i]
            if (ele._id.toString() != cartProID.toString()) {
                cartProducts.push(ele)
            } else {
                await CartProduct.findByIdAndDelete(cartProID)
            }
        }

        cart.products = cartProducts
        cart.cartTotal = cart.cartTotal - cartPro.price
        await cart.save()

        return res.status(200).json({
            success: true,
            msg: "Removed from cart"
        })

    } else {
        return next(new ErrorHandler("Cart product not found", 400))
    }
})

exports.updateQuantity = catchAsyncErrors(async (req, res, next) => {
    const id = req.params.id
    let { count } = req.body
    const product = await CartProduct.findById(id)
    if (product) {
        product.count = count
        product.totalPrice = product.price * count;
        await product.save()

        let cart = await Cart.findById(req.user.cart).populate("products")
        let newTotalCartPrice = 0;
        for (let i = 0; i < cart.products.length; i++) {
            let ele = cart.products[i]
            newTotalCartPrice = newTotalCartPrice + ele.totalPrice
        }
        // console.log(newTotalCartPrice)
        cart.cartTotal = newTotalCartPrice
        await cart.save()
        return res.status(200).json({
            success: true,
            msg: "Quantity updated"
        })
    } else {
        return next(new ErrorHandler("Something went wrong", 400))
    }
})

exports.applyCoupon = catchAsyncErrors(async (req, res, next) => {

    const { coupon } = req.body
    const validCoupon = await Coupon.findOne({ name: coupon })

    if (validCoupon) {

        for (let i = 0; i < validCoupon.applied_users.length; i++) {
            let ele = validCoupon.applied_users[i]
            if (ele.toString() === req.user._id.toString()) {
                return next(new ErrorHandler("Coupon already redeemed", 400))
            }
        }

        const cart = await Cart.findById(req.user.cart._id)
        if (cart) {

            if (validCoupon.remaining_redeems <= 0) {
                return next(new ErrorHandler("Sorry coupon limit reached", 400))
            }

            cart.totalAfterDiscount = cart.cartTotal - (cart.cartTotal * (validCoupon.discount) / 100).toFixed(2)
            cart.isCouponApplied = true
            await cart.save()

            validCoupon.applied_users.push(req.user._id)
            validCoupon.remaining_redeems = validCoupon.remaining_redeems - 1
            await validCoupon.save()

            return res.status(200).json({
                success: true,
                msg: "Coupon applied successfully"
            })

        } else {
            return next(new ErrorHandler("Cart not found", 400))
        }
    } else {
        return next(new ErrorHandler("Invlaid coupon"))
    }
})