const express=require("express")
const { createBlog } = require("../controllers/blogController")

const router=express.Router()

router.route("/createblog").post(createBlog)


module.exports.router