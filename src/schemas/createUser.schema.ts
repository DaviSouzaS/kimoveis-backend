import { z } from "zod"

const createUserSchema = z.object({
    name: z.string().max(45),
    email: z.string().email().max(45),
    password: z.string().max(120),
    admin: z.boolean().default(false)
})

const returnUserSchema = z.object({
    name: z.string().max(45),
    email: z.string().email().max(45),
    password: z.string().max(120).optional(),
    admin: z.boolean().default(false)
})


export {
    createUserSchema,
    returnUserSchema
}