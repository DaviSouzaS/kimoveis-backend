import { z } from "zod"

const updateUserSchema = z.object({
    name: z.string().max(45).optional(),
    email: z.string().email().max(45).optional(),
    password: z.string().max(120).optional(),
})

export {
    updateUserSchema
}