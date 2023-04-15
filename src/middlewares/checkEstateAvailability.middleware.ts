import { Request, Response, NextFunction } from "express"
import { Schedule } from "../entities/schedulesUsersProperties.entity"
import { AppDataSource } from "../data-source"
import { AppError } from "../error"

export const checkEstateAvailability = async (request: Request, response: Response, next: NextFunction): Promise<void> => {

    const scheduleRepo = AppDataSource.getRepository(Schedule)

    const estateAvailability = await scheduleRepo.createQueryBuilder('schedules_users_properties').
    select(['schedules_users_properties', 'schedules_estate']).
    innerJoin('schedules_users_properties.realEstate', 'schedules_estate').
    where('schedules_estate.id = :id', { id: request.body.realEstateId }).
    andWhere('schedules_users_properties.date = :date', { date: request.body.date }).
    andWhere('schedules_users_properties.hour = :hour', { hour: request.body.hour }).
    getMany()

    if (estateAvailability.length > 0) {
        throw new AppError("Schedule to this real estate at this date and time already exists", 409)
    }

    return next()
}

