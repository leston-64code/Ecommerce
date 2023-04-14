const mongoose = require("mongoose");

let blogSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        numOfViews: {
            type: Number,
            default: 0,
        },
        isLiked: {
            type: Boolean,
            default: false,
        },
        isDisLiked: {
            type: Boolean,
            default: false,
        },
        likes: [
            {
                type: mongoose.SchemaTypes.ObjectId,
                ref: "User",
            },
        ],
        likes: [
            {
                type: mongoose.SchemaTypes.ObjectId,
                ref: "User",
            },
        ],
        image: {
            type: String,
            default:
                "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        author: {
            type: String,
            default: admin,
        },
    },
    {
        toJSON: {
            virtuals: true,
        },
        toObject: {
            virtuals: true,
        },
        timestamps: true,
    }
);

module.exports = mongoose.model("Blog", blogSchema);
