import { readAllCategoriesService } from "../services/readAllCategories.service"
import { Request, Response } from "express"
import { Category } from "../entities"

export const readAllCategoriesController = async (request: Request, response: Response): Promise<Response> => {

    const categories: Category[] = await readAllCategoriesService()

    return response.status(200).json(categories)
}

