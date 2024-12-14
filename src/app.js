const express = require('express');
const config = require('./config');

const app = express();

app.use(express.json());

app.set('port', config.app.port);

module.exports = app;