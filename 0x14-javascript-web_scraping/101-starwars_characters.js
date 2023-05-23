#!/usr/bin/node
// a script that prints all characters of a Star Wars movie:
// The first argument is the Movie ID - example: 3 = “Return of the Jedi”
// Display one character name by line in the same order of the list
// “characters” in the /films/ response
// You must use the Star wars API
// You must use the module request

const request = require('request');

function getDataFrom (url) {
  return new Promise(function (resolve, reject) {
    request(url, function (err, _res, body) {
      if (err) {
        reject(err);
      } else {
        resolve(body);
      }
    });
  });
}

function errHandler (err) {
  console.log(err);
}

function printMovieCharacters (movieId) {
  const movieUri = `https://swapi-api.hbtn.io/api/films/${movieId}`;

  getDataFrom(movieUri)
    .then(JSON.parse, errHandler)
    .then(function (res) {
      const characters = res.characters;
      const promises = [];

      for (let i = 0; i < characters.length; ++i) {
        promises.push(getDataFrom(characters[i]));
      }

      Promise.all(promises)
        .then((results) => {
          for (let i = 0; i < results.length; ++i) {
            console.log(JSON.parse(results[i]).name);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    });
}

printMovieCharacters(process.argv[2]);
