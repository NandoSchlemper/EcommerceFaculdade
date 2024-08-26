package client

type UserPayload struct {
	Name     string `json:"name"`
	Email    string `json:"email"`
	Password string `json:"password"`
}

func NewUser(name string, email string, password string) *UserPayload {
	return &UserPayload{
		Name:     name,
		Email:    email,
		Password: password,
	}
}
