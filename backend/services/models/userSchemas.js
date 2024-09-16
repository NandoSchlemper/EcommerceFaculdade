import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const saltRound = 10;

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

const sellerSchema = new mongoose.Schema({
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
}) // Ver se eu coloco alguma relação aqui para com os produtos

const sellerModel = mongoose.model('seller', sellerSchema)
const userModel = mongoose.model('user', userSchema)

async function createUser(name, email, password) {
    try {
        const UserPassEncrypted = await bcrypt.hash(password, saltRound)
        const user = new userModel({
            name: name,
            email: email,
            password: UserPassEncrypted
        })

        await user.save()
        console.log("Usuário criado com sucesso!!\n", user)
    } catch (err) {
        console.error('deu problema:', err.message)
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
        if (!user) {console.log("Erro ao encontrar usuário no DB")} return user

    } catch (err) {
        console.error(err.message)
    }
}

async function getUserByEmail(email) {
    try {
        const user = await userModel.find({email: email}).exec()
        if (!user) {
            return null
        // biome-ignore lint/style/noUselessElse: <explanation>
        } else {
            return user 
        }
    } catch(err) {
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

async function loginParameters(email, password) {
    try {
        const user = await userModel.findOne({ email: email }).exec();
        if (!user) {
            console.error('User not found');
            return false; 
        }

        const isMatch = await bcrypt.compare(password, user.password);
        console.log(isMatch)
        
        return isMatch; 
    } catch (err) {
        console.error('Error during login:', err.message);
        return false; 
    }
}

const UserModule = {
    createUser,
    deleteUser,
    getAllUsers,
    getUserById,
    updateUser,
    loginParameters,
    getUserByEmail
}

export default UserModule