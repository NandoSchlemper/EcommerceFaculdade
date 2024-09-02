import { Router } from "express";
import CreateUser from "../user/store.js"

const UserRouter = Router()

// Get a list of Users
UserRouter.get('/getUsers', (req, res) => {
    res.send("hai")
})

// Get User By ID
UserRouter.get('/getUsers/:userId', (req, res) => {
    res.send(req.params)
})

// Post User (create)
UserRouter.post('/createUser', async (req, res) => {
    const {username, email, password} = req.body
    try {
        await CreateUser(username, email, password)
        console.log("Usuário cadastrado com sucesso!")
    } catch(err) {
        console.error("Erro ao vincular usuário com o DB\n", err.message)
    }
})  

export {UserRouter}