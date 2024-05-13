const express = require("express")
const { authMiddleware, isAdmin } = require("../../middlewares/authMiddleware")
const { createCategory, updateCategory, deleteCategory, getOneCategory, getAllCategories } = require("../../controllers/product/proCategoryController")
const isLoggedIn = require("../../middlewares/isLoggedIn")
const router = express.Router()


router.route("/newcategory").post(isLoggedIn, isAdmin, createCategory)
router.route("/upprocategory/:id").put(isLoggedIn, isAdmin, updateCategory)
router.route("/delprocategory/:id").delete(isLoggedIn, isAdmin, deleteCategory)
router.route("/getaprocategory/:id").get(getOneCategory)
router.route("/getallprocategories").get(getAllCategories)

module.exports = router