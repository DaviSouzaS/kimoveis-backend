import { validateData } from "../middlewares/validateData.middlewares"
import { loginController } from "../controllers/login.controller"
import { loginSchema } from "../schemas/login.schema"
import { Router } from "express"

export const loginRouter: Router = Router()

loginRouter.post('', validateData(loginSchema), loginController)

