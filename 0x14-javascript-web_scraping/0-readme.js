#!/usr/bin/node
// Read and prints content in a file

const fs = require('fs');

<<<<<<< HEAD
function readFileContent (filePath) {
=======
function readFileContent(filePath) {
>>>>>>> 0ff5a614552842b44c8ec671c395b2ea8b5507cc
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
