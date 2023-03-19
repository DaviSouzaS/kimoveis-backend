import { z } from "zod"

const updateUserSchema = z.object({
    name: z.string().max(45).optional(),
    email: z.string().email().max(45).optional(),
    password: z.string().max(120).optional(),
})

const updatedUserReturnSchema = z.object({
    id: z.number(),
    email: z.string(),
    name: z.string(),
    admin: z.boolean(),
    createdAt: z.string(),
    updatedAt: z.string(),
    deletedAt: z.string().nullable().optional()
})

export {
    updateUserSchema,
    updatedUserReturnSchema
}