const { Router } = require('express');

const quotes = [];

module.exports = Router()
  .post('/', (req, res) => {
    const {
      name,
      favoriteCharacter,
      quote
    } = req.body;

    const profile = {
      name,
      favoriteCharacter,
      quote
    };

    quotes.push (profile);
    res.send(profile);
  });
