import { Router } from "express";
import {createUser} from "../user/store.js"

const UserRouter = Router()


// Get a list of Users
UserRouter.get('/getUsers', async (req, res) => {
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
        await createUser(username, email, password)
        console.log("Usuário criado com sucesso!")
    } catch(err) {
        console.error("Erro ao vincular usuário com o DB\n", err.message)
    }
})  

export {UserRouter}