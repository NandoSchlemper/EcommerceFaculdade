package main

import (
	"backend/database"
	"backend/src/api"
	"log"
)

func main() {
	// DB Connection
	db := database.DBConnect()

	server := api.NewAPIServer(":8080", db)
	if err := server.Run(); err != nil {
		log.Fatal(err)
	}
}
