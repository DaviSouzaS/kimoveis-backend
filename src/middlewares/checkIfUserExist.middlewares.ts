import { Request, Response, NextFunction } from "express"
import { AppDataSource } from "../data-source"
import { Repository } from "typeorm"
import { AppError } from "../error"
import { User } from "../entities"

export const checkIfUserExist = async (request: Request, response: Response, next: NextFunction): Promise<void> => {

    const id: number = parseInt(request.params.id)

    const usersRepo: Repository<User> = AppDataSource.getRepository(User)

    const user: User | null = await usersRepo.findOneBy({
        id: id
    })

    if (!user) {
        throw new AppError('User not found', 404)
    }

    return next()

}

