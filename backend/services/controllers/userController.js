import UserModule from "../models/userSchemas.js"

export async function getUsers(req, res) {
    if (req.method !== "GET") {res.status(405).send('Metodo invalido!')}
    const type = req.params
    const allUsers = await UserModule.getAllUsers(type)
    res.send(allUsers)
    if (!allUsers) {res.status(404).send('not found')}
}

export async function getUsersById(req, res) {
    if (req.method !== "GET") {res.status(405)}
    const type = req.params
    const user = await UserModule.getUserById(type, req.params.userId)
    res.send(user)
    if (!user) {res.status(404).send('Usuário não encontrado')}    
}

export async function deleteUser(req, res) {
    try {
        const type = req.params
        await UserModule.deleteUser(type, req.params.userId)
        res.status(200).send("Usuário deletado com sucesso")
    } catch (err) {
        console.error(err.message)
        res.status(404).send("Não foi possivel deletar o usuário...")
    }
}

export async function createUser(req, res) {
    const {type, name, email, password} = req.body
    try {
        await UserModule.createUser(type, name, email, password)
        res.status(200).send("Usuário criado com sucesso!")
    } catch (err) {
        console.error(err.message)
        res.status(404).send("Não foi possivel criar o usuário")
    }
}


export async function updateUser(req, res) {
    const {name, email, password} = req.body
    const params = {name, email, password}
    const id = req.params.userId
    const doc = await UserModule.updateUser(id, params)
    res.status(200).send(doc)
}