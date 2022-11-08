const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const { books } = require('../lib/books-data');
const { alchemy_assignments } = require('../lib/alchemy_assignments')

describe('books routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  
  it('/books/:id should return the details of a single book matching the id', async () => {
    const res = await request(app).get('/books/1');
    const theFinalEmpire = {
      id: '1',
      title: 'Mistborn: The Final Empire', 
      author: 'Brandon Sanderson', 
      year_published: 2006, 
      first_paragraph: 'Ash fell from the sky. Vin watched the downy flakes drift through the air. Leisurely. Careless. Free. The puffs of soot fell like black snowflakes, descending upon the dark city of Luthadel. They drifted in corners, blowing in the breeze and curling in tiny whirlwinds over the cobblestones. They seemed so uncaring. What would that be like?', 
      publisher: 'Tor Books'
    };
    expect(res.body).toEqual(theFinalEmpire);
  });

  it('/books should return a list of books', async () => {
    const res = await request(app).get('/books');
    const expected = books.map((book) => {
      return { id: book.id, title: book.title };
    });
    expect(res.body).toEqual(expected);
  });
  
  afterAll(() => {
    pool.end();
  });
});

describe('alchemy_assignments routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/alchemy_assignments should return a list of alchemy assignments', async () => {
    const res = await request(app).get('/alchemy_assignments');
    const expected = alchemy_assignments.map((assignment) => {
      return { id: assignment.id, name: assignment.name };
    });
    expect(res.body).toEqual(expected);
  });

  afterAll(() => {
    pool.end();
  });
});
