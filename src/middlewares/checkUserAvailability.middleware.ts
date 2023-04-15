import { Request, Response, NextFunction } from "express"
import { Schedule } from "../entities/schedulesUsersProperties.entity"
import { AppDataSource } from "../data-source"
import { AppError } from "../error"

export const checkUserAvailability = async (request: Request, response: Response, next: NextFunction): Promise<void> => {
    const userId = parseInt(request.user.id) 

    const scheduleRepo = AppDataSource.getRepository(Schedule)

    const userAvailability = await scheduleRepo.createQueryBuilder('schedules_users_properties').
    select(['schedules_users_properties', 'schedules_user']).
    innerJoin('schedules_users_properties.user', 'schedules_user').
    where('schedules_user.id = :id', { id: userId }).
    andWhere('schedules_users_properties.date = :date', { date: request.body.date }).
    andWhere('schedules_users_properties.hour = :hour', { hour: request.body.hour }).
    getMany()
    
    if (userAvailability.length > 0) {
        throw new AppError("User schedule to this real estate at this date and time already exists", 409)
    }

    return next()
}
