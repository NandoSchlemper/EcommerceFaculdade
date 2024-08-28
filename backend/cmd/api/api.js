import express from 'express';

function ServerConnection() {
    const app = express()
    const port = "8080"
    
    app.use(express.json())

    app.listen(port, () => {
        console.log("Servidor rodando!\nlocalhost:" + port)
    })
}

export  {ServerConnection}