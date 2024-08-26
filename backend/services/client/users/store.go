package users

type User struct {
	id       int
	username string
	password string
	email    string
}

type UserPayload struct {
	username string
	password string
	email    string
}
