const express = require("express")
const { createUser, loginUser, getAllUsers, getUser, deleteUser, updateUser, blockUser, unblockUser, handleRefreshToken, logoutUser, updatePassword, forgotPasswordToken, resetPassword, adminLogin, getWishlist, verifyUserVerificationCode, requestVerificationCode } = require("../controllers/userController")
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware")
const isLoggedIn = require("../middlewares/isLoggedIn")
const router = express.Router()


router.route("/register").post(createUser)
router.route("/verifyaccount").post(isLoggedIn, verifyUserVerificationCode)
router.route("/requestverificationcode").post(isLoggedIn, requestVerificationCode)
router.route("/login").post(loginUser)
router.route("/checksession").post(isLoggedIn, async (req, res, next) => {
    return res.status(200).json({
        success: true
    })
})
router.route("/forgotpasswordtoken").post(forgotPasswordToken)
router.route("/reset-password/:token").post(resetPassword)
router.route("/password").put(authMiddleware, updatePassword)
router.route("/updateuser").put(authMiddleware, updateUser)
router.route("/refresh").get(handleRefreshToken)
router.route("/logout").get(logoutUser)
router.route("/getwishlist").get(authMiddleware, getWishlist)

// Admin routes
router.route("/adminlogin").post(adminLogin)
router.route("/blockuser/:id").put(authMiddleware, isAdmin, blockUser)
router.route("/unblockuser/:id").put(authMiddleware, isAdmin, unblockUser)
router.route("/getallusers").get(authMiddleware, isAdmin, getAllUsers)
router.route("/getuser/:id").get(authMiddleware, isAdmin, getUser)
router.route("/deleteuser/:id").delete(authMiddleware, isAdmin, deleteUser)

module.exports = router