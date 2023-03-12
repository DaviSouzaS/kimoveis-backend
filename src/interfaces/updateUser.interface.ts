import { updateUserSchema } from "../schemas/updateUser.schema"
import { DeepPartial } from "typeorm"
import { Users } from "../entities"
import { z } from "zod"

type iUserUpdate = DeepPartial<Users>

type iUserUpdateReturn = z.infer<typeof updateUserSchema>

export {
    iUserUpdate,
    iUserUpdateReturn
}

