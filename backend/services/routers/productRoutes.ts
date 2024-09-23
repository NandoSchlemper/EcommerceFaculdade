import Router from 'express'
import { deleteProductById, createProduct, updateProduct, getSellerOfProduct, getProducts } from '../controllers/productController'
import { authenticateToken } from 'services/middlewares/authMiddleware'
import cookieParser from 'cookie-parser'

const ProductRouter = Router()
ProductRouter.use(cookieParser())
ProductRouter.use(authenticateToken)

ProductRouter.get('/getProducts/:id', getProducts)
ProductRouter.post('/deleteProductById', deleteProductById)
ProductRouter.post('/createProduct', createProduct)
ProductRouter.post('/updateProduct/:id', updateProduct)
ProductRouter.get('/getSellerOfProduct/:id', getSellerOfProduct)

export {ProductRouter}