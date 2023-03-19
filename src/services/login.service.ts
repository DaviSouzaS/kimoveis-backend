import { iUserLogin } from "../interfaces/login.interface"
import { AppDataSource } from "../data-source"
import { Repository } from "typeorm"
import { AppError } from "../error"
import { User } from "../entities"
import { compare } from "bcryptjs"
import jwt from "jsonwebtoken"
import "dotenv/config" 

export const loginService = async (payload: iUserLogin): Promise<string> => {

    const usersRepo: Repository<User> = AppDataSource.getRepository(User)

    const user: User | null = await usersRepo.findOneBy({
        email: payload.email
    })

    if (user?.deletedAt !== null) {
        throw new AppError('Invalid credentials', 401)
    }

    if (!user) {
        throw new AppError('Invalid credentials', 401)
    }

    const checkPassword: boolean = await compare(payload.password, user.password)

    if (!checkPassword) {
        throw new AppError('Invalid credentials', 401)
    }

    const token = jwt.sign(
        { admin: user.admin },
        process.env.SECRET_KEY!,
        { expiresIn: '24h', subject: String(user.id) }
    )

    return token

}