const express=require("express")
const { createAddress, deleteAddress, updateAddress } = require("../controllers/addressController")
const { authMiddleware } = require("../middlewares/authMiddleware")
const router=express.Router()

router.route("/newaddress").post(authMiddleware,createAddress)
router.route("/deleteaddress/:id").delete(authMiddleware,deleteAddress)
router.route("/updateaddress/:id").put(authMiddleware,updateAddress)

module.exports=router