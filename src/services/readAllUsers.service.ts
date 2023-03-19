import { AppDataSource } from "../data-source"
import { Repository } from "typeorm"
import { User } from "../entities"

export const readAllUsersService = async (): Promise<User[]> => {

    const usersRepo: Repository<User> = AppDataSource.getRepository(User)

    const allUsers: User[] = await usersRepo.find({select: ["id", "name", "email", "admin", "createdAt", "updatedAt", "deletedAt"],
    withDeleted: true
})

    return allUsers
}