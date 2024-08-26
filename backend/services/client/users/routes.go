package users

import (
	"database/sql"
	"net/http"
)

func UserRoutes(mux *http.ServeMux, db *sql.DB) {
	mux.HandleFunc("/users", GetUsers(db))
}

func GetUsers(db *sql.DB) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("Lista de usuários"))
	}
}
