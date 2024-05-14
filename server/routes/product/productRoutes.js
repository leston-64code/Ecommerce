const express = require("express")
const { createProduct, getProduct, getAllProducts, updateProduct, deleteProduct, addToWishlist, rating, uploadImages, deleteProductImage } = require("../../controllers/product/productController.js")
const router = express.Router()
const { authMiddleware, isAdmin } = require("../../middlewares/authMiddleware")
const { uploadPhotos, productImgResize } = require("../../middlewares/uploadImages")

router.post("/createproduct", authMiddleware, isAdmin, createProduct)
router.get("/getaproduct/:id", getProduct)
router.get("/getallproducts", getAllProducts)
router.put("/updateproduct/:id", authMiddleware, isAdmin, updateProduct)
router.delete("/deleteproduct/:id", authMiddleware, isAdmin, deleteProduct)
router.delete("/deleteimg/:id", authMiddleware, isAdmin, deleteProductImage)

router.route("/addtowishlist").put(authMiddleware, isAdmin, addToWishlist)
router.route("/rating").put(authMiddleware, rating)

router.put("/upload/:id", authMiddleware, isAdmin, uploadPhotos.array("images", 10), productImgResize, uploadImages)

module.exports = router