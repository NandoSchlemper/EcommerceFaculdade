import mongoose, {Schema, type Types, type Document} from 'mongoose'


export interface ProductDocument extends Document {
    name: string;
    description: string;
    value: number;
    shipment: number;
    sellerId: Types.ObjectId
}

export interface UserDocument extends Document {
    name: string;
    type: string;
    email: string;
    password: string;
}

// Client Schema
export const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    type: {type: String, default: "user", required: true},
    email: {type: String, unique: true,required: true},
    password: {type: String, required: true}
})

// Seller Schema
export const sellerSchema = new mongoose.Schema({
    name: {type: String, required: true},
    type: {type: String, default: "seller", required: true},
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true}
})

// Product Schema
export const productSchema = new mongoose.Schema<ProductDocument>({
    name: {type: String, required: true},
    description: {type: String, required: true},
    value: {type: Number, required: true},
    shipment: {type: Number, required: true},
    sellerId: {type: Schema.Types.ObjectId, required: true} 
})