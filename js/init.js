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


    $( "#target" ).on('click', function(e) {
        e.preventDefault();
        $("div.mylist").append(list);
    });

});



 