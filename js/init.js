"use strict";

$(document).ready(function() {

var countries = ['United States', 'Canada', 'Argentina', 'Armenia'];
var list =$('<ul/>');
$.each(countries, function(i)
{
    var li = $('<li/>')
        .addClass('ui-menu-item')
        .attr('role', 'menuitem')
        .appendTo(list);
    var aaa = $('<a/>')
        .addClass('ui-all')
        .text(countries[i])
        .appendTo(li);

});
    $("div.mylist").append(list);

});




 