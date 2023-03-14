import { iUserLogin } from "../interfaces/login.interface"
import { loginService } from "../services/login.service"
import { Request, Response } from "express"

export const loginController = async (request: Request, response: Response): Promise<Response> => {

    const loginData: iUserLogin = request.body

    const token: string = await loginService(loginData)

    return response.status(200).json({
        token: token
    })

}

