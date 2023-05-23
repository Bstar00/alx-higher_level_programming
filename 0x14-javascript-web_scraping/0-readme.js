#!/usr/bin/node
// READ AND PRINTS A FILE CONTENT

const fs = require('fs');

function readFileContent (filePath) {
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`Content of ${filePath}:`);
      console.log(data);
    }
  });
}

// Usage: node readFile.js <file-path>
const filePath = process.argv[2];

readFileContent(filePath);
