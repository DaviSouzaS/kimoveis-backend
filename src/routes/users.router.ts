import { checkIfUserIsAdmin } from "../middlewares/checkIfUserIsAdmin.middleware"
import { readAllUsersController } from "../controllers/readAllUsers.controller"
import { usersPermissions } from "../middlewares/usersPermissions.middlewares"
import { checkIfUserExist } from "../middlewares/checkIfUserExist.middlewares"
import { deleteUserController } from "../controllers/deleteUser.controller"
import { updateUserController } from "../controllers/updateUser.controller"
import { createUserController } from "../controllers/createUser.controller"
import { validateToken } from "../middlewares/validateToken.middleware"
import { validateData } from "../middlewares/validateData.middlewares"
import { createUserSchema } from "../schemas/createUser.schema"
import { updateUserSchema } from "../schemas/updateUser.schema"
import { Router } from "express"

export const userRouter: Router = Router()

userRouter.post('', validateData(createUserSchema), createUserController)

userRouter.get('', validateToken, checkIfUserIsAdmin, readAllUsersController)

userRouter.patch('/:id', validateData(updateUserSchema), validateToken, usersPermissions, checkIfUserExist,  updateUserController)

userRouter.delete('/:id', validateToken, checkIfUserIsAdmin, checkIfUserExist, deleteUserController)