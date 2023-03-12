import { loginSchema } from "../schemas/login.schema"
import { z } from "zod"

type iUserLogin = z.infer<typeof loginSchema>

export {
    iUserLogin
}