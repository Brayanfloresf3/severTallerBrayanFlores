import { Schema, model } from "mongoose";

let collection = 'products';

let schema = new Schema({
    name: { 
        type: String, 
        required: true 
    },
    brand: { 
        type: String, 
        required: true 
    },
    type: { 
        type: String, 
        required: true 
    },
    price: { 
        type: Number, 
        required: true 
    }
}, {
    timestamps: true 
});

let Products = model(collection, schema);

export default Products;
