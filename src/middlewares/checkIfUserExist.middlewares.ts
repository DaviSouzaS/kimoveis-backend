import { Request, Response, NextFunction } from "express"
import { AppDataSource } from "../data-source"
import { Users } from "../entities"
import { AppError } from "../error"

export const checkIfUserExist = async (request: Request, response: Response, next: NextFunction): Promise<void> => {

    const id: number = parseInt(request.params.id)

    const usersRepo = AppDataSource.getRepository(Users)

    const user: Users | null = await usersRepo.findOneBy({
        id: id
    })

    if (!user) {
        throw new AppError('this user has already been deleted or not exist', 404)
    }

    return next()

}

