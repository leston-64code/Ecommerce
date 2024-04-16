const catchAsyncErrors = require("../../middlewares/catchAsyncErrors");
const Invoice = require("../../models/invoiceModel");
const ErrorHandler = require("../../utils/ErrorHandler")

// Create Invoice
exports.createInvoice = catchAsyncErrors(async (req, res, next) => {
    const newInvoice = await Invoice.create(req.body);
    if (newInvoice != null) {
        return res.status(200).json({ success: true, newInvoice });
    }
});

// Get Invoice by ID
exports.getInvoice = catchAsyncErrors(async (req, res, next) => {
    const invoice = await Invoice.findById(req.params.id);

    if (invoice != null) {
        // Populate the virtual totalPrice field
        invoice.populate('totalPrice');

        // Convert to plain JavaScript object to access virtual field
        const invoiceObject = invoice.toObject();

        return res.status(200).json({ success: true, invoice: invoiceObject });
    } else {
        return next(new ErrorHandler("Invoice not found", 404));
    }
});


// Get all Invoices
exports.getAllInvoices = catchAsyncErrors(async (req, res, next) => {
    const invoices = await Invoice.find();
    const invoiceCount = await Invoice.countDocuments();
    if (invoices != null) {
        return res.status(200).json({ success: true, invoiceCount, invoices });
    } else {
        return next(new ErrorHandler("Could not get invoices", 400));
    }
});

// Update Invoice by ID
exports.updateInvoice = catchAsyncErrors(async (req, res, next) => {
    const updatedInvoice = await Invoice.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (updatedInvoice != null) {
        return res.status(200).json({ success: true, updatedInvoice });
    } else {
        return next(new ErrorHandler("Invoice not found", 404));
    }
});

// Delete Invoice by ID
exports.deleteInvoice = catchAsyncErrors(async (req, res, next) => {
    const invoice = await Invoice.findById(req.params.id);
    if (invoice != null) {
        await invoice.remove();
        return res.status(200).json({ success: true, message: "Invoice deleted successfully" });
    } else {
        return next(new ErrorHandler("Invoice not found", 404));
    }
});
