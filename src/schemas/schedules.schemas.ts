import { z } from "zod"

const createSchedulesSchema = z.object({
    date: z.string(),
    hour: z.string(),
    realEstateId: z.number()
})

export {
    createSchedulesSchema
}