import { Router } from "express";
import { createUser, deleteUser, getUsers } from "../controllers/userController.js";

const UserRouter = Router()


// Get a list of Users
UserRouter.get('/getUsers', getUsers)

// Delete User By ID
UserRouter.delete('/deleteUser/:userId', deleteUser)

// Post User (create)
UserRouter.post('/createUser', createUser)  

export {UserRouter}