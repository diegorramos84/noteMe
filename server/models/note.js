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

  // create

  // update

  // destroy
}



module.exports = Note
