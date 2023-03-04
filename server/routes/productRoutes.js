const express=require("express")
const { createProduct, getProduct, getAllProducts, updateProduct } = require("../controllers/productController")
const router=express.Router()

router.post("/createproduct",createProduct)
router.get("/getaproduct/:id",getProduct)
router.get("/getallproducts",getAllProducts)
router.put("/updateproduct/:id",updateProduct)

module.exports=router