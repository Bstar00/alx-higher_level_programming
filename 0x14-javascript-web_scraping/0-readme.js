#!/usr/bin/node
// It read and prints the content of a file

const fs = require('fs');

function readFileContent (filePath) {
  fs.readFile(filePath, 'utf-8', (error, data) => {
    if (error) {
      console.error(error);
    } else {
      console.log(data);
    }
  });
}
