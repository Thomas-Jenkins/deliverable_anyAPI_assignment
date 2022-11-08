const { Router } = require('express');
const Assignment = require('../models/Assignment');

module.exports = Router()

  .get('/:id', async (req, res) => {
    const assignment = await Assignment.getById(req.params.id);
    res.json(assignment);
  })

  .get('/', async (req, res) => {
    const assignments = await Assignment.getAll();
    const filtered = assignments.map(({ id, name }) => ({ id, name }));
    res.json(filtered);
  });
