import { iAddressSchema, iRealEstateSchema, iAddressReturnSchema, iRealEstateReturnSchema, iRealEstateWithoutAddress, iRealEstateReturnWithoutAddress } from "../interfaces/realEstate.interface"
import { Address, Category, RealEstate } from "../entities"
import { AppDataSource } from "../data-source"
import { Repository } from "typeorm"

export const createRealEstateService = async (realEstateBody: iRealEstateWithoutAddress, addressBody: iAddressSchema): Promise<iRealEstateReturnSchema | iRealEstateReturnWithoutAddress> => { 

    const categoriesRepo: Repository<Category> = AppDataSource.getRepository(Category)

    const category: Category | null = await categoriesRepo.findOneBy({
        id: realEstateBody.categoryId!
    })

    const categoryObj = {
        id: category!.id,
        name: category!.name
    }

    const addressRepo: Repository<Address> = AppDataSource.getRepository(Address)
    const realEstateRepo: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)

    const address: iAddressReturnSchema = addressRepo.create(addressBody)

    await addressRepo.save(address)

    realEstateBody.address = address

    const realEstate: iRealEstateReturnSchema = realEstateRepo.create(realEstateBody)
    
    await realEstateRepo.save(realEstate)   

    delete realEstate.categoryId 

    realEstate.category = categoryObj

    if(!realEstate.address!.number) {
        realEstate.category.id = realEstate.category.id + 1
        realEstate.category.name = realEstate.category.name + 1

        const realEstateWithoutAddressNumber: iRealEstateReturnWithoutAddress = {
            value: realEstate.value,
            size: realEstate.size,
            id: realEstate.id,
            createdAt: realEstate.createdAt,
            updatedAt: realEstate.updatedAt,
            category: realEstate.category
        }

        return realEstateWithoutAddressNumber
    }
    
    return realEstate
}


