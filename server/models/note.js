const db = require('../database/connect')

class Note {
  constructor({ note_id, title, author, content }) {
    this.id = note_id,
    this.title = title,
    this.author = author,
    this.content = content
  }

  // getAll
  static async getAll() {
    const response = await db.query("SELECT * FROM notes;")
    if (response.rows.length === 0) {
      throw new Error('No notes available')
    }
    return response.rows.map(n => new Note(n))
  }

  // getOneById
  static async getOneById(id) {
    const response = await db.query("SELECT * FROM notes WHERE note_id = $1;", [id]);
    if (response.rows.length != 1) {
        throw new Error("Unable to locate note.")
    }
    return new Note(response.rows[0]);
}

  // create
  static async create(data) {
    const { title, author, content } = data;
    const response = await db.query('INSERT INTO notes (title, author, content) VALUES ($1, $2, $3) RETURNING *;', [title, author, content ]);
    const noteId = response.rows[0].note_id;
    const newNote = await Note.getOneById(noteId);
    return newNote;
}
  // update

  async update(data) {
    const response = await db.query("UPDATE notes SET content = $1 WHERE note_id = $2 RETURNING note_id;", [data.content, this.id])

    if (response.rows.length != 1) {
      throw new Error("Unable to update note content")
    }
    return new Note(response.rows[0])
  }

  // destroy
  async destroy() {
    const response = await db.query('DELETE FROM notes WHERE note_id = $1 RETURNING *;', [this.id]);
    if (response.rows.length != 1) {
        throw new Error("Unable to delete note.")
    }
    return new Note(response.rows[0]);
}
}



module.exports = Note
