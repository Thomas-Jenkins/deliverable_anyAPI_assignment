const { Router } = require('express');
const Book = require('../models/Book');

module.exports = Router()

  .get('/', async (req, res) => {
    const books = await Book.getAll();
    const filtered = books.map(({ id, title }) => ({ id, title }));
    console.log('filtered: ', filtered);
    res.json(filtered);
  });
