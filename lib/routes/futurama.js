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
  })
  .patch('/:id', (req, res) => {
    const {
      name,
      favoriteCharacter,
      quote
    } = req.body;
    const updatedProfile = {
      name,
      favoriteCharacter,
      quote
    };

    quotes[req.params.id] = updatedProfile;
    res.send(updatedProfile);
  })
  .delete('/:id', (req, res) => {
    const deleted = quotes.splice(req.params.id, 0);
    res.send(deleted[0]);
  });
