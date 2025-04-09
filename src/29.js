const express = require('express');
const app = express();
app.get('/nodejs', (req, res) => {
  res.send("Hello from Node.js!");
});

app.listen(3000);
