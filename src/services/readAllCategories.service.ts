import { AppDataSource } from "../data-source"
import { Category } from "../entities"
import { Repository } from "typeorm"

export const readAllCategoriesService = async (): Promise<Category[]> => {

    const categoriesRepo:Repository<Category> = AppDataSource.getRepository(Category)

    const allCategories: Category[] = await categoriesRepo.find()

    return allCategories
}