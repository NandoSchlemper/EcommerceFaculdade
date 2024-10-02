import mongoose from 'mongoose'

const DB_URI = process.env.DB_URI


export async function Connect2DB() {
    if (!DB_URI) {
        return console.warn("URI do DB Não encontrada!!")
    }
    
    await mongoose.connect(DB_URI)
    console.log("DB Conectado!")
}