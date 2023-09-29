require("dotenv").config()

const express = require('express')
const itemRoutes = require('./routes/items')
const itemRoutes2 = require(`./routes/items2`)
const itemRoutes3 = require(`./routes/items3`)
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json()) // parse incomming data
// routes for requests will always now have '/todos'
// eg http://localhost:4000/todos/items
app.use('/blogs', itemRoutes)
app.use('/users', itemRoutes2)
app.use('/comments', itemRoutes3)


mongoose.connect(process.env.MONGODB_URL)
.then(() => {
    app.listen(4000, () => {
        console.log(`listening on port 4000`)
    })

    })
    .catch((error) => {
        console.log(error)
})
// LISTEN ON PORT 4000
// frontend is running on port 3000


