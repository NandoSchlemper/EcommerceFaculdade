import { Router } from "express";
import {CreateUser, GetAllUsers} from "../user/store.js"
import db from "../../database/db.js"

const UserRouter = Router()


// Get a list of Users
UserRouter.get('/getUsers', async (req, res) => {
    const value = await GetAllUsers(db)
    res.send(value)
})

// Get User By ID
UserRouter.get('/getUsers/:userId', (req, res) => {
    res.send(req.params)
})

// Post User (create)
UserRouter.post('/createUser', async (req, res) => {
    const {username, email, password} = req.body
    try {
        await CreateUser(username, email, password, db)
        console.log("Usuário cadastrado com sucesso!")
    } catch(err) {
        console.error("Erro ao vincular usuário com o DB\n", err.message)
    }
})  

export {UserRouter}