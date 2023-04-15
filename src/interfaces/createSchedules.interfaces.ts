import { type } from "os"
import { createSchedulesSchema } from "../schemas/schedules.schemas"
import { z } from "zod"

type iCreateSchedules = z.infer<typeof createSchedulesSchema>

export {
    iCreateSchedules
}