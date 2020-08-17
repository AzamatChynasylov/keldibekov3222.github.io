
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
;
; /* Start:"a:4:{s:4:"full";s:96:"/local/templates/ig/components/bitrix/catalog.products.viewed/detail/script.min.js?1591092389912";s:6:"source";s:78:"/local/templates/ig/components/bitrix/catalog.products.viewed/detail/script.js";s:3:"min";s:82:"/local/templates/ig/components/bitrix/catalog.products.viewed/detail/script.min.js";s:3:"map";s:82:"/local/templates/ig/components/bitrix/catalog.products.viewed/detail/script.map.js";}"*/
(function(){"use strict";if(!!window.JCCatalogProductsViewedComponent)return;window.JCCatalogProductsViewedComponent=function(t){this.container=document.querySelector('[data-entity="'+t.container+'"]');if(t.initiallyShowHeader){BX.ready(BX.delegate(this.showHeader,this))}};window.JCCatalogProductsViewedComponent.prototype={showHeader:function(t){var e=BX.findParent(this.container,{attr:{"data-entity":"parent-container"}}),i;if(e&&BX.type.isDomNode(e)){i=e.querySelector('[data-entity="header"]');if(i&&i.getAttribute("data-showed")!="true"){i.style.display="";if(t){new BX.easing({duration:2e3,start:{opacity:0},finish:{opacity:100},transition:BX.easing.makeEaseOut(BX.easing.transitions.quad),step:function(t){i.style.opacity=t.opacity/100},complete:function(){i.removeAttribute("style");i.setAttribute("data-showed","true")}}).animate()}else{i.style.opacity=100}}}}}})();
/* End */
;; /* /local/components/ig/catalog-garden.detail/templates/.default/script.js?1591117864941*/
; /* /local/templates/ig/components/bitrix/catalog.products.viewed/detail/script.min.js?1591092389912*/

//# sourceMappingURL=page_df66e6a7ad037ab5121a45927037d0c8.map.js