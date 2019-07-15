const request = require('supertest');
const app = require('../lib/app');

describe('routes', () => {
  it('can create a profile using GET', () => {
    return request(app)
      .post('/api/quotes')
      .send({
        name: 'eli',
        favoriteCharacter: 'bender',
        quote: ''
      })
      .then(res => {
        // eslint-disable-next-line no-console
        console.log(res.body);
        expect(res.body).toEqual({
          name: 'eli',
          favoriteCharacter: 'bender',
          quote: ''
        });
      });
  });
});
