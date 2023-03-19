import { iCreateCategory } from "../interfaces/createCategory.interface"
import { AppDataSource } from "../data-source"
import { Category } from "../entities"
import { Repository } from "typeorm"

export const createCategoryService = async (payload: iCreateCategory): Promise<Category> => {

    const categoriesRepo: Repository<Category> = AppDataSource.getRepository(Category)
    const category: Category = categoriesRepo.create(payload)
  
    await categoriesRepo.save(category)
  
    return category
}


