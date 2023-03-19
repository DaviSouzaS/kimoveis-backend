import { iReturnUserSchema } from "../interfaces/createUser.interface"
import { createUserService } from "../services/createUser.service"
import { Request, Response } from "express"

export const createUserController = async (request: Request, response: Response): Promise<Response> => {

    const user: iReturnUserSchema = await createUserService(request.body)

    delete user.password

    return response.status(201).json(user)
  
}

