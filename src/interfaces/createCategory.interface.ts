import { createCategorySchema } from "../schemas/createCategory.schema"
import { z } from "zod"

type iCreateCategory = z.infer<typeof createCategorySchema>

export {
    iCreateCategory
}