$(document).ready(function() {

    // paste content
    $('.black-header__title').html(JsonData.title);
    $('.black-header__util span').html(JsonData.util);
    $('.section-details').html(JsonData.details);
    $('.section-tc').html(JsonData.tc);
    render('#resource', '.section-resources', JsonData.resources);

    $('.nav-tabs li a').on('click', function() {
        var el = $(this);
        if(el.data('tab') === 'resources') {
            $('html').addClass('gray');
        } else {
            $('html').removeClass('gray');
        }
    });
});

function render(templateId, container, items) {
    var template = _.template($(templateId).html());
    $(container).html(template({items: items}));
}