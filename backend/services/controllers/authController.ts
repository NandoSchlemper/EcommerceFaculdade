import jwt from 'jsonwebtoken'
import UserModule from '../models/userMethods.js'
import cookieConfig from '../../utils/cookiesExpress.js'
// biome-ignore lint/style/useImportType: <explanation>
import { Request, Response } from 'express'
import { handleWebError } from 'utils/handleError.js'

export const secret_key: string = process.env.JWT_KEY ?? ""

export async function registerUser(req: Request, res: Response) {
    try {
        const {type, name, email, password} = req.body
        await UserModule.createUser({type, name, email, password})
        const newUser = await UserModule.getUserByEmail(type, email)
        if (!newUser) {
            return res.status(400).json({message: "Usuário criado mas não encontrado no banco!"})
        }
        const token = jwt.sign({
            userId: newUser._id,
            userType: newUser.type,
        }, secret_key, {expiresIn: '1h'})
        res.cookie('token', token, cookieConfig)
        res.status(201).json({message: "Registrado e Token Enviado p/ cookie"})
    } catch (err) {
        handleWebError(err, res)
    }
}

export async function logoutUser(req: Request, res: Response) {
    try {
        const token = req.signedCookies.token
        if (!token) {
            return res.status(404).json({message: "Usuário não está logado!"})
        }

        res.clearCookie('token', cookieConfig).status(200).json({message: "Usuário deslogado com sucesso"})
        console.log(req.signedCookies.token)
    } catch (err) { 
        handleWebError(err, res)
    }
}

export async function loginUser(req: Request, res: Response) {
    try {
        const { type, email, password } = req.body;
        const result = await UserModule.loginParameters(type, email, password);

        if (result) {
            const LogedUser = await UserModule.getUserByEmail(type, email);

            if (!LogedUser) {
                return res.status(400).json({message: "Usuário não encontrado no DB"})
            }

            const token = jwt.sign({
                userId: LogedUser._id,
                userType: LogedUser.type,
            }, secret_key, {expiresIn: '1h'})
            res.cookie('token', token, cookieConfig);
            res.status(200).json({ token });
        } else {
            res.status(401).json({ message: 'Invalid email or password.' });
        }
    } catch (err) {
        handleWebError(err, res)
    }
}

