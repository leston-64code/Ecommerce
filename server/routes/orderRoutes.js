const express=require("express")
const { createOrder } = require("../controllers/orderController")
const { authMiddleware } = require("../middlewares/authMiddleware")
const router=express.Router()

router.route("/createorder").post(authMiddleware,createOrder)

module.exports=router