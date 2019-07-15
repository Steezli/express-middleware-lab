const express = require('express');
const app = express();
const quotesRoutes = require('./routes/futurama');
const routes = require('./routes/futurama');

app.use(express.json());
app.use('/api/quotes', routes);
app.use(quotesRoutes);

module.exports = app;
