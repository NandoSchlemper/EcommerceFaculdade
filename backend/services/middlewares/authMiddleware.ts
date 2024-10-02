import jwt, {type JwtPayload} from 'jsonwebtoken'
// biome-ignore lint/style/useImportType: <explanation>
import {NextFunction, Request, Response, } from 'express'
import { secret_key } from 'services/controllers/authController';
import type { ObjectId } from 'mongoose';

interface UserPayload extends JwtPayload {
    id: ObjectId,
    type: string,
}

export async function authenticateToken(req: Request, res: Response, next: NextFunction) {
    const authCookie = await req.signedCookies.token
    console.log("Auth Cookie:", authCookie)
    if (!authCookie) {
        return res.status(401).json({message: "Token não cadastrado"})
    };
    
    
    jwt.verify(authCookie, secret_key, (err: Error | null, user: JwtPayload | string | undefined) => {
        if (err) {
            console.error('Token verification error:', err)
            return res.status(401).json({message: "Outro erro"})
        }
        req.user = user as UserPayload;
        next();
    })
}

declare global {
    namespace Express {
        interface Request {
            user: UserPayload
        }
    }
}
