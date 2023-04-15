import { AppDataSource } from "../data-source"
import { RealEstate } from "../entities"
import { Repository } from "typeorm"

export const readAllSchedulesService = async (payload: number): Promise<RealEstate | null> => {

    const realEstateRepo: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)

    const realEstateSchedules = await realEstateRepo.findOne({
        relations: {
            address: true,
            category: true,
            schedules: {
                user: true
            }
        },
        where: {
            id: payload
        }
    })

    return realEstateSchedules
}