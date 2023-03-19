import { Request, Response, NextFunction } from "express"
import { AppDataSource } from "../data-source"
import { Repository } from "typeorm"
import { AppError } from "../error"
import { User } from "../entities"

export const usersPermissions = async (request: Request, response: Response, next: NextFunction): Promise<void> => {

    const logedUserId: number = parseInt(request.user.id) 

    const paramsId: number = parseInt(request.params.id) 

    const usersRepo: Repository<User> = AppDataSource.getRepository(User)

    const user: User | null = await usersRepo.findOneBy({
        id: logedUserId
    })

    const userStatus: boolean | undefined = user?.admin

    if (!userStatus && logedUserId !== paramsId) {
        
        throw new AppError("Insufficient permission", 403)
    }

    return next()

}

