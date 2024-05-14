const express = require("express")
const { authMiddleware } = require("../middlewares/authMiddleware")
const { addToCart, removeFromCart, getUserCart, updateQuantity } = require("../controllers/cartController")

const router = express.Router()

router.route("/addtocart/:id").post(authMiddleware, addToCart)
router.route("/removecart/:id").delete(authMiddleware, removeFromCart)
router.route("/getcart").get(authMiddleware, getUserCart)
router.route("/updatecart/:id").put(authMiddleware, updateQuantity)

module.exports = router