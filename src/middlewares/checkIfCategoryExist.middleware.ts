import { Request, Response, NextFunction } from "express"
import { AppDataSource } from "../data-source"
import { Category } from "../entities"
import { AppError } from "../error"

export const checkIfCategoryExist = async (request: Request, response: Response, next: NextFunction): Promise<void> => {

    const id: number = parseInt(request.params.id)

    const categoriesRepo = AppDataSource.getRepository(Category)

    const category: Category | null = await categoriesRepo.findOneBy({
        id: id
    })

    if (!category) {
        throw new AppError('Category not found', 404)
    }

    return next()

}