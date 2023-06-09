import { updatedUserReturnSchema, updateUserSchema } from "../schemas/updateUser.schema"
import { DeepPartial } from "typeorm"
import { User } from "../entities"
import { z } from "zod"

type iUserUpdate = DeepPartial<User>

type iUserUpdateReturn = z.infer<typeof updateUserSchema>

type iUserUpdateWithoutPassword = z.infer<typeof updatedUserReturnSchema>

export {
    iUserUpdate,
    iUserUpdateReturn,
    iUserUpdateWithoutPassword
}

