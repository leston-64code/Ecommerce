const express=require("express")
const { createUser, loginUser, getAllUsers, getUser, deleteUser, updateUser, blockUser, unblockUser } = require("../controllers/userController")
const {authMiddleware,isAdmin} = require("../middlewares/authMiddleware")
const router=express.Router()


router.route("/register").post(createUser)
router.route("/login").post(loginUser)
router.route("/getallusers").get(authMiddleware,isAdmin,getAllUsers)
router.route("/getuser/:id").get(authMiddleware,isAdmin,getUser)
router.route("/deleteuser/:id").delete(authMiddleware,isAdmin,deleteUser)
router.route("/updateuser").put(authMiddleware,updateUser)
router.route("/blockuser/:id").put(authMiddleware,isAdmin,blockUser)
router.route("/unblockuser/:id").put(authMiddleware,isAdmin,unblockUser)

module.exports=router