import { iUserCreate } from "../interfaces/createUser.interface"
import { AppDataSource } from "../data-source"
import { Users } from "../entities"
import { hash } from "bcryptjs"

const createUserService = async (payload: iUserCreate): Promise<Users> => {

    const encryptedPass: string = await hash(payload.password, 10)    

    payload.password = encryptedPass

    const usersRepo = AppDataSource.getRepository(Users)
    const user = usersRepo.create(payload)
  
    await usersRepo.save(user)
  
    return user
}

export { createUserService }
