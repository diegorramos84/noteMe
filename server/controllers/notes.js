const Note = require('../models/note')

// index

async function index (req, res) {
  try {
    const notes = await Note.getAll()
    res.status(200).json(notes)
  } catch (err) {
    res.status(500).json({ "error": err.message })
  }
}
// show
// create
// update
// destroy


module.exports = {
  index
}
