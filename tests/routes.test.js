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
  it('can GET a profile based on index', () => {
    return request(app)
      .get('/api/quotes/0')
      .then(res => {
        expect(res.body).toEqual({
          name: 'eli',
          favoriteCharacter: 'bender',
          quote: ''
        });
      });
  });
  it('can update with PATCH', () => {
    const newProfile = {
      name: 'Erin',
      favoriteCharacter: 'bender',
      quote: ''
    };
    return request(app)
      .patch('/api/quotes/0')
      .send(newProfile)
      .then(res => {
        expect(res.body).toEqual({
          name: 'Erin',
          favoriteCharacter: 'bender',
          quote: ''
        });
      });
  });
  it('can delete a profile using DELETE', () => {
    return request(app)
      .delete('/api/quotes/')
      .then(res => {
        expect(res.body).toEqual({
          name: 'erin',
          favoriteCharacter: 'bender',
          quote: ''
        });
      });
  });
});
