//Queries an API and fetches all movie titles and inserts them
//into the UL#list_movies tag

$(document).ready(function() {
      let url = "https://swapi-api.alx-tools.com/api/films/?format=json";

      $.getJSON(url, function(data) {
        let movies = data.results;
        let list = $("#list_movies");

        $.each(movies, function(index, movie) {
          list.append("<li>" + movie.title + "</li>");
        });
      });
    i});
