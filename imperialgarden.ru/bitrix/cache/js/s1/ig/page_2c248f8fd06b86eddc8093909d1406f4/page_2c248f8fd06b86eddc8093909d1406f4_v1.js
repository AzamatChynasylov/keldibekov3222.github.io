
; /* Start:"a:4:{s:4:"full";s:77:"/local/components/ig/catalog.section/templates/garden/script.js?1590478486724";s:6:"source";s:63:"/local/components/ig/catalog.section/templates/garden/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
$(function(){
    // gtm ecommerce
    window.dataLayer = window.dataLayer || [];
    products = [];
    $('.js-icard').each(function() {
        products.push($(this).data('gtm-params'));
    });

    let i, j, tmpProducts, chunk = 10;
    for (i = 0, j = products.length; i < j; i += chunk) {
        tmpProducts = products.slice(i, i + chunk);

        dataLayer.push({
            'ecommerce': {
                'currencyCode': 'RUB',
                'impressions': tmpProducts
            },
            'event': 'gtm-ee-event',
            'gtm-ee-event-category': 'Enhanced Ecommerce',
            'gtm-ee-event-action': 'Product Impressions',
            'gtm-ee-event-non-interaction': 'True',
        });
    }
});
/* End */
;; /* /local/components/ig/catalog.section/templates/garden/script.js?1590478486724*/
