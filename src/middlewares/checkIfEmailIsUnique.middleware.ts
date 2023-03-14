import { Request, Response, NextFunction } from "express"
import { AppDataSource } from "../data-source"
import { User } from "../entities"
import { AppError } from "../error"

export const checkIfEmailExist = async (request: Request, response: Response, next: NextFunction): Promise<void> => {

    const email: string = request.body.email

    const usersRepo = AppDataSource.getRepository(User)

    const user: User | null = await usersRepo.findOneBy({
        email: email
    })

    if (user !== null) {
        throw new AppError('Email already exists', 409)
    }

    return next()

}
