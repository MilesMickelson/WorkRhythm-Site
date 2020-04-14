const express = require('express');
const cors = require('cors');
const compression = require('compression');

const app = express();

app.use(cors());
app.use(express.static('dist'));
app.use(compression());

module.exports = app;
