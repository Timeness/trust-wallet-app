const express = require('express');
const path = require('path');
const walletRoute = require('./routes/wallet');

const app = express();

app.use(express.static(path.join(__dirname, '../public')));
app.use('/api', walletRoute);

module.exports = app;
