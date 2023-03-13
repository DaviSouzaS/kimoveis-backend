import { iCreateCategory } from "../interfaces/createCategory.interface"
import { AppDataSource } from "../data-source"
import { Categories } from "../entities"

export const createCategoryService = async (payload: iCreateCategory): Promise<Categories> => {

    const categoriesRepo = AppDataSource.getRepository(Categories)
    const category = categoriesRepo.create(payload)
  
    await categoriesRepo.save(category)
  
    return category
}


