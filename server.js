const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./api/routes');
const path = require('path');
require('dotenv').config();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Req logger
// app.use((req, res, next) => {
//   console.log('BODY', req.body);
//   console.log('PARAMS', req.query);
//   next();
// })

app.use('/qa', routes);

app.get('/loaderio-82e1afa4c08267caa569c0851a3b132f', (req, res) => {
  res.sendFile(path.resolve('./loader.io.txt'));
});

app.listen(process.env.PORT, () => {
    console.log('App listening on port ', process.env.PORT)
});
