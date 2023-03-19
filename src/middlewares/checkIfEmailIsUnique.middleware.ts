import { Request, Response, NextFunction } from "express"
import { AppDataSource } from "../data-source"
import { Repository } from "typeorm"
import { AppError } from "../error"
import { User } from "../entities"

export const checkIfEmailExist = async (request: Request, response: Response, next: NextFunction): Promise<void> => {

    const email: string = request.body.email

    const usersRepo: Repository<User> = AppDataSource.getRepository(User)

    const user: User | null = await usersRepo.findOneBy({
        email: email
    })

    if (user !== null) {
        throw new AppError('Email already exists', 409)
    }

    return next()

}
