import { Request, Response } from "express"
import { readAllUsersService } from "../services/readAllUsers.service"

export const readAllUsersController = async (request: Request, response: Response): Promise<Response> => {

   const users = await readAllUsersService()

    return response.status(200).json(users)
}

