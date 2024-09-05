import UserModule from "../models/userSchemas.js"

export async function getUsers(req, res) {
    if (req.method != "GET") {res.status(405).send('Metodo invalido!')}
    UserModule.getAllUsers().then(res.status(200).send('Lista de usuários:\n'))
}

export async function deleteUser(req, res) {
    try {
        await UserModule.deleteUser(req.params.userId)
        res.status(200).send("Usuário deletado com sucesso")
    } catch (err) {
        console.error(err.message)
        res.status(404).send("Não foi possivel deletar o usuário...")
    }
}

export async function createUser(req, res) {
    const {name, email, password} = req.body
    try {
        await UserModule.createUser(name, email, password)
        res.status(200).send("Usuário criado com sucesso!")
    } catch (err) {
        console.error(err.message)
        res.status(404).send("Não foi possivel criar o usuário")
    }
}
  
