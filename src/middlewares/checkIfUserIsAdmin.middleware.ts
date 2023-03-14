import { Request, Response, NextFunction } from "express"
import { AppDataSource } from "../data-source"
import { User } from "../entities"
import { AppError } from "../error"

export const checkIfUserIsAdmin = async (request: Request, response: Response, next: NextFunction): Promise<void> => {

    const logedUserId: number = parseInt(request.user.id) 

    const usersRepo = AppDataSource.getRepository(User)

    const user: User | null = await usersRepo.findOneBy({
        id: logedUserId
    })

    const userStatus = user?.admin

    if (!userStatus) {
        throw new AppError("Insufficient permission", 403)
    }

    return next()

}

