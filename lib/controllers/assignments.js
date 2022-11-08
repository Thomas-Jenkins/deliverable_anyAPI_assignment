const { Router } = require('express');
const Assignment = require('../models/Assignment');

module.exports = Router()

  .get('/', async (req, res) => {
    const assignments = await Assignment.getAll();
    const filtered = assignments.map(({ id, name }) => ({ id, name }));
    res.json(filtered);
  });
