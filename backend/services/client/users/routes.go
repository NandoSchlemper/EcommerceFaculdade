package users

import (
	"backend/services/client"
	"database/sql"
	"encoding/json"
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
		if r.Method != http.MethodPost {
			http.Error(w, "Metodo não permitido", http.StatusMethodNotAllowed)
			return
		}

		var u client.UserPayload
		decoder := json.NewDecoder(r.Body)
		if err := decoder.Decode(&u); err != nil {
			http.Error(w, "Erro ao decodificar dados", http.StatusBadRequest)
		}

		if err := UserCreate(db, &u); err != nil {
			http.Error(w, "Erro ao adicionar o usuário ao DB", http.StatusInternalServerError)
		}

		w.WriteHeader(http.StatusCreated)
		w.Write([]byte("Usuário criado com sucesso!"))
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
