const express=require("express")
const { createCoupon, getAllCoupons, updateCoupon, deleteCoupon } = require("../controllers/couponController")
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware")

const router=express.Router()

router.route("/createcoupon").post(authMiddleware,isAdmin,createCoupon)
router.route("/getallcoupons").get(authMiddleware,isAdmin,getAllCoupons)
router.route("/updatecoupon/:id").put(authMiddleware,isAdmin,updateCoupon)
router.route("/deletecoupon/:id").delete(authMiddleware,isAdmin,deleteCoupon)

module.exports=router