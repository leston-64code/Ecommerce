const express=require("express")
const { createBlog, updateBlog } = require("../controllers/blogController")
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware")

const router=express.Router()

router.route("/createblog").post(authMiddleware,isAdmin,createBlog)
router.route("/updateblog/:id").put(authMiddleware,isAdmin,updateBlog)

module.exports=router