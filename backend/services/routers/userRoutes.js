import { Router } from "express";
import { createUser, deleteUser, getUsers, getUsersById, updateUser } from "../controllers/userController.js";

const UserRouter = Router()

UserRouter.get('/getUsers', getUsers)
UserRouter.get('/getUsers/:userId', getUsersById)
UserRouter.delete('/deleteUser/:userId', deleteUser)
UserRouter.post('/createUser', createUser)  
UserRouter.post('/updateUser/:userId', updateUser)

export {UserRouter}