import { createUserService } from "../services/createUser.service"
import { Request, Response } from "express"
import { iReturnUserSchema } from "../interfaces/createUser.interface"

export const createUserController = async (request: Request, response: Response): Promise<Response> => {

    const user: iReturnUserSchema = await createUserService(request.body)

    console.log(user)

    delete user.password

    return response.status(201).json(user)
  
}

