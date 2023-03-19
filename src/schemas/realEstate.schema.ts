import { z } from "zod"

const addressReturnSchema = z.object({
    id: z.number(),
    street: z.string().max(45),
    zipCode: z.string().max(8),
    number: z.string().max(7).optional().nullable(),
    city: z.string().max(20),
    state: z.string().max(2)
})

const addressSchema = addressReturnSchema.omit({
    id: true
})

const realEstateReturnSchema = z.object({
    id: z.number(),
    value: z.number().or(z.string()), 
    size: z.number(),
    categoryId: z.number().optional().nullable(),
    address: addressSchema
})

const realEstateSchema = realEstateReturnSchema.omit({
    id: true
})

const realEstateBodySchema = z.object({
    value: z.number().or(z.string()), 
    size: z.number(),
    category: z.number().optional().nullable(),
    address: addressSchema.optional()
})

const realEstateBody = z.object({
    value: z.number().or(z.string()),
    size: z.number(),
    address: addressSchema,
    category: z.number().optional().nullable()
})

export {
    addressReturnSchema,
    realEstateReturnSchema,
    addressSchema,
    realEstateSchema,
    realEstateBodySchema,
    realEstateBody
}