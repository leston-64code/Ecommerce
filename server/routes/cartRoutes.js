const express=require("express")
const { authMiddleware } = require("../middlewares/authMiddleware")
const { addToCart, removeFromCart, getUserCart } = require("../controllers/cartController")

const router=express.Router()

router.route("/addtocart/:id").post(authMiddleware,addToCart)
router.route("/removecart/:id").delete(authMiddleware,removeFromCart)
router.route("/getcart").delete(authMiddleware,getUserCart)

module.exports=router