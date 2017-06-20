"use strict";

$(document).ready(function() {

    $( "#target" ).on('click', function(e) {
        e.preventDefault();

        var countries = ['United States', 'Canada', 'Argentina', 'Armenia'];
        var list =$('<ul/>');
        $.each(countries, function(i)
        {
            var item = $('<li/>')
                .addClass('ui-menu-item')
                .attr('role', 'menuitem')
                .appendTo(list);
            var link = $('<a/>')
                .addClass('ui-all')
                .text(countries[i])
                .appendTo(item);
        });
        $("div.mylist").append(list);
    });
});



 