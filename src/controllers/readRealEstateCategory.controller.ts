import { readRealEstateCategoryService } from "../services/readRealEstateCategory.service"
import { iReadRealEstateCategory } from "../interfaces/realEstate.interface"
import { Request, Response } from "express"

export const readRealEstateCategoryController = async (request: Request, response: Response): Promise<Response> => {

    const id: number = parseInt(request.params.id) 

    const category: iReadRealEstateCategory | null = await readRealEstateCategoryService(id)

    return response.status(200).json(category)
}

