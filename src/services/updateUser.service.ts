import { iUserUpdate, iUserUpdateWithoutPassword } from "../interfaces/updateUser.interface"
import { AppDataSource } from "../data-source"
import { Repository } from "typeorm"
import { User } from "../entities"

export const updateUserService = async (id: number, payload: iUserUpdate): Promise<iUserUpdateWithoutPassword> => {

    const usersRepo: Repository<User> = AppDataSource.getRepository(User)
    const user: User = usersRepo.create({id, ...payload})

    await usersRepo.save(user)

    const updatedUser: User[] | null = await usersRepo.find({
        select: ["id", "name", "email", "admin", "createdAt", "updatedAt", "deletedAt"],
        where: {
            id: id
        }
    })

    return updatedUser[0]
}