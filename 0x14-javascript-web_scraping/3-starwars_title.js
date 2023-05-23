#!/usr/bin/node
//script that retrieves the title of a Star Wars movie

const request = require('request');

function getMovieTitle(movieId) {
  const url = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

  request(url, (error, response, body) => {
    if (error) {
      console.error(error);
    } else {
      if (response.statusCode === 200) {
        const movieData = JSON.parse(body);
        const movieTitle = movieData.title;
        console.log(`Movie Title: ${movieTitle}`);
      } else {
        console.error(`Error: ${response.statusCode} - ${response.statusMessage}`);
      }
    }
  });
}

// Usage: node getMovieTitle.js <movie-id>
const movieId = process.argv[2];

getMovieTitle(movieId);
