import { loginSchema } from "../schemas/login.schema"
import { JwtPayload } from "jsonwebtoken"
import { z } from "zod"

type iUserLogin = z.infer<typeof loginSchema>

interface iUserInfos extends JwtPayload{
    admin: boolean,
    iat: number,
    exp: number,
    sub: string
}

export {
    iUserLogin,
    iUserInfos
}