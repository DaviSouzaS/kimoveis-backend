import { iCreateCategory } from "../interfaces/createCategory.interface"
import { AppDataSource } from "../data-source"
import { Category } from "../entities"

export const createCategoryService = async (payload: iCreateCategory): Promise<Category> => {

    const categoriesRepo = AppDataSource.getRepository(Category)
    const category = categoriesRepo.create(payload)
  
    await categoriesRepo.save(category)
  
    return category
}


