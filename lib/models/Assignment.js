const pool = require('../utils/pool');
module.exports = class Assignment {
  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.module = row.module;
    this.description = row.description;
  }
  static async getAll() {
    const { rows } = await pool.query('SELECT * from alchemy_assignments');
    return rows.map((assignmentRow) => new Assignment(assignmentRow));
  }
};
