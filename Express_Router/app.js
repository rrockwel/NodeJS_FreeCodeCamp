const express = require('express');
const path = require('path');

// Initiate express App
const app = express();

// Create Static folder for Express
app.use('/public', express.static(path.join(__dirname, "static")));

// Require People.js File
const people = require('./routes/people');

app.use('/people', people);

// Call Port for App To Listen On
app.listen(3000);
