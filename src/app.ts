import "express-async-errors"
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

app.use(handleErrors)

export default app