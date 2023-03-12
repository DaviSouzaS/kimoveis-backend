import { AppDataSource } from "../data-source"
import { Users } from "../entities"

export const readAllUsersService = async () => {

    const usersRepo = AppDataSource.getRepository(Users)

    const allUsers: Users[] = await usersRepo.find({select: ["id", "name", "email", "admin", "createdAt", "updatedAt", "deletedAt"]})

    return allUsers
}