import { readAllUsersService } from "../services/readAllUsers.service"
import { Request, Response } from "express"
import { Users } from "../entities"

export const readAllUsersController = async (request: Request, response: Response): Promise<Response> => {

   const users: Users[] = await readAllUsersService()

    return response.status(200).json(users)
}

