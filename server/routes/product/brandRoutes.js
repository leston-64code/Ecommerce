const express = require("express")
const { authMiddleware, isAdmin } = require("../../middlewares/authMiddleware")
const { createBrand, updateBrand, deleteBrand, getOneBrand, getAllBrands } = require("../../controllers/product/brandController")
const isLoggedIn = require("../../middlewares/isLoggedIn")
const router = express.Router()

router.route("/createbrand").post(isLoggedIn, isAdmin, createBrand)
router.route("/updatebrand/:id").put(authMiddleware, isAdmin, updateBrand)
router.route("/deletebrand/:id").delete(authMiddleware, isAdmin, deleteBrand)
router.route("/getabrand/:id").get(getOneBrand)
router.route("/getallbrands").get(getAllBrands)

module.exports = router