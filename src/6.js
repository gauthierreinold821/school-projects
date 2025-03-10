const http = require('http');
const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === '/') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>Welcome to my homepage!</h1>');
  } else {
    res.writeHead(404, {'Content-Type': 'text/html'});
    res.end('<h1>Page not found.</h1>');
  }
});
server.listen(3000, () => {
  console.log('Server started on port 3000!');
});
