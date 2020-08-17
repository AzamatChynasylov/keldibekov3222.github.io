
; /* Start:"a:4:{s:4:"full";s:85:"/local/components/ig/catalog-garden.detail/templates/.default/script.js?1591117864941";s:6:"source";s:71:"/local/components/ig/catalog-garden.detail/templates/.default/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
$(function(){
    // gtm ecommerce
    window.dataLayer = window.dataLayer || [];
    let products = $('.js-fcard').data('gtm-params');
    let impressions = [];
    let position = 1;
    $('.js-vcard').each(function() {
        params = $(this).data('gtm-params');
        params.position = position++;
        if(typeof listName !== undefined) listName = $('.fcard__title').text();
        params.list = listName;
        impressions.push(params);
    });

    dataLayer.push({
        'ecommerce': {
            'currencyCode': 'RUB',
            'detail': {
                'actionField': {'list': 'Детальная страница'},
                'products': products
            },
            'impressions': impressions
        },
        'event': 'gtm-ee-event',
        'gtm-ee-event-category': 'Enhanced Ecommerce',
        'gtm-ee-event-action': 'Product Details',
        'gtm-ee-event-non-interaction': 'True',
    });
});
/* End */
;; /* /local/components/ig/catalog-garden.detail/templates/.default/script.js?1591117864941*/
