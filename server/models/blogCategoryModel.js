const mongoose = require("mongoose")

const blogCategorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        minLength: 2
    }
},
    {
        timestamps: true
    }
)

module.exports = mongoose.model("Blogcategory", blogCategorySchema)