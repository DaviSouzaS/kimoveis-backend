import { z } from "zod"

const createUserSchema = z.object({
    name: z.string().max(45),
    email: z.string().email().max(45),
    password: z.string().max(120) //TALVEZ TENHA UM ERRO RELACIONADO AO ADMIN
})

const returnUserSchema = z.object({
    name: z.string().max(45),
    email: z.string().email().max(45),
    password: z.string().max(120).optional(),
})


export {
    createUserSchema,
    returnUserSchema
}