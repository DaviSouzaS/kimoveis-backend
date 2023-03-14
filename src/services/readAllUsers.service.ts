import { AppDataSource } from "../data-source"
import { User } from "../entities"

export const readAllUsersService = async () => {

    const usersRepo = AppDataSource.getRepository(User)

    const allUsers: User[] = await usersRepo.find({select: ["id", "name", "email", "admin", "createdAt", "updatedAt", "deletedAt"]})

    return allUsers
}