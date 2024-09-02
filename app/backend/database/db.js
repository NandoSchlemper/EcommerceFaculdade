import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('dbecommerce.db', (err) => {
    if (err) {
        console.error("Erro ao conectar-se ao DB:", err.message);
    }
});

export default async function Connect2DB(db) {
    db.run(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL UNIQUE,
            password TEXT NOT NULL
        );
    `, (err) => {
        if (err) {
            console.error("Erro ao criar a tabela users:", err.message);
            return;
        }
        console.log("\nTabela users criada com sucesso");
    });

    db.run(`
        CREATE TABLE IF NOT EXISTS products (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL,
            name TEXT NOT NULL,
            description TEXT NOT NULL,
            inventory INTEGER NOT NULL,
            price REAL,
            FOREIGN KEY (user_id) REFERENCES users (id)
        );
    `, (err) => {
        if (err) {
            console.error("Erro ao criar a tabela products:", err.message);
            return;
        }
        console.log("Tabela products criada com sucesso");
    });

    db.run(`
        CREATE TABLE IF NOT EXISTS carts (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL,
            product_id INTEGER NOT NULL,
            FOREIGN KEY (product_id) REFERENCES products (id),
            FOREIGN KEY (user_id) REFERENCES users (id)
        );
    `, (err) => {
        if (err) {
            console.error("Erro ao criar a tabela carts:", err.message);
            return;
        }
        console.log("Tabela carts criada com sucesso");
    });


    db.all(`SELECT name FROM sqlite_master WHERE type='table';`, (err, rows) => {
        if (err) {
            console.error("Erro ao ver as tabelas: ", err.message);
            return;
        }
        console.log("Tabelas do DB:\n");
        console.table(rows);
    });

    // Fechamento do banco de dados
    //db.close((err) => {
    //    if (err) {
    //        console.error("Erro ao fechar a conexão com o DB:", err.message);
    //    }
    //    console.log("\nConexão com o DB fechada com sucesso!");
    //});
}

export { Connect2DB, db }
