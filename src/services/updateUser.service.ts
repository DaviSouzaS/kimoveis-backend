import { iUserUpdate } from "../interfaces/updateUser.interface"
import { AppDataSource } from "../data-source"
import { User } from "../entities"
import { hash } from "bcryptjs"
import { AppError } from "../error"

export const updateUserService = async (id: number, payload: iUserUpdate): Promise<User | null> => {

    const usersRepo = AppDataSource.getRepository(User)

    if (payload.password !== undefined) {
        payload.password = await hash(payload.password, 10)  
    }

    const updateUser = await usersRepo.save({id, ...payload})

    const userId: number = updateUser.id

    return await usersRepo.findOneBy({id: userId})
}