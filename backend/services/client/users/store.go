package users

import (
	"backend/services/client"
	"database/sql"
)

func UserCreate(db *sql.DB, u *client.UserPayload) error {
	_, err := db.Exec("INSERT INTO Users (Name, Email, Password) VALUES (?,?,?)", u.Name, u.Email, u.Password)
	return err
}
