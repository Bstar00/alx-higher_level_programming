//Queries an API for wind speed in SF and replaces the text of the
//div#sf_wind_speed tag with the speed

$(document).ready(function() {
      let url = "https://fourtonfish.com/hellosalut/?lang=fr";

      $.getJSON(url, function(data) {
        let translation = data.hello;
        let helloDiv = $("#hello");
        helloDiv.text(translation);
      });
    });
