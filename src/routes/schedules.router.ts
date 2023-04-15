import { checkEstateAvailability } from "../middlewares/checkEstateAvailability.middleware"
import { checkIfRealEstateExist } from "../middlewares/checkIfRealEstateExist.middleware"
import { checkUserAvailability } from "../middlewares/checkUserAvailability.middleware"
import { readAllSchedulesController } from "../controllers/readAllSchedules.controller"
import { createSchedulesController } from "../controllers/createSchedule.controller"
import { checkIfUserIsAdmin } from "../middlewares/checkIfUserIsAdmin.middleware"
import { checkDateAndHour } from "../middlewares/checkDateAndHour.middleware"
import { validateToken } from "../middlewares/validateToken.middleware"
import { validateData } from "../middlewares/validateData.middlewares"
import { createSchedulesSchema } from "../schemas/schedules.schemas"
import { Router } from "express"

export const schedulesRouter: Router = Router()

schedulesRouter.post('', validateToken, validateData(createSchedulesSchema), checkIfRealEstateExist, checkDateAndHour, checkUserAvailability, checkEstateAvailability, createSchedulesController)

schedulesRouter.get('/realEstate/:id', validateToken, checkIfUserIsAdmin, checkIfRealEstateExist, readAllSchedulesController)