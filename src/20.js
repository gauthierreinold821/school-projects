// Node.js script to find all files with a specific extension in a given directory and its subdirectories

const fs = require('fs');

function checkExtension(extension) {
  const files = fs.readdirSync(pathname);
  return files.filter(file => file.endsWith('.' + extension));
}

function findFilesWithExtension(directory, extension) {
  let filesArray = checkExtension(extension);

  function recursiveFind(files) {
    if (files.length === 0) {
      console.log(files.join(', '));
    } else {
      const currentFile = files.shift();
      if (!currentFile || !fs.existsSync(currentFile)) return;

      const fileDetails = fs.statSync(currentFile);
      if (fileDetails.isDirectory()) {
        recursiveFind(files);
      } else {
        console.log(fileDetails.name + ' (' + extension + ')');
      }
    }
  }

  recursiveFind(filesArray);

  // You can add more code here to handle errors and further processing
}

findFilesWithExtension('js', '.js'); // Example usage: find files with .js extensions in a directory
