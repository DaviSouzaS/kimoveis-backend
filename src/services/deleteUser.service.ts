import { AppDataSource } from "../data-source"
import { User } from "../entities"

export const deleteUserService = async (payload: number): Promise<void> => {

    const usersRepo = AppDataSource.getRepository(User)

    const user = await usersRepo.findOneBy({id: payload})

    await usersRepo.softRemove(user!)
}
