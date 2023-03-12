import { Request, Response } from "express"
import { deleteUserService } from "../services/deleteUser.service"

export const deleteUserController = async (request: Request, response: Response): Promise<Response> => {

    const userId: number = parseInt(request.params.id)

    await deleteUserService(userId)

    return response.status(204).send()
  
}

