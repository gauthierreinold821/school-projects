let express = require('express');
let app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('<h1>Hello World</h1>');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
