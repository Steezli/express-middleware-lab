const quote = require('../lib/middleware/quote');

describe('logging middleware', () => {
  it('logs messages', done => {
    const req = {};

    const next = () => {
      expect(req.quote).toEqual({
        character: expect.any(String),
        quote: expect.any(String),
        image: expect.any(String)
      });
      done();
    };

    quote(req, {}, next);
  });
});
