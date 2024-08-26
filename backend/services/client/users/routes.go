package users

import (
	"database/sql"
	"net/http"
)

func UserRoutes(mux *http.ServeMux, db *sql.DB) {
	mux.HandleFunc("/users/list", GetUsers(db))
	mux.HandleFunc("/users/create", CreateUser(db))
	mux.HandleFunc("/users/{id}", GetUserByID(db))
	mux.HandleFunc("/users/update", UpdateUser(db))
	mux.HandleFunc("/users/delete", DeleteUser(db))

}

func GetUserByID(db *sql.DB) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("Apenas o usuário normal"))
	}
}

func GetUsers(db *sql.DB) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("Lista de usuários"))
	}
}

func CreateUser(db *sql.DB) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("Criando um user (Register famoso)"))
	}
}

func UpdateUser(db *sql.DB) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("Dando um update brabo no user"))
	}
}

func DeleteUser(db *sql.DB) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("Deletando usuário, eba"))
	}
}
