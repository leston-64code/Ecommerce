const express = require("express")
const { createCoupon, getAllCoupons, updateCoupon, deleteCoupon } = require("../controllers/couponController")
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware")
const { applyCoupon } = require("../controllers/cartController")
const isLoggedIn = require("../middlewares/isLoggedIn")

const router = express.Router()

router.route("/createcoupon").post(isLoggedIn, isAdmin, createCoupon)
router.route("/getallcoupons").get(isLoggedIn, isAdmin, getAllCoupons)
router.route("/updatecoupon/:id").put(authMiddleware, isAdmin, updateCoupon)
router.route("/deletecoupon/:id").delete(authMiddleware, isAdmin, deleteCoupon)
router.route("/redeemcoupon").post(authMiddleware, applyCoupon)

module.exports = router