const express=require("express")
const { createOrder, getOrder, getAllOrders, updateOrderStatus } = require("../controllers/orderController")
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware")
const router=express.Router()

router.route("/createorder").post(authMiddleware,createOrder)
router.route("/getorder").get(authMiddleware,getOrder)
router.route("/getallorders").get(authMiddleware,isAdmin,getAllOrders)
router.route("/uporderstatus/:id").put(authMiddleware,isAdmin,updateOrderStatus)

module.exports=router