import express from 'express';
import { UserRouter } from '../../services/user/routes.js';

async function ServerConnection() {
    const app = express()
    const port = "8080"
    
    app.use(express.json())

    app.listen(port, () => {
        console.log("Servidor rodando!\nlocalhost:" + port)
    })

    app.use('/user', UserRouter)
}

export  {ServerConnection}