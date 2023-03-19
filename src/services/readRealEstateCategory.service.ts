import { iReadRealEstateCategory } from "../interfaces/realEstate.interface"
import { Category, RealEstate } from "../entities"
import { AppDataSource } from "../data-source"
import { Repository } from "typeorm"

export const readRealEstateCategoryService = async (payload: number): Promise<iReadRealEstateCategory | null> => {

    const realEstateRepo: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)

    const realEstate: RealEstate[] = await realEstateRepo.find({
        where: {
            category: {
                id: payload
            }
        }
    })

    const categoriesRepo: Repository<Category> = AppDataSource.getRepository(Category)

    const category: Category | null = await categoriesRepo.findOneBy({
        id: payload
    })

    const readRealEstateCategoryReturn: iReadRealEstateCategory = {
        id: payload, 
        name: category!.name,
        realEstate: realEstate
    }

    return readRealEstateCategoryReturn
}