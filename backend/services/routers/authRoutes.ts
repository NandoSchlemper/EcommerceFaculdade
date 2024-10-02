import Router from 'express'
import { registerUser, loginUser, secret_key, logoutUser } from '../controllers/authController.js';
import cookieParser from 'cookie-parser';

const AuthRouter = Router();
AuthRouter.use(cookieParser(secret_key))

AuthRouter.post('/register', registerUser)
AuthRouter.post('/login', loginUser)
AuthRouter.get('/logout', logoutUser)

export {AuthRouter}