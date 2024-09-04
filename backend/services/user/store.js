import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const userModel = mongoose.model('user', userSchema)

async function createUser(name, email, password) {
    const user = new userModel({
        name: name,
        email: email,
        password: password
    })
    user.save()
}

export {createUser}