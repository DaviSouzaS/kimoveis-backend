import { iCreateSchedules } from "../interfaces/createSchedules.interfaces"
import { createScheduleService } from "../services/createSchedule.service"
import { Request, Response } from "express"

export const createSchedulesController = async (request: Request, response: Response): Promise<Response> => {

    const body: iCreateSchedules = request.body

    const userId = parseInt(request.user.id) 

    await createScheduleService(body, userId)

    return response.status(201).json({"message": "Schedule created"})
}

