import { createCategoryService } from "../services/createCategory.service"
import { Request, Response } from "express"
import { Category } from "../entities"

export const createCategoryController = async (request: Request, response: Response): Promise<Response> => {

    const category: Category = await createCategoryService(request.body)

    return response.status(201).json(category)
}

