import { iUserLogin } from "../interfaces/login.interface"
import { AppDataSource } from "../data-source"
import { User } from "../entities"
import { AppError } from "../error"
import { compare } from "bcryptjs"
import jwt from "jsonwebtoken"
import "dotenv/config" 

export const loginService = async (payload: iUserLogin): Promise<string> => {

    const usersRepo = AppDataSource.getRepository(User)

    const user: User | null = await usersRepo.findOneBy({
        email: payload.email
    })

    if (user?.deletedAt !== null) {
        throw new AppError('Wrong email or password', 401)
    }

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