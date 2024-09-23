import jwt from 'jsonwebtoken'
import UserModule, { verifyType } from '../models/userMethods.js'
import cookieConfig from '../../utils/cookiesExpress.js'
// biome-ignore lint/style/useImportType: <explanation>
import { Request, Response } from 'express'
import { handleWebError } from 'utils/handleError.js'

const secret_key: string = process.env.JWT_KEY ?? ""

export async function registerUser(req: Request, res: Response) {
    try {
        const {type, name, email, password} = req.body
        console.log(req.body)

        await UserModule.createUser({type, name, email, password});

        const newUser = await UserModule.getUserByEmail(type, email)

        if (!newUser) {console.log("Usuário não encontrado")}
        // biome-ignore lint/suspicious/noExplicitAny: <explanation>
        const token = jwt.sign({userId: (newUser as any)._id}, secret_key, {expiresIn: '1h'})
        
        res.cookie('token', token, cookieConfig)
        res.status(201).json({message: "Registrado e Token Enviado p/ cookie"})
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
            // biome-ignore lint/suspicious/noExplicitAny: <explanation>
            const token = jwt.sign({ userId: (LogedUser as any)._id }, secret_key, { expiresIn: '1h' });
            res.cookie('token', token, cookieConfig);
            res.status(200).json({ token });
        } else {
            res.status(401).json({ message: 'Invalid email or password.' });
        }
    } catch (err) {
        handleWebError(err, res)
    }
}

