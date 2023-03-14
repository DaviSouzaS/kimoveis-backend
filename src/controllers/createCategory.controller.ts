import { Request, Response } from "express"
import { createCategoryService } from "../services/createCategory.service"

export const createCategoryController = async (request: Request, response: Response): Promise<Response> => {

    const category = await createCategoryService(request.body)

    return response.status(201).json(category)
}

