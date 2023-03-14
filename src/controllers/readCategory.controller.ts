import { Request, Response } from "express"
import { Category } from "../entities"
import { readCategoryService } from "../services/readCategory.service"

export const readCategoryController = async (request: Request, response: Response): Promise<Response> => {

    const id: number = parseInt(request.params.id) 

    const category = await readCategoryService(id)

    return response.status(200).json(category)
}

