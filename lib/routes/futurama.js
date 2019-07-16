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
  })
  .get('/', (req, res) => {
    res.send(quotes);
  })
  .get('/:id', (req, res) => {
    res.send(quotes([req.params.id]));
  });
