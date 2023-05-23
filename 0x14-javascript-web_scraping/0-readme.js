#!/usr/bin/node
// Read and display file content

const fs = require('fs');

function readFileContent (filePath) {
  fs.readFile(filePath, 'utf-8', (error, content) => {
    if (error) {
      console.error(error);
    } else {
      console.log(content);
    }
  });
}

// Usage example
const filePath = process.argv[2]; // Get the file path from command line arguments
readFileContent(filePath);
