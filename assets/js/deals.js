$(document).ready(function() {
    // default render
    render("#dealsTable", ".section-pending", JsonData.pending);

    $('.nav-tabs li a').on('click', function() {
        var el = $(this),
            sectionSelector = '.section-' + el.data('tab');

        // if empty
        if(!$.trim($(sectionSelector).html())) {
            render('#dealsTable', sectionSelector, JsonData[el.data('tab')])
        }
    });
});

function render(templateId, container, items) {
    var template = _.template($(templateId).html());
    $(container).html(template({items: items}));
}