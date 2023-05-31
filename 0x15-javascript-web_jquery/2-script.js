//updates the text color of the <header> element to red (#FF0000) 
//when the user clicks on the tag DIV#red_header
//uses the JQuery API

$(function() {
  $('#red_header').click(function() {
    $('header').css('color', '#FF0000');
  });
});
