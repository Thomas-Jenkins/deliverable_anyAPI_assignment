const pool = require('../utils/pool');
module.exports = class Book {
  constructor(row) {
    this.author = row.author;
    this.id = row.id;
    this.title = row.title;
    this.year_written = row.year_written;
    this.first_paragraph = row.first_paragraph;
    this.publisher = row.publisher;
    this.year_published = row.year_published;
  }
  static async getAll() {
    const { rows } = await pool.query('SELECT * from books');
    return rows.map((bookRow) => new Book(bookRow));
  }
  static async getById(id) {
    const { rows } = await pool.query('SELECT * from books WHERE id = $1', [id]);
    return new Book(rows[0]);
  }  
};
