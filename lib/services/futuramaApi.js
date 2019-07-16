const request = require('superagent');

const getRandomQuote = (count, character = 'bender') => {
  return request(`http://futuramaapi.herokuapp.com/api/characters/${character}/${count}`)
    .then(res => res.body);
};

module.exports = {
  getRandomQuote
};
