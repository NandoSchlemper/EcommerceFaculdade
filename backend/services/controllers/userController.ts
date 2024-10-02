// biome-ignore lint/style/useImportType: <explanation>
import { Request, Response } from "express"
import UserModule from "../models/userMethods.js"
import { handleWebError } from "utils/handleError.js"

export async function getUsers(req: Request, res: Response) {
    if (req.method !== "POST") {res.status(405).send('Metodo invalido!')}
    const type = req.body
    const allUsers = await UserModule.getAllUsers(type)
    res.send(allUsers)
    if (!allUsers) {res.status(404).send('not found')}
}


export async function getUsersById(req: Request, res: Response) {
    try {
        if (req.method !== "POST") {res.status(405)}
        const type = req.body
        const id = req.params.userId
        const user = await UserModule.getUserById(type, id)
        if (!user) {console.warn("Usuário não encontrado")}    
        res.send(user)
    } catch (err) {
        handleWebError(err, res)
    }
}

export async function deleteUser(req: Request, res: Response) {
    try {
        const type = req.body
        await UserModule.deleteUser(type, req.params.userId)
        res.status(200).send("Usuário deletado com sucesso")
    } catch(err){
        handleWebError(err, res)
    }
}

export async function createUser(req: Request, res: Response) {
    try {
        const {type, name, email, password} = req.body
        await UserModule.createUser({type, name, email, password})
        res.status(200).send("Usuário criado com sucesso!")
    } catch (err) {
        handleWebError(err, res)
    }
}


export async function updateUser(req: Request, res: Response) {
    const {type, name, email, password} = req.body
    const params = {type, name, email, password}
    const id = req.params.userId
    const doc = await UserModule.updateUser(type, id, params)
    res.status(200).send(doc)
}