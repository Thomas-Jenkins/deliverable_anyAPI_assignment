const { Router } = require('express');
const Book = require('../models/Book');

module.exports = Router()

  .get('/:id', async (req, res) => {
    const book = await Book.getById(req.params.id);
    console.log('book controller', book);
    res.json(book);
  })

  .get('/', async (req, res) => {
    const books = await Book.getAll();
    const filtered = books.map(({ id, title }) => ({ id, title }));
    res.json(filtered);
  });


