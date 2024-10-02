import { Router } from "express";
import { createUser, deleteUser, getUsers, getUsersById, updateUser } from "../controllers/userController.js";

const UserRouter = Router()

UserRouter.post('/getUsers', getUsers)
UserRouter.post('/getUsers/:userId', getUsersById)
UserRouter.post('/deleteUser/:userId', deleteUser)
UserRouter.post('/createUser', createUser)  
UserRouter.post('/updateUser/:userId', updateUser)

export {UserRouter}