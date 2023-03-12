import { loginController } from "../controllers/login.controller"
import { Router } from "express"

export const loginRouter: Router = Router()

loginRouter.post('', loginController)

