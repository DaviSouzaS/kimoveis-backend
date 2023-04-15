import { AppDataSource } from "../data-source"
import { RealEstate } from "../entities"
import { Repository } from "typeorm"

export const readAllRealEstatesService = async (): Promise<RealEstate[]> => {

    const realEstateRepo: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)

    const allrealEstates: RealEstate[] = await realEstateRepo.find({
        relations: ["address"]
    })

    return allrealEstates
}