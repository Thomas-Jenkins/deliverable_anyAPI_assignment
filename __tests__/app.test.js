const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const { books } = require('../lib/books-data');

describe('books routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  
  it('/books should return a list of books', async () => {
    const res = await request(app).get('/books');
    const expected = books.map((book) => {
      return { id: book.id, title: book.title };
    });
    expect(res.body).toEqual(expected);
  });
  
  it('/:id should return the details of a single book matching the id', async () => {
    const res = await request(app).get('/books/1');
    const 
  })

});
