import { iUserLogin } from "../interfaces/login.interface"
import { AppDataSource } from "../data-source"
import { Users } from "../entities"
import { AppError } from "../error"
import { compare } from "bcryptjs"
import jwt from "jsonwebtoken"
import "dotenv/config" 

export const loginService = async (payload: iUserLogin): Promise<string> => {

    const usersRepo = AppDataSource.getRepository(Users)

    const user: Users | null = await usersRepo.findOneBy({
        email: payload.email
    })

    if (!user) {
        throw new AppError('Wrong email or password', 401)
    }

    const checkPassword = await compare(payload.password, user.password)

    if (!checkPassword) {
        throw new AppError('Wrong email or password', 401)
    }

    const token = jwt.sign(
        { email: user.email },
        process.env.SECRET_KEY!,
        { expiresIn: '24h', subject: String(user.id) }
    )

    return token

}