    import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name: {
        type: Object,
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
        console.log("Usuário criado com sucesso!!\n", user)
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

        await userModel.deleteOne({_id: id})
    } catch (err) {
        console.error(err.message)
    }
}

async function getUserById(id) {
    try {
        const user = await userModel.findById({_id: id}).select('name email').lean()
        if (!user) {console.log("Erro ao encontrar usuário no DB")} {return user}

    } catch (err) {
        console.error(err.message)
    }
}

async function getAllUsers() {
    try {
        const pesquisa = userModel.find().select('name email').lean()
        const docs = await pesquisa
        return docs
    } catch (err) {
        console.error(err.message)
    }
}

async function updateUser(id, params) {
    const filter = {_id: id}
    const update = params
    const doc = userModel.findOneAndUpdate(filter, update, {new: true})
    return doc    
}

const UserModule = {
    createUser,
    deleteUser,
    getAllUsers,
    getUserById,
    updateUser
}

export default UserModule