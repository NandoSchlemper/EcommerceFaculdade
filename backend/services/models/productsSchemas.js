import mongoose from 'mongoose'

const productSchema = mongoose.Schema({
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
        type: mongoose.Schema.Types.ObjectId, ref: 'Seller', required: true
    } // Perguntar p pablo se compensa mais fazer isso, ou uma tabela separada de Log (Seller - Product)
})

ProductModel = mongoose.model('Product', productSchema)