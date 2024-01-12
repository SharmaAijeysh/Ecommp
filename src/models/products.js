import mongoose from "mongoose";



const ProductSchema = new mongoose.Schema(
    {
        product: Ty
    }
)

const Product =mongoose.models.Product || mongoose.model("Product", ProductSchema);

export default Product;