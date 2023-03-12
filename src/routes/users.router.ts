import { checkIfUserIsAdmin } from "../middlewares/checkIfUserIsAdmin.middleware"
import { readAllUsersController } from "../controllers/readAllUsers.controller"
import { createUserController } from "../controllers/createUser.controller"
import { validateToken } from "../middlewares/validateToken.middleware"

import { Router } from "express"

export const userRouter: Router = Router()

userRouter.post('', createUserController)

userRouter.get('', validateToken, checkIfUserIsAdmin, readAllUsersController)

