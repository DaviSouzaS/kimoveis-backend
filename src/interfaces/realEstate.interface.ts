import { addressReturnSchema, realEstateReturnSchema, addressSchema, realEstateSchema, realEstateBodySchema } from "../schemas/realEstate.schema"
import { Category, RealEstate } from "../entities"
import { z } from "zod"

type iAddressSchema = z.infer<typeof addressSchema>

type iRealEstateSchema = z.infer<typeof realEstateSchema>

type iAddressReturnSchema = z.infer<typeof addressReturnSchema>

interface iAddress {
    street: string
	zipCode: string
    number: string
	city: string
	state: string
}

interface iRealEstateReturnWithoutAddress {
    value: string | number;
    size: number;
    id: number;
    createdAt: string;
    updatedAt: string;
    category: Category;
}

interface iRealEstateReturnSchema extends RealEstate {
    categoryId?: number,
    sold: boolean,
}

interface iRealEstateWithoutAddress {
    value: string | number,
    size: number,
    categoryId: number,
    address?: object
}

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
    iReadRealEstateCategory,
    iAddress,
    iRealEstateWithoutAddress,
    iRealEstateReturnWithoutAddress
}