const { Router } = require('express')

const notesController = require('../controllers/notes')

const notesRouter = Router()



notesRouter.get('/', notesController.index )


module.exports = notesRouter
