import mongoose from 'mongoose'
import { productSchema, userSchema, sellerSchema } from './models'

const userModel = mongoose.model('User', userSchema)
const sellerModel = mongoose.model('Seller', sellerSchema)
const productModel = mongoose.model('Product', productSchema)


const schemaModels = {
    userModel,
    sellerModel,
    productModel
}
export default schemaModels





