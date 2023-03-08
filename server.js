const express = require("express")
const app = express()
const port = 3000
const userRouter = require('./routers/users')
const fruitRouter = require('./routers/fruits')

// Express Routes

app.use('/users', userRouter)
console.log(userRouter)

app.use('/fruits', fruitRouter)


app.listen(port, () => {
    console.log(`App listening on port http://localhost:${port}`)
})
