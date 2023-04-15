import { Request, Response, NextFunction } from "express"
import { AppDataSource } from "../data-source"
import { Repository } from "typeorm"
import { AppError } from "../error"
import { RealEstate } from "../entities"

export const checkIfRealEstateExist = async (request: Request, response: Response, next: NextFunction): Promise<void> => {

    let realEstateId = 0

    request.method === "POST" ? realEstateId = request.body.realEstateId : realEstateId = parseInt(request.params.id)

    const realEstateRepo: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)

    const findRealEstate = await realEstateRepo.find({
        where: {
            id: realEstateId
        }
    })

    if (findRealEstate.length === 0) {
        throw new AppError("RealEstate not found", 404)
    }

    return next()
}
