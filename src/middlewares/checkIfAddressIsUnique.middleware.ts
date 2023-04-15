import { Request, Response, NextFunction } from "express"
import { AppDataSource } from "../data-source"
import { Address } from "../entities"
import { Repository } from "typeorm"
import { AppError } from "../error"
import { iAddress } from "../interfaces/realEstate.interface"

export const checkIfAddressIsUnique = async (request: Request, response: Response, next: NextFunction): Promise<void> => {
    const address: iAddress = request.body.address

    if (address !== undefined) {
        const addressRepo: Repository<Address> = AppDataSource.getRepository(Address)

        const findAddress = await addressRepo.find({
            where: {
                street: address.street,
                zipCode: address.zipCode,
                city: address.city,
                state: address.state,
                number: address?.number
            }
        })

        if (findAddress.length !== 0) {
            throw new AppError("Address already exists", 409)
        }
    }
    return next()
}
