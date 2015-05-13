$(document).ready(function() {

});

function render(templateId, container, items) {
    var template = _.template($(templateId).html());
    $(container).html(template({items: items}));
}