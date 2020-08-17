
; /* Start:"a:4:{s:4:"full";s:81:"/local/components/ig/page.constructor/templates/.default/script.js?15877229331083";s:6:"source";s:66:"/local/components/ig/page.constructor/templates/.default/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
'use strict';let hoverGridCells=document.getElementsByClassName('js-grid-item-overlay');for(let cell of hoverGridCells){cell.addEventListener('mouseenter',()=>{let style=window.getComputedStyle(cell,null);let padding=parseFloat(style.paddingTop)+parseFloat(style.paddingBottom);let height=cell.offsetHeight-padding;let link=cell.getElementsByClassName('js-grid-item-link')[0]||undefined;console.log(height);console.log(link.offsetHeight);cell.classList.add('hover')});cell.addEventListener('mouseleave',()=>{cell.classList.remove('hover')})}
let sliderAwait=setInterval(function(){if(typeof tns==='function'){let sliders=document.getElementsByClassName('js-slider');if(sliders.length>0){for(let slider of sliders){let controls=getNextSibling(slider,'.js-slider-controls');let sliderObj=tns({container:slider,autoHeight:!0,mouseDrag:!0,controls:!1,navContainer:controls})}}
clearInterval(sliderAwait)}},100);let getNextSibling=function(node,selector){let sibling=node.nextElementSibling;while(sibling){if(sibling.matches(selector)){return sibling}
sibling=sibling.nextElementSibling}}
/* End */
;; /* /local/components/ig/page.constructor/templates/.default/script.js?15877229331083*/
