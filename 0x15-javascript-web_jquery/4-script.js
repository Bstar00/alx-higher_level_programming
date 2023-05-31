// Toggles the class of HTML tag 'HEADER' when user clicks the
// div#toggle_header tag

$(document).ready(function() {
  $('#toggle_header').click(function() {
    $('header').toggleClass('red green');
  });
});
