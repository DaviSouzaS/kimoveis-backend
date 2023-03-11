import "express-async-errors"
import express, { Application } from "express"
import { userRouter } from "./routes/users.router"
import { handleErrors } from "./error"

const app: Application = express()
app.use(express.json())

app.use('/users', userRouter)

app.use(handleErrors)

export default app