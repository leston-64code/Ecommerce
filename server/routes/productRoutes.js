const express=require("express")
const { createProduct, getProduct, getAllProducts, updateProduct, deleteProduct, addToWishlist, rating } = require("../controllers/productController")
const router=express.Router()
const {authMiddleware,isAdmin} = require("../middlewares/authMiddleware")

router.post("/createproduct",authMiddleware,isAdmin,createProduct)
router.get("/getaproduct/:id",getProduct)
router.get("/getallproducts",getAllProducts)
router.put("/updateproduct/:id",authMiddleware,isAdmin,updateProduct)
router.delete("/deleteproduct/:id",authMiddleware,isAdmin,deleteProduct)

router.route("/addtowishlist").put(authMiddleware,isAdmin,addToWishlist)
router.route("/rating").put(authMiddleware,rating)

module.exports=router