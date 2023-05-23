#!/usr/bin/node
// write to a file script

const fs = require('fs');

function writeStringToFile (filePath, content) {
  fs.writeFile(filePath, content, 'utf-8', (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`Successfully wrote to ${filePath}`);
    }
  });
}

// Usage: node writeToFile.js <file-path> <string-to-write>
const filePath = process.argv[2];
const content = process.argv[3];

writeStringToFile(filePath, content);
