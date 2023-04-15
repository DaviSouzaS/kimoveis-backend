import { iCreateSchedules } from "../interfaces/createSchedules.interfaces"
import { Schedule } from "../entities"
import { AppDataSource } from "../data-source"
import { Repository } from "typeorm"

export const createScheduleService = async (payload: iCreateSchedules, userId: number): Promise<Schedule[]> => {
    const scheduleRepo: Repository<Schedule> = AppDataSource.getRepository(Schedule)

    const responseSchedule: any = {
        date: payload.date,
        hour: payload.hour,
        realEstate: payload.realEstateId,
        user: userId
    }

    const schedule: Schedule[] = scheduleRepo.create(responseSchedule)
    console.log(schedule)
    await scheduleRepo.save(schedule)

    return schedule
}