import Router from 'express'
import { registerUser, loginUser } from '../controllers/authController.js';
import cookieParser from 'cookie-parser';

const AuthRouter = Router();
AuthRouter.use(cookieParser())

AuthRouter.post('/register', registerUser)
AuthRouter.post('/login', loginUser)

export {AuthRouter}