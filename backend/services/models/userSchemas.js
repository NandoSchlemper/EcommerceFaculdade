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

function verifyType(type) {
    const tipagem = () => {
        if (type==="user") {
            return userModel
        } if (type==="seller") {
            return sellerModel
        }
            return null
    } 

    return tipagem()
}

async function createUser(type, name, email, password) {
    try {
        const UserPassEncrypted = await bcrypt.hash(password, saltRound)

        const model = verifyType(type)

        const user = new model({
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

async function deleteUser(type, id) {
    try {
        const model = verifyType(type)
        const user = await model.findById(id)
        if (user) {
            console.log("... Usuário encontrado no banco")
        }

        await model.deleteOne({_id: id})
    } catch (err) {
        console.error(err.message)
    }
}

async function getUserById(type, id) {
    try {
        const model = verifyType(type)
        const user = await model.findById({_id: id}).select('name email').lean()
        if (!user) {console.log("Erro ao encontrar usuário no DB")} return user

    } catch (err) {
        console.error(err.message)
    }
}

async function getUserByEmail(type, email) {
    try {
        const model = verifyType(type)
        const user = await model.find({email: email}).exec()
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

async function getAllUsers(type) {
    try {
        const model = verifyType(type)
        const pesquisa = model.find().select('name email').lean()
        const docs = await pesquisa
        return docs
    } catch (err) {
        console.error(err.message)
    }
}

async function updateUser(type, id, params) {
    const model = verifyType(type)
    const filter = {_id: id}
    const update = params
    const doc = model.findOneAndUpdate(filter, update, {new: true})
    return doc    
}

async function loginParameters(type, email, password) {
    try {
        const model = verifyType(type)
        const user = await model.findOne({ email: email }).exec();
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