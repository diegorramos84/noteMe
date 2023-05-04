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
async function show (req, res) {
  try {
      const id = parseInt(req.params.id);
      const note = await Note.getOneById(id);
      res.json(note);
  } catch (err) {
      res.status(404).json({ "error": err.message })
  }
}
// create
async function create (req, res) {
  try {
      const data = req.body;
      const result = await Note.create(data);
      res.status(201).send(result);
  } catch (err) {
      res.status(400).json({ "error": err.message })
  }
};
// update
async function update (req, res) {
  try {
      const data = req.body
      const id = parseInt(req.params.id);
      const note = await Note.getOneById(id);
      const result = await note.update(data);
      res.status(200).json(result);
  } catch (err) {
      res.status(404).json({ "error": err.message })
  }
}

// destroy
async function destroy (req, res) {
  try {
      const id = parseInt(req.params.id);
      const note = await Note.getOneById(id);
      const result = await note.destroy();
      res.status(204).end();
  } catch (err) {
      res.status(404).json({"error": err.message})
  }
};

module.exports = {
  index, show, create, update, destroy
}
