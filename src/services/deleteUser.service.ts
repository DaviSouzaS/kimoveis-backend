import { AppDataSource } from "../data-source"
import { Users } from "../entities"
import { AppError } from "../error"

export const deleteUserService = async (payload: number): Promise<void> => {

    const usersRepo = AppDataSource.getRepository(Users)

    const user = await usersRepo.findOneBy({id: payload})

    await usersRepo.softRemove(user!)
}
