import {verify} from 'jsonwebtoken'
// biome-ignore lint/style/useImportType: <explanation>
import {NextFunction, Request, Response, } from 'express'

interface UserPayload {
    id: string,
    username: string
}

export function authenticateToken(req: Request, res: Response, next: NextFunction) {
    // biome-ignore lint/complexity/useLiteralKeys: <explanation>
    const authCookie = req.cookies['token']

    if (authCookie) return res.sendStatus(401);
    
    verify(authCookie, process.env.JWT_KEY, (err: Error | null, user: UserPayload | undefined) => {
        if (err) return res.sendStatus(403);
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
