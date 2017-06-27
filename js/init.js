"use strict";

$(document).ready(function() {

    $( "#target" ).on('click', function(e) {
        e.preventDefault();
        function addList(){
            var countries = ['United States', 'Canada', 'Argentina', 'Armenia'];
            var list =$('<ul/>')
                .addClass('list');
            $.each(countries, function(i)
            {
                var item = $('<li/>')
                    .addClass('list__item')
                    .attr('role', 'menuitem')
                    .appendTo(list);
                var link = $('<a/>')
                    .addClass('list__link')
                    .text(countries[i])
                    .appendTo(item);
            });
            $("div.mylist").append(list);
        };

    if ($('ul.list').length) {
        alert("Привет");
    } else {
        addList();
    }
    });
});



 