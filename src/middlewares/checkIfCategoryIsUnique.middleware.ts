import { Request, Response, NextFunction } from "express"
import { AppDataSource } from "../data-source"
import { Category } from "../entities"
import { Repository } from "typeorm"
import { AppError } from "../error"

export const checkIfCategoryIsUnique = async (request: Request, response: Response, next: NextFunction): Promise<void> => {

    const categoryName: string = request.body.name

    const categoriesRepo: Repository<Category> = AppDataSource.getRepository(Category)

    const category: Category | null = await categoriesRepo.findOneBy({
        name: categoryName
    })

    if (category !== null) {
        throw new AppError("Category already exists", 409)
    }

    return next()

}
