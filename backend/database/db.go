package database

import (
	"database/sql"
	"fmt"
	"os"
	"time"

	_ "github.com/go-sql-driver/mysql"
)

func DBConnect() {
	db, err := sql.Open("mysql", os.Getenv("DB_URL"))

	if err != nil {
		panic(err.Error())
	}

	db.SetConnMaxLifetime(time.Minute * 3)
	db.SetMaxOpenConns(10)
	db.SetMaxIdleConns(10)
	db.Ping()
	fmt.Println("Sucess Connecting DB")
}
