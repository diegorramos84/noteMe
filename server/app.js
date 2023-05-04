const express = require('express')
const cors = require('cors')
const logger = require('morgan')

const notesRouter = require('./routers/notes')


const app = express()

app.use(cors())
app.use(express.json());
app.use(logger("dev"))

app.get("/", (req, res) => {
  res.send('Welcome to noteMe API')
})

app.use("/notes", notesRouter)

module.exports = app
