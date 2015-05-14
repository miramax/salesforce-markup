$(document).ready(function() {
    $('html').addClass('gray');
    var sorting,
        ALL_OPTION = 'all';

    // paste default items
    render('#promoItem', '.promo-items', JsonData.promotions);
    appendOptions('#product_types', JsonData.selectOptions.product);
    appendOptions('#business_types', JsonData.selectOptions.business);

    $('#business_types, #product_types').on('change', function(e) {
        var bType = $('#business_types').val(),
            pType = $('#product_types').val(),
            items;

        // clean previous
        sorting = {};

        if(pType !== ALL_OPTION) {
            sorting.product_type = pType;
        }
        if(bType !== ALL_OPTION) {
            sorting.business_type = bType;
        }

        items = _.filter(JsonData.promotions, sortingMethod);

        render('#promoItem', '.promo-items', items);
    });

    function sortingMethod(item) {
        var key;

        for(key in sorting) {
            if ( typeof item[key] === 'undefined' ||
                 item[key] !== sorting[key] ) {
                return false;
            }
        }

        return item;
    }

    function appendOptions(container, items) {
        var template = _.template($('#selectOptions').html());
        $(container).append(template({items: items}));
    }
});

function render(templateId, container, items) {
    var template = _.template($(templateId).html());
    $(container).html(template({items: items}));
}