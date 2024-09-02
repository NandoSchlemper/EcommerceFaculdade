async function CreateUser(name, email, password, db) {
    await db.get(`
        SELECT * FROM users
        WHERE email = ? 
        `, [email], (err) => {
            if (err) {
                console.log("Erro ao procurar email do banco:\n", err.message)
            }
        })

    if (!row) {
        await db.run(`
            INSERT INTO users(name, email, password)
            VALUES(?, ?, ?)
            `, [name, email, password], (err) => {
                if (err) {
                    return console.log(err.message)
                }
                console.log("Cadastrado com sucesso!")
            }
        )
    } else {
        console.log("Email já cadastrado!")
    }
}


async function GetAllUsers(db) {
    await db.get(`
        SELECT * FROM users;
        `, (row, err) => {
            if (err) {
                console.error(err.message)
            } else {
                console.log(row)
            }
        })
}

export {CreateUser, GetAllUsers}