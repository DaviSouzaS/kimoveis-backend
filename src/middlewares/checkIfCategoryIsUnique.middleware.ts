import { Request, Response, NextFunction } from "express"
import { AppDataSource } from "../data-source"
import { Categories } from "../entities"
import { AppError } from "../error"

export const checkIfCategoryIsUnique = async (request: Request, response: Response, next: NextFunction): Promise<void> => {

    const categoryName: string = request.body.name

    const categoriesRepo = AppDataSource.getRepository(Categories)

    const category: Categories | null = await categoriesRepo.findOneBy({
        name: categoryName
    })

    if (category !== null) {
        throw new AppError("This category already exists", 409)
    }

    return next()

}
