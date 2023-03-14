import { iUserCreate } from "../interfaces/createUser.interface"
import { AppDataSource } from "../data-source"
import { User } from "../entities"
import { hash } from "bcryptjs"

export const createUserService = async (payload: iUserCreate): Promise<User> => {

    const encryptedPass: string = await hash(payload.password, 10)    

    payload.password = encryptedPass

    const usersRepo = AppDataSource.getRepository(User)
    const user = usersRepo.create(payload)
  
    await usersRepo.save(user)
  
    return user
}


