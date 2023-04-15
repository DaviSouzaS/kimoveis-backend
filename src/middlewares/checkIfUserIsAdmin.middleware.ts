import { iUserInfos } from "../interfaces/login.interface"
import { Request, Response, NextFunction } from "express"
import { AppError } from "../error"
import jwt from "jsonwebtoken"

export const checkIfUserIsAdmin = async (request: Request, response: Response, next: NextFunction): Promise<void> => {
    const userToken: string | undefined = request.headers.authorization

    const token: string = userToken!.split(' ')[1]; 
    const decoded: iUserInfos = jwt.verify(token, process.env.SECRET_KEY!) as iUserInfos

    const userStatus: boolean = decoded.admin

    if (userStatus !== true) {
        throw new AppError("Insufficient permission", 403)
    }

    return next()
}

