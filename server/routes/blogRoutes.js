const express=require("express")
const { createBlog, updateBlog, getBlog, getAllBlogs, deleteBlog, likeBlog, disLikeBlog, uploadBlogImages } = require("../controllers/blogController")
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware")
const { uploadPhotos, blogImgResize } = require("../middlewares/uploadImages")

const router=express.Router()

router.route("/createblog").post(authMiddleware,isAdmin,createBlog)
router.route("/updateblog/:id").put(authMiddleware,isAdmin,updateBlog)
router.route("/getblog/:id").get(getBlog)
router.route("/getallblogs").get(getAllBlogs)
router.route("/deleteblog/:id").delete(authMiddleware,isAdmin,deleteBlog)
router.route("/likeblog").put(authMiddleware,likeBlog)
router.route("/dislikeblog").put(authMiddleware,disLikeBlog)
router.route("/uploadimages/:id").put(authMiddleware,isAdmin,uploadPhotos.array("images",2),blogImgResize,uploadBlogImages)

module.exports=router