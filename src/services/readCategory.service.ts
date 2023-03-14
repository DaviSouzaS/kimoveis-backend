import { AppDataSource } from "../data-source"
import { Category } from "../entities"

export const readCategoryService = async (payload: number): Promise<Category | null> => {

    const categoriesRepo = AppDataSource.getRepository(Category)

    const categories: Category | null = await categoriesRepo.findOneBy({id: payload})

    return categories
}