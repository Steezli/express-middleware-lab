const request = require('superagent');

const getRandomQuote = (count, character) => {
  return request(`http://futuramaapi.herokuapp.com/api/${character}/${count}`)
    .then(res => res.body);
};

module.exports = {
  getRandomQuote
};
