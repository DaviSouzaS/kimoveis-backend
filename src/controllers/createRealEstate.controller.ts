import { iAddressSchema, iRealEstateWithoutAddress } from "../interfaces/realEstate.interface"
import { createRealEstateService } from "../services/createRealEstate.service"
import { Request, Response } from "express"

export const createRealEstateController = async (request: Request, response: Response): Promise<Response> => {

    const address: iAddressSchema = request.body.address

    const realEstateWithoutAddress: iRealEstateWithoutAddress = {
        value: request.body.value,
        size: request.body.size,
        categoryId: request.body.category
    }

    const realEstateCreated = await createRealEstateService(realEstateWithoutAddress, address)

    return response.status(201).json(realEstateCreated)
}

