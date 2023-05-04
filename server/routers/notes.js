const { Router } = require('express')

const notesController = require('../controllers/notes')

const notesRouter = Router()



notesRouter.post('/', notesController.create)
notesRouter.get('/', notesController.index)
notesRouter.get('/:id', notesController.show)
notesRouter.patch('/:id', notesController.update)
notesRouter.delete('/:id', notesController.destroy)


module.exports = notesRouter
