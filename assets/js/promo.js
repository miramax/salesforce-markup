$(document).ready(function() {
    $('html').addClass('gray');
    var sorting = {};

    render('#promoItem', '.promo-items', JsonData.promotions);

    $('#business_types, #product_types').on('change', function(e) {
        var bType = +$('#business_types').val(),
            pType = +$('#product_types').val(),
            items;

        // clean previous
        sorting = {};

        if(pType !== 1) {
            sorting.product_type = pType;
        }
        if(bType !== 1) {
            sorting.business_type = bType;
        }

        items = _.filter(JsonData.promotions, typeSorter);

        render('#promoItem', '.promo-items', items);
    });

    function typeSorter(item) {
        var key;

        for(key in sorting) {
            if ( typeof item.types[key] === 'undefined' ||
                 item.types[key] !== sorting[key] ) {
                return false;
            }
        }

        return item;
    }
});

function render(templateId, container, items) {
    var template = _.template($(templateId).html());
    $(container).html(template({items: items}));
}