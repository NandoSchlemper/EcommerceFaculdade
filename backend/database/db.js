import sqlite3 from 'sqlite3'

export default function Connect2DB() {
    try {
        const db = new sqlite3.Database('../../db/ecommerce.db', (err) => {
            if (err) {
                console.error("Erro ao conectar-se ao DB:", err.message)
            }
            console.log("Conectado ao SQLite local! ;)")
        })

        db.run(`
            CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL UNIQUE,
            password TEXT NOT NULL)
            `, (err) => {
                if (err) {
                    console.error("Erro ao criar a tabela Users: ", err.message)
                }
                console.log("Tabela users criada com sucesso")
            })
        
        db.close()
        } catch (err) {
            console.error(err.message)
        } 
}