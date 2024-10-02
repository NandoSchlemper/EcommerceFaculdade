import mongoose from 'mongoose'
import { productSchema, userSchema, sellerSchema, type ProductDocument, type UserDocument } from './models'

const userModel = mongoose.model<UserDocument>('User', userSchema)
const sellerModel = mongoose.model<UserDocument>('Seller', sellerSchema)
const productModel = mongoose.model<ProductDocument>('Product', productSchema)


const schemaModels = {
    userModel,
    sellerModel,
    productModel
}
export default schemaModels





