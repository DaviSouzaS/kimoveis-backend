import { iAddressSchema, iRealEstateSchema, iAddressReturnSchema, iRealEstateReturnSchema } from "../interfaces/realEstate.interface"
import { Address, RealEstate } from "../entities"
import { AppDataSource } from "../data-source"
import { Repository } from "typeorm"

export const createRealEstateService = async (realEstateBody: iRealEstateSchema, addressBody: iAddressSchema): Promise<iRealEstateReturnSchema> => {

    const addressRepo: Repository<Address> = AppDataSource.getRepository(Address)
    const realEstateRepo: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)

    const address: iAddressReturnSchema = addressRepo.create(addressBody)

    await addressRepo.save(address)

    realEstateBody.address = address

    const realEstate: iRealEstateReturnSchema = realEstateRepo.create(realEstateBody)
    
    await realEstateRepo.save(realEstate)

    return realEstate
}


