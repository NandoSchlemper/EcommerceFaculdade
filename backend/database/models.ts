import mongoose from 'mongoose'

// Client Schema
export const userSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId
    },
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        unique: true,
        required: true
    },

    password: {
        type: String,
        required: true
    }
})

// Seller Schema
export const sellerSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId
    },
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        unique: true,
        required: true
    },

    password: {
        type: String,
        required: true
    }
})

// Product Schema
export const productSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId
    },
    name: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true,
    },

    value: {
        type: Number,
        required: true,
    },

    shipment: {
        type: Number,
        required: true
    },

    sellerId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Seller',
        required: true
    } 
})