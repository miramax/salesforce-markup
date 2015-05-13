$(document).ready(function() {
    console.log('promo is loaded');
});

function render(templateId, container, items) {
    var template = _.template($(templateId).html());
    $(container).html(template({items: items}));
}