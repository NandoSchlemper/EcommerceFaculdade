import bcrypt from 'bcrypt'
import schemaModels from '../../database/schemas'
import { handleDevError } from 'utils/handleError';
import type { UserDocument } from 'database/models';

const saltRound = 10;

const sellerModel = schemaModels.sellerModel
const userModel = schemaModels.userModel

export interface User {
    _id?: string;
    name: string;
    email: string;
    password: string;
}

export function verifyType(type: string) {
    const tipagem = () => {
        if (type==="user") {
            return userModel
        } if (type==="seller") {
            return sellerModel
        }
            return userModel
    } 

    return tipagem()
}

export interface UserTypes {
    type: "user" | "seller";
    name: string;
    email: string;
    password: string;
}

async function createUser({type, name, email, password}: UserTypes) {
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
        handleDevError(err)
    }
}

async function deleteUser(type: string, id: string) {
    try {
        const model = verifyType(type)
        const user = await model.findById(id)
        if (!user) {
            console.warn("Usuário não encontrado no banco!")
        }

        await model.deleteOne({_id: id})
    } catch (err) {
        handleDevError(err)
    }
}

async function getUserById(type: string, id: string): Promise< UserDocument | null > {
    try {
        const model = verifyType(type)
        const user = model.findById(id)
        if (!user) {console.log("Erro ao encontrar usuário no DB")} return user
    } catch (err) {
        handleDevError(err)
        return null
    }
}

async function getUserByEmail(type: string, email: string): Promise<UserDocument | null> {
    try {
        const model = verifyType(type)
        const user = await model.findOne({ email: email }).exec();        
        return user as UserDocument | null
    } catch(err) {
        handleDevError(err)
        return null
    }
}

async function getAllUsers(type: string) {
    try {
        const model = verifyType(type)
        const pesquisa = model.find().select('name email').lean()
        const docs = await pesquisa
        return docs
    } catch (err) {
        handleDevError(err)
    }
}

async function updateUser(type: string, id: string, params: object) {
    const model = verifyType(type)
    const filter = {_id: id}
    const update = params
    const doc = model.findOneAndUpdate(filter, update, {new: true})
    return doc    
}

async function loginParameters(type: string, email: string, password: string) {
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
        handleDevError(err)
        return false
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