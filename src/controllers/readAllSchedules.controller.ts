import { readAllSchedulesService } from "../services/readAllSchedules.service"
import { Request, Response } from "express"
import { RealEstate } from "../entities"

export const readAllSchedulesController = async (request: Request, response: Response): Promise<Response> => {

    const id: number = parseInt(request.params.id)

    const realEstateSchedules: RealEstate | null = await readAllSchedulesService(id)

    return response.status(200).json(realEstateSchedules)
}