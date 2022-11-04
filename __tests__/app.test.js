const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const { request } = require('express');
// const request = require('supertest');
// const app = require('../lib/app');

// describe('backend-express-template routes', () => {
//   beforeEach(() => {
//     return setup(pool);
//   });
//   it('example test - delete me!', () => {
//     expect(1).toEqual(1);
//   });
//   afterAll(() => {
//     pool.end();
//   });
// });

describe('books routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
});

it('/books should return a list of books', async () => {
  const res = await request(app).get('/books');
  const expected = books.map((book) => {
    return { id: book.id, title: book.title };
  });
  expect
})