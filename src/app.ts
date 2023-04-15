import "express-async-errors"
import { realEstateRouter } from "./routes/realEstate.router"
import { schedulesRouter } from "./routes/schedules.router"
import { categoryRouter } from "./routes/categories.router"
import { loginRouter } from "./routes/login.router"
import { userRouter } from "./routes/users.router"
import express, { Application } from "express"
import { handleErrors } from "./error"

const app: Application = express()
app.use(express.json())

app.use('/users', userRouter)

app.use('/login', loginRouter)

app.use('/categories', categoryRouter)

app.use('/realEstate', realEstateRouter)

app.use('/schedules', schedulesRouter)

app.use(handleErrors)

export default app