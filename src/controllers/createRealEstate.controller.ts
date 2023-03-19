import { iAddressSchema, iRealEstateBodySchema } from "../interfaces/realEstate.interface"
import { createRealEstateService } from "../services/createRealEstate.service"
import { Request, Response } from "express"

export const createRealEstateController = async (request: Request, response: Response): Promise<Response> => {

    const address: iAddressSchema = request.body.address

    const realEstate: iRealEstateBodySchema = request.body

    delete realEstate.address

    const realEstateWithoutPass:any = realEstate //PRECISO ENCONTRAR A TIPAGEM CORRETA 

    const realEstateCreated = await createRealEstateService(realEstateWithoutPass, address)

    return response.status(201).json(realEstateCreated)
}

