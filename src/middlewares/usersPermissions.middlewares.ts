import { Request, Response, NextFunction } from "express"
import { AppDataSource } from "../data-source"
import { Users } from "../entities"
import { AppError } from "../error"

export const usersPermissions = async (request: Request, response: Response, next: NextFunction): Promise<void> => {

    const logedUserId: number = parseInt(request.user.id) 

    const paramsId: number = parseInt(request.params.id) 

    const usersRepo = AppDataSource.getRepository(Users)

    const user: Users | null = await usersRepo.findOneBy({
        id: logedUserId
    })

    const userStatus = user?.admin

    if (!userStatus && logedUserId !== paramsId) {
        
        throw new AppError("Insufficient Permission", 403)
    }

    return next()

}

