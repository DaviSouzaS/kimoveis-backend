import { readAllRealEstatesService } from "../services/readAllRealEstates.service"
import { Request, Response } from "express"
import { RealEstate } from "../entities"

export const readAllRealEstatesController = async (request: Request, response: Response): Promise<Response> => {

   const RealEstates: RealEstate[] = await readAllRealEstatesService()

    return response.status(200).json(RealEstates)
}