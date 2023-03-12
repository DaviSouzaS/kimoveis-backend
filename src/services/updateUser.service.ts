import { iUserUpdate } from "../interfaces/updateUser.interface"
import { AppDataSource } from "../data-source"
import { Users } from "../entities"
import { hash } from "bcryptjs"
import { AppError } from "../error"

export const updateUserService = async (id: number, payload: iUserUpdate): Promise<Users | null> => {

    const usersRepo = AppDataSource.getRepository(Users)

    if (payload.password !== undefined) {
        payload.password = await hash(payload.password, 10)  
    }

    const updateUser = await usersRepo.save({id, ...payload})

    const userId: number = updateUser.id

    return await usersRepo.findOneBy({id: userId})
}