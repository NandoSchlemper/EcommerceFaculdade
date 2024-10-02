import Router from 'express'
import { deleteProductById, createProduct, updateProduct, getSellerOfProduct, getProducts, onlyForToken } from '../controllers/productController'
import { authenticateToken } from 'services/middlewares/authMiddleware'
import cookieParser from 'cookie-parser'
import { secret_key } from 'services/controllers/authController'

const ProductRouter = Router()
ProductRouter.use(cookieParser(secret_key))
ProductRouter.use(authenticateToken)

ProductRouter.get('/getProducts/:id?', getProducts)
ProductRouter.post('/deleteProductById', deleteProductById)
ProductRouter.post('/createProduct', createProduct)
ProductRouter.post('/updateProduct/:id', updateProduct)
ProductRouter.get('/getSellerOfProduct/:id', getSellerOfProduct)
ProductRouter.get('/test', onlyForToken)

export {ProductRouter}