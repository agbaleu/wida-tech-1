const express = require('express')
const app = express()
const PORT = 3000

const mongoose = require('mongoose')

const routes = require('./routes')
const { errorHandler } = require('./middlewares')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(routes)
app.use(errorHandler)

mongoose
  .connect('mongodb://127.0.0.1:27017/widatech', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Connected to mongoDB WidaTech local')

    app.listen(PORT, () => {
      console.log(`Your server is live at http://localhost:${PORT}`)
    })
  })
  .catch(console.error)
