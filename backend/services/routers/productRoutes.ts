import Router from 'express'
import { getAllProducts, deleteProductById, createProduct, updateProduct, getSellerOfProduct } from '../controllers/productController'

const ProductRouter = Router()

ProductRouter('/getAllProducts', getAllProducts)
ProductRouter('/deleteProductById', deleteProductById)
ProductRouter('/createProduct', createProduct)
ProductRouter('/updateProduct', updateProduct)
ProductRouter('/getSellerOfProduct', getSellerOfProduct)

export default ProductRouter