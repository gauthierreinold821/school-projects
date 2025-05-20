const express = require('express');
const router = express.Router();

// Example Node.js server route
router.get('/api', (req, res) => {
  const data = { message: 'Hello, world!' };
  res.json(data);
});

module.exports = router;
