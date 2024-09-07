import express from 'express';
import { UserRouter } from '../../services/routers/userRoutes.js';

async function ServerConnection() {
    const app = express()
    const port = "8080"
    
    app.use(express.json())

    app.listen(port, () => {
        console.log("Servidor rodando!\nlocalhost:" + port)
    })

    app.get("/", (req, res) => {
        res.send("Welcome 2 our application!")
    })

    app.use('/user', UserRouter)
}

export  {ServerConnection}