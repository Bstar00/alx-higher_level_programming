#!/usr/bin/node
// Reads and prints the content of a file

<<<<<<< HEAD
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

// Usage: node script.js file_path
const filePath = process.argv[2];
readFileContent(filePath);
=======
const argv = process.argv;
let fs = require('fs');
fs.readFile(argv[2], 'utf8', function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
>>>>>>> 12cea3feafb1a00f12773c9dfed222669deb4736
