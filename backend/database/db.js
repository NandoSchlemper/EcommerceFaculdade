import mongoose from 'mongoose'

const DB_URI = process.env.DB_URI

export async function Connect2DB() {
    await mongoose.connect(DB_URI)
    console.log("DB Conectado!")
}