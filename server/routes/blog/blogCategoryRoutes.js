const express=require("express")
const { authMiddleware, isAdmin } = require("../../middlewares/authMiddleware")
const { createCategory, updateCategory, deleteCategory, getOneCategory, getAllCategories } = require("../../controllers/blog/blogCategoryController")
const router=express.Router()

router.route("/newblogcategory").post(authMiddleware,isAdmin,createCategory)
router.route("/upblogcategory/:id").put(authMiddleware,isAdmin,updateCategory)
router.route("/delblogcategory/:id").delete(authMiddleware,isAdmin,deleteCategory)
router.route("/getablogcategory/:id").get(getOneCategory)
router.route("/getallblogcategories").get(getAllCategories)

module.exports=router