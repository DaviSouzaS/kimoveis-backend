import { AppDataSource } from "../data-source"
import { Repository } from "typeorm"
import { User } from "../entities"

export const deleteUserService = async (payload: number): Promise<void> => {

    const usersRepo: Repository<User> = AppDataSource.getRepository(User)

    const user: User | null = await usersRepo.findOneBy({id: payload})

    await usersRepo.softRemove(user!)
}
