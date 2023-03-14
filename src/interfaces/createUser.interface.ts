import { createUserSchema, returnUserSchema } from "../schemas/createUser.schema"
import { z } from "zod"

type iUserCreate = z.infer<typeof createUserSchema>

type iReturnUserSchema = z.infer<typeof returnUserSchema>


export { 
    iUserCreate,
    iReturnUserSchema,
}