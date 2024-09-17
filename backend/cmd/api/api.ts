// biome-ignore lint/style/useImportType: <explanation>
import express, {Request, Response} from 'express';
import { UserRouter } from '../../services/routers/userRoutes.js';
import { AuthRouter } from '../../services/routers/authRoutes.js';

async function ServerConnection() {
    const app = express()
    const port = "8080"
    
    app.use(express.json())

    app.listen(port, () => {
        console.log(`Servidor rodando!\nlocalhost:${port}`)
    })

    app.get("/", (req: Request, res: Response) => {
        res.send("Welcome 2 our application!")
    })

    app.use('/user', UserRouter)
    app.use('/auth', AuthRouter)
}

export  {ServerConnection}