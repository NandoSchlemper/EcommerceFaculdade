import { Router } from "express";
import UserModule from "../user/store.js"

const UserRouter = Router()


// Get a list of Users
UserRouter.get('/getUsers', async (req, res) => {
    res.send("hai")
})

// Get User By ID
UserRouter.post('/getUsers/:userId', async (req, res) => {
    res.send(req.params)
    try {
        await UserModule.deleteUser(req.params.userId)
    } catch (err) {
        console.error(err.message)
    }
})

// Post User (create)
UserRouter.post('/createUser', async (req, res) => {
    const {name, email, password} = req.body
    try {
        await UserModule.createUser(name, email, password)
    } catch(err) {
        console.error("Erro ao vincular usuário com o DB\n", err.message)
    }
})  

export {UserRouter}