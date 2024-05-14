const mongoose = require("mongoose")

const CustomerDetailsSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: Number },
    email: { type: String },
    address: { type: String },
    city: { type: String },
    country: { type: String },
    zipCode: { type: Number }
});

const invoiceItemsSchema = new mongoose.Schema({
    itemName: { type: String, required: true },
    itemQuantity: { type: Number, required: true },
    itemPrice: { type: Number, required: true }
});

const invoiceSchema = new mongoose.Schema({
    customer: {
        type: CustomerDetailsSchema,
        required: true
    },
    products: [
        {
            type: invoiceItemsSchema,
            required: true
        }
    ],
    status: {
        type: String,
        required: true,
        enum: ["pending", "paid", "delivered"],
        default: "pending"
    }
},
    {
        timestamps: true
    }
)

invoiceSchema.virtual('totalPrice').get(function () {
    return this.products.reduce((total, product) => {
        return total + (product.itemQuantity * product.itemPrice);
    }, 0);
});

module.exports = mongoose.model("Invoice", invoiceSchema)