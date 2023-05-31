//The scripts adds an Li element to the list when the div#add_item tag is clicked
//The new element must be <li>Item</li> and must be added to UL.my_list
//use the JQuery API

$(document).ready(function() {
  $('#add_item').click(function() {
    $('<li>').text('Item').appendTo('ul.my_list');
  });
});
