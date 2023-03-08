const express = require("express")
const app = express()
const port = 3000
const userRouter = require('./routers/users')
const fruitRouter = require('./routers/fruits')

app.use(express.json())
app.use(express.urlencoded())

// Express Routes

app.use('/users', userRouter)

app.use('/fruits', fruitRouter)


app.listen(port, () => {
    console.log(`App listening on port http://localhost:${port}`)
})
