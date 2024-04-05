const express=require("express")
const { authMiddleware, isAdmin } = require("../../middlewares/authMiddleware")
const { createCategory, updateCategory, deleteCategory, getOneCategory, getAllCategories } = require("../../controllers/product/proCategoryController")
const router=express.Router()

router.route("/newcategory").post(authMiddleware,isAdmin,createCategory)
router.route("/upprocategory/:id").put(authMiddleware,isAdmin,updateCategory)
router.route("/delprocategory/:id").delete(authMiddleware,isAdmin,deleteCategory)
router.route("/getaprocategory/:id").get(getOneCategory)
router.route("/getallprocategories").get(getAllCategories)

module.exports=router