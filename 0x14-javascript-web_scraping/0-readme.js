#!/usr/bin/node
// Read and prints content in a file

const fs = require('fs');

function readFileContent(filePath) {
  fs.readFile(filePath, 'utf-8', (error, data) => {
    if (error) {
      console.error(error);
    } else {
      console.log(data);
    }
  });
}

// Usage: node script.js file_path
const filePath = process.argv[2];
readFileContent(filePath);
