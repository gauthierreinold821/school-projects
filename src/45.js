let express = require('express');
const app = express();

app.get('/', function(req, res) {
  res.send("Hello, this is my first Node.js application!");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
