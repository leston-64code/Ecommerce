const express=require("express")
const { createProduct, getProduct, getAllProducts } = require("../controllers/productController")
const router=express.Router()

router.post("/createproduct",createProduct)
router.get("/getaproduct/:id",getProduct)
router.get("/getallproducts",getAllProducts)

module.exports=router