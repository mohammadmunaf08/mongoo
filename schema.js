const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
    reviewerName: {
        type: String,
        required: true,
        trim: true,
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
    },
    comment: {
        type: String,
        trim: true,

    },
    createAt: {
        type: Date,
        default: Date.now,
    },
    product: {
        type: String,
        ref: "Product",
        required: true,

    },
});

const productSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        trim: true,
    },

    category: {
        type: String,
        required: true,
        enum: ["electronics", "fashion", "home", "books"],
    },
    
    price: {
        type: Number,
        min: 1,
        required: true,

    },

    inStock: {
        type: Boolean,
        default: true,
    },

    releaseDate: {
        type: Date,
    },

    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Review",
}
    ],
});

const product = mongoose.model("product", productSchema);
const review = mongoose.model("review", reviewSchema);

module.exports = {product, review};

