const express=require("express")
const { createUser, loginUser, getAllUsers, getUser } = require("../controllers/userController")
const router=express.Router()


router.route("/register").post(createUser)
router.route("/login").post(loginUser)
router.route("/getallusers").get(getAllUsers)
router.route("/getuser/:id").get(getUser)

module.exports=router