import { z } from "zod"

const createCategorySchema = z.object({
    name: z.string().max(45)
})

export {
    createCategorySchema
}