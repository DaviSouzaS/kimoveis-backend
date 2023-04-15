import { Request, Response, NextFunction } from "express"
import { AppError } from "../error"

export const checkDateAndHour = async (request: Request, response: Response, next: NextFunction): Promise<void> => {
 
   const date = new Date(request.body.date + " " + request.body.hour + ":00")

   const currentHour = date.getHours()
   const currentDate = date.getDay()

   if (currentDate === 6 || currentDate === 0) {
        throw new AppError("Invalid date, work days are monday to friday", 400)
   }

   if (currentHour < 8 || currentHour > 18) {
        throw new AppError("Invalid hour, available times are 8AM to 18PM", 400)
   }

    return next()

}