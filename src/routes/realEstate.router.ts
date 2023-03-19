import { createRealEstateController } from "../controllers/createRealEstate.controller"
import { checkIfUserIsAdmin } from "../middlewares/checkIfUserIsAdmin.middleware"
import { validateToken } from "../middlewares/validateToken.middleware"
import { validateData } from "../middlewares/validateData.middlewares"
import { realEstateBody } from "../schemas/realEstate.schema"
import { Router } from "express"

export const realEstateRouter: Router = Router()

realEstateRouter.post('', validateToken, checkIfUserIsAdmin, validateData(realEstateBody), createRealEstateController)