const express = require('express');
const app = express();
const quotesRoutes = require('./routes/futurama');
const routes = require('./routes/futurama');
const getQuote = require('../lib/middleware/quote');

app.use(express.json());
app.use('/api/quotes', getQuote, routes);
app.use(quotesRoutes);

module.exports = app;
