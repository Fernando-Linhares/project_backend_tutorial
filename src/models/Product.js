import mongoose, { Schema } from "mongoose";

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
},
{
    timestamps: true
});

const Product = mongoose.model('Product', ProductSchema);

export default Product;