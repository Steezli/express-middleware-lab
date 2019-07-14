const { getRandomQuote } = require('../services/futuramaApi');

module.exports = (req, res, next) => {
  return getRandomQuote(1)
    .then(([quote]) => req.quote = quote)
    .then(() => next());
};
