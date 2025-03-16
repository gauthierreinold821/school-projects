const express = require('express');
const bodyParser = require('body-parser');
const translate = require('@google-cloud/translate').v2;
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

// Send a message in a different language through HTTP
app.post('/translate', (req, res) => {
  const text = req.body.text;
  translate.translate(text, 'en', 'fr')
    .then((results) => {
      const translation = results[0];
      res.send(`<b>${translation}</b>`);
    })
    .catch((err) => {
      console.error('ERROR:', err);
      res.status(400).send('Something went wrong');
    });
});
