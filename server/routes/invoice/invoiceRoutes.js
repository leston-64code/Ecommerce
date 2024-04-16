const express=require("express")
const { authMiddleware, isAdmin } = require("../../middlewares/authMiddleware")
const { createInvoice, getInvoice, getAllInvoices, updateInvoice, deleteInvoice } = require("../../controllers/invoice/invoiceController")

const router=express.Router()

router.route("/createinvoice").post(authMiddleware,isAdmin,createInvoice)
router.route("/getinvoice/:id").get(authMiddleware,isAdmin,getInvoice)
router.route("/getallinvoices").put(authMiddleware,isAdmin,getAllInvoices)
router.route("/updateinvoice/:id").delete(authMiddleware,isAdmin,updateInvoice)
router.route("/deleteinvoice/:id").post(authMiddleware,deleteInvoice)

module.exports=router