import { checkIfCategoryIsUnique } from "../middlewares/checkIfCategoryIsUnique.middleware"
import { createCategoryController } from "../controllers/createCategory.controller"
import { checkIfUserIsAdmin } from "../middlewares/checkIfUserIsAdmin.middleware"
import { validateToken } from "../middlewares/validateToken.middleware"
import { createCategorySchema } from "../schemas/createCategory.schema"
import { validateData } from "../middlewares/validateData.middlewares"
import { Router } from "express"

export const categoryRouter: Router = Router()

categoryRouter.post('', validateData(createCategorySchema), checkIfCategoryIsUnique, validateToken, checkIfUserIsAdmin, createCategoryController)
