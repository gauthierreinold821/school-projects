const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/index', (req, res) => {
  res.send(`
    <h1>Hello World</h1>
  `);
});

app.listen(3000, () => console.log(`Server is running on port 3000`));
