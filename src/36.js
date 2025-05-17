// Node.js example to read a file and output its content as ASCII art
var fs = require('fs');

function printAsciiArt(filePath) {
  var data = fs.readFileSync(filePath, 'utf8');
  console.log(data);
}

printAsciiArt('school-projects/file.txt'); // Replace 'file.txt' with your desired input file path
