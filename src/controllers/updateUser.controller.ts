import { updateUserService } from "../services/updateUser.service"
import { iUserUpdate } from "../interfaces/updateUser.interface"
import { Request, Response } from "express"
import { Users } from "../entities"

export const updateUserController = async (request: Request, response: Response): Promise<Response> => {

    const id: number = parseInt(request.params.id) 

    const updateData: iUserUpdate = request.body

    const updateUser: Users | null = await updateUserService(id, updateData)

    // delete updateUser.password

    return response.status(200).json(updateUser)
}