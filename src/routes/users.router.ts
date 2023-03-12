import { checkIfUserIsAdmin } from "../middlewares/checkIfUserIsAdmin.middleware"
import { readAllUsersController } from "../controllers/readAllUsers.controller"
import { usersPermissions } from "../middlewares/usersPermissions.middlewares"
import { updateUserController } from "../controllers/updateUser.controller"
import { createUserController } from "../controllers/createUser.controller"
import { validateToken } from "../middlewares/validateToken.middleware"
import { validateData } from "../middlewares/validateData.middlewares"
import { updateUserSchema } from "../schemas/updateUser.schema"
import { Router } from "express"

export const userRouter: Router = Router()

userRouter.post('', createUserController)

userRouter.get('', validateToken, checkIfUserIsAdmin, readAllUsersController)

userRouter.patch('/:id', validateData(updateUserSchema), validateToken, usersPermissions, updateUserController)