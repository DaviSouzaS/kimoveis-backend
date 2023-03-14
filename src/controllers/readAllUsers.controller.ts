import { readAllUsersService } from "../services/readAllUsers.service"
import { Request, Response } from "express"
import { User } from "../entities"

export const readAllUsersController = async (request: Request, response: Response): Promise<Response> => {

   const users: User[] = await readAllUsersService()

    return response.status(200).json(users)
}

