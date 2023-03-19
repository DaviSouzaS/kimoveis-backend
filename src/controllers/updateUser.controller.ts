import { iUserUpdate, iUserUpdateWithoutPassword } from "../interfaces/updateUser.interface"
import { updateUserService } from "../services/updateUser.service"
import { Request, Response } from "express"

export const updateUserController = async (request: Request, response: Response): Promise<Response> => {

    const id: number = parseInt(request.params.id) 

    const updateData: iUserUpdate = request.body

    const updateUser: iUserUpdateWithoutPassword | null = await updateUserService(id, updateData)

    return response.status(200).json(updateUser)
}