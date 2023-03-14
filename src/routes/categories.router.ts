import { checkIfCategoryIsUnique } from "../middlewares/checkIfCategoryIsUnique.middleware"
import { readAllCategoriesController } from "../controllers/readAllCategories.controller"
import { checkIfCategoryExist } from "../middlewares/checkIfCategoryExist.middleware"
import { createCategoryController } from "../controllers/createCategory.controller"
import { checkIfUserIsAdmin } from "../middlewares/checkIfUserIsAdmin.middleware"
import { readCategoryController } from "../controllers/readCategory.controller"
import { validateToken } from "../middlewares/validateToken.middleware"
import { createCategorySchema } from "../schemas/createCategory.schema"
import { validateData } from "../middlewares/validateData.middlewares"
import { Router } from "express"

export const categoryRouter: Router = Router()

categoryRouter.post('', validateData(createCategorySchema), checkIfCategoryIsUnique, validateToken, checkIfUserIsAdmin, createCategoryController)

categoryRouter.get('', readAllCategoriesController)

categoryRouter.get('/:id/realEstate', checkIfCategoryExist, readCategoryController)