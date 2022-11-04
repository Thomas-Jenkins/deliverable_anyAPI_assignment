const pool = require('../utils/pool');
module.exports = class Book {
  constructor(row) {
    this.id = row.id;
    this.title = row.title;
    this.year_written = row.year_written;
    this.first_paragraph = row.first_paragraph;
    this.publisher = row.publisher;
  }
  static async getAll() {
    const { rows } = await pool.query('SELECT * from books');
    return rows.map((bookRow) => new Book(bookRow));
  }  
};
