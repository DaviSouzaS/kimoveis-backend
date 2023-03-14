import { AppDataSource } from "../data-source"
import { Category } from "../entities"

export const readAllCategoriesService = async (): Promise<Category[]> => {

    const categoriesRepo = AppDataSource.getRepository(Category)

    const allCategories: Category[] = await categoriesRepo.find()

    return allCategories
}