$(document).ready(function() {
    $('html').addClass('deep-gray');
    $('.btn-ok').on('click', function() {
        alert('Ok!');
        $('html').removeClass('deep-gray');
    });
});