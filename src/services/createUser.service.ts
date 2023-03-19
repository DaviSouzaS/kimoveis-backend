import { iUserCreate } from "../interfaces/createUser.interface"
import { AppDataSource } from "../data-source"
import { Repository } from "typeorm"
import { User } from "../entities"

export const createUserService = async (payload: iUserCreate): Promise<User> => {

    const usersRepo: Repository<User> = AppDataSource.getRepository(User)
    const user: User = usersRepo.create(payload)
  
    await usersRepo.save(user)
  
    return user
}


