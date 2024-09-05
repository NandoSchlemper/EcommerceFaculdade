import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        unique: true,
        required: true
    },

    password: {
        type: String,
        required: true
    }
})

const userModel = mongoose.model('user', userSchema)

async function createUser(name, email, password) {
    try {
        let user = new userModel({
            name: name,
            email: email,
            password: password
        })

        await user.save()
        console.log("Usuário criado com sucesso!\n", user)
    } catch (err) {
        console.error(err.message)
    }
}

async function deleteUser(id) {
    try {
        const user = await userModel.findById(id)
        if (user) {
            console.log("... Usuário encontrado no banco")
        }

        await userModel.remove({_id: id})
        console.log("Usuário deletado com sucesso!")
    } catch (err) {
        console.error(err.message)
    }
}

const UserModule = {
    createUser,
    deleteUser
}

export default UserModule