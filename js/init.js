"use strict";

$(document).ready(function() {

var countries = ['United States', 'Canada', 'Argentina', 'Armenia'];
var cList = $('ul.mylist');
var list =$('<ul/>');
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


});




 