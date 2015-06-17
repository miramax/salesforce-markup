$(document).ready(function() {
    $('html').addClass('deep-gray');

    var template = _.template($('#resource').html()),
        container = $('.section-resources');

    container.append(template({items: JsonData.resources}));

    // click event
    $('.submitResources').on('click', function() {
        /**
         * ...
         * yours logic goes here
         * ...
         */

        alert('Submit Resources');
    });
});