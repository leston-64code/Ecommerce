const express=require("express")
const { createBlog, updateBlog, getBlog, getAllBlogs, deleteBlog, likeBlog } = require("../controllers/blogController")
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware")

const router=express.Router()

router.route("/createblog").post(authMiddleware,isAdmin,createBlog)
router.route("/updateblog/:id").put(authMiddleware,isAdmin,updateBlog)
router.route("/getblog/:id").get(getBlog)
router.route("/getallblogs").get(getAllBlogs)
router.route("/deleteblog/:id").delete(authMiddleware,isAdmin,deleteBlog)
router.route("/likeblog").post(authMiddleware,likeBlog)

module.exports=router