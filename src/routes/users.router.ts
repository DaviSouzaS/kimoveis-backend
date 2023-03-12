import { readAllUsersController } from "../controllers/readAllUsers.controller"
import { createUserController } from "../controllers/createUser.controller"
import { Router } from "express"

const userRouter: Router = Router()

userRouter.post('', createUserController)

userRouter.get('', readAllUsersController)

export {
    userRouter
}