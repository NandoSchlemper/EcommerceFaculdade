package api

import (
	"backend/services/client/users"
	"database/sql"
	"net/http"
)

type APIServer struct {
	addr string
	db   *sql.DB
}

func NewAPIServer(addr string, db *sql.DB) *APIServer {
	return &APIServer{
		addr: addr,
		db:   db,
	}
}

func (a APIServer) Run() error {
	mux := http.NewServeMux()

	users.UserRoutes(mux, a.db)

	return http.ListenAndServe(a.addr, mux)
}
