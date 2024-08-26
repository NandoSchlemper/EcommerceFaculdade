package database

import (
	"database/sql"
	"fmt"
	"log"
	"os"
	"time"

	_ "modernc.org/sqlite" // 100% Golang + Multi Go Compatibility ;O
)

func DBConnect() *sql.DB {
	db, err := sql.Open("sqlite", os.Getenv("DB_URL"))

	if err != nil {
		panic(err.Error())
	}

	if _, err := db.Exec(DownQuery); err != nil {
		log.Fatal(err)
	}

	if _, err := db.Exec(TableQuery); err != nil {
		log.Fatal(err)
	}
	fmt.Println("Success to initialize tables of DB")

	db.SetConnMaxLifetime(time.Minute * 3)
	db.SetMaxOpenConns(10)
	db.SetMaxIdleConns(10)

	if err := db.Ping(); err != nil {
		log.Fatal(err)
	}

	fmt.Println("Success Connecting DB")
	return db
}
