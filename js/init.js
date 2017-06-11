"use strict";

$(document).ready(function() {

var countries = ['United States', 'Canada', 'Argentina', 'Armenia'];
var cList = $('ul.mylist')
$.each(countries, function(i)
{
    var li = $('<li/>')
        .addClass('ui-menu-item')
        .attr('role', 'menuitem')
        .appendTo(cList);
    var aaa = $('<a/>')
        .addClass('ui-all')
        .text(countries[i])
        .appendTo(li);

});

    var list = '<ul>';
    for (var i = 0; i < 10; i++) {
        list += '<li>something</li>';
    }
    list += '</ul>';
    $('#details').append(list);

});




 