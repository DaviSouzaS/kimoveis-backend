import { createUserController } from "../controllers/createUser.controller"
import { Router } from "express"

const userRouter: Router = Router()

userRouter.post('', createUserController)

export {
    userRouter
}