const express = require('express')
const cors = require('cors')
const logger = require('morgan')

const app = express()

app.use(cors())
app.use(logger("dev"))

app.get("/", (req, res) => {
  res.send('Welcome to noteMe API')
})

module.exports = app
