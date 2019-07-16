const request = require('supertest');
const app = require('../lib/app');

describe('routes', () => {
  it('can create a profile using POST', () => {
    return request(app)
      .post('/api/quotes')
      .send({
        name: 'eli',
        favoriteCharacter: 'bender',
        quote: ''
      })
      .then(res => {
        // eslint-disable-next-line no-console
        expect(res.body).toEqual({
          name: 'eli',
          favoriteCharacter: 'bender',
          quote: ''
        });
      });
  });
  it('can get a profile using GET', () => {
    return request(app)
      .get('/api/quotes')
      .then(res => {
        expect(res.body).toEqual([{
          name: 'eli',
          favoriteCharacter: 'bender',
          quote: ''
        }]);
      });
      

  });
});
