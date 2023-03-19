import { addressReturnSchema, realEstateReturnSchema, addressSchema, realEstateSchema, realEstateBodySchema } from "../schemas/realEstate.schema"
import { RealEstate } from "../entities"
import { z } from "zod"

type iAddressSchema = z.infer<typeof addressSchema>

type iRealEstateSchema = z.infer<typeof realEstateSchema>

type iAddressReturnSchema = z.infer<typeof addressReturnSchema>

type iRealEstateReturnSchema = z.infer<typeof realEstateReturnSchema>

type iRealEstateBodySchema = z.infer<typeof realEstateBodySchema>

type iReadRealEstateCategory = {
    id: number,
    name: string,
    realEstate: RealEstate[]
}

export { 
    iAddressSchema,
    iRealEstateSchema,
    iAddressReturnSchema,
    iRealEstateReturnSchema,
    iRealEstateBodySchema,
    iReadRealEstateCategory
}