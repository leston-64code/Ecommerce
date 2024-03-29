const express=require("express")
const { createUser, loginUser, getAllUsers, getUser, deleteUser, updateUser, blockUser, unblockUser, handleRefreshToken, logoutUser, updatePassword, forgotPasswordToken, resetPassword, adminLogin, getWishlist} = require("../controllers/userController")
const {authMiddleware,isAdmin} = require("../middlewares/authMiddleware")
const router=express.Router()


router.route("/register").post(createUser)
router.route("/login").post(loginUser)
router.route("/forgotpasswordtoken").post(forgotPasswordToken)
router.route("/reset-password/:token").post(resetPassword)
router.route("/password").put(authMiddleware,updatePassword)
router.route("/updateuser").put(authMiddleware,updateUser)
router.route("/refresh").get(handleRefreshToken)
router.route("/logout").get(logoutUser)
router.route("/getwishlist").get(authMiddleware,getWishlist)

// Admin routes
router.route("/adminlogin").post(adminLogin)
router.route("/blockuser/:id").put(authMiddleware,isAdmin,blockUser)
router.route("/unblockuser/:id").put(authMiddleware,isAdmin,unblockUser)
router.route("/getallusers").get(authMiddleware,isAdmin,getAllUsers)
router.route("/getuser/:id").get(authMiddleware,isAdmin,getUser)
router.route("/deleteuser/:id").delete(authMiddleware,isAdmin,deleteUser)

module.exports=router