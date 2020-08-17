
; /* Start:"a:4:{s:4:"full";s:81:"/local/components/ig/page.constructor/templates/.default/script.js?15877229331083";s:6:"source";s:66:"/local/components/ig/page.constructor/templates/.default/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
'use strict';let hoverGridCells=document.getElementsByClassName('js-grid-item-overlay');for(let cell of hoverGridCells){cell.addEventListener('mouseenter',()=>{let style=window.getComputedStyle(cell,null);let padding=parseFloat(style.paddingTop)+parseFloat(style.paddingBottom);let height=cell.offsetHeight-padding;let link=cell.getElementsByClassName('js-grid-item-link')[0]||undefined;console.log(height);console.log(link.offsetHeight);cell.classList.add('hover')});cell.addEventListener('mouseleave',()=>{cell.classList.remove('hover')})}
let sliderAwait=setInterval(function(){if(typeof tns==='function'){let sliders=document.getElementsByClassName('js-slider');if(sliders.length>0){for(let slider of sliders){let controls=getNextSibling(slider,'.js-slider-controls');let sliderObj=tns({container:slider,autoHeight:!0,mouseDrag:!0,controls:!1,navContainer:controls})}}
clearInterval(sliderAwait)}},100);let getNextSibling=function(node,selector){let sibling=node.nextElementSibling;while(sibling){if(sibling.matches(selector)){return sibling}
sibling=sibling.nextElementSibling}}
/* End */
;
; /* Start:"a:4:{s:4:"full";s:82:"/local/templates/ig/components/bitrix/form.result.new/row/script.js?15970779741620";s:6:"source";s:67:"/local/templates/ig/components/bitrix/form.result.new/row/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
'use strict';

function Form(selector) {
    this.selector = selector;
    this.forms = [];
    this.send = function (form) {
        if ($(selector).valid()) {
            let data = new FormData(form);
            let xhr = new XMLHttpRequest();
            xhr.open("POST", "/local/ajax/form_new.php");
            xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
            xhr.send(data);
            xhr.onreadystatechange = function () {
                if (this.readyState !== 4) {
                    return
                }
                let response = JSON.parse(this.responseText);
                if (response.result === 'success') {
                    form.innerHTML = response.string;
                    return
                }
                alert(response.error)
            }
        }
    };
    this.setEvents = function () {
        this.forms = document.querySelectorAll(this.selector);
        let self = this;
        this.forms.forEach(function (form) {
            if (form.addEventListener) {
                form.addEventListener('submit', function (e) {
                    e.preventDefault();
                    self.send(form);
                    return !1
                }, !0)
            } else {
                form.attachEvent('onsubmit', function (e) {
                    e.preventDefault();
                    self.send(form);
                    return !1
                })
            }
        })
    };
    this.setEvents();
    return this
}

document.addEventListener("DOMContentLoaded", function () {
    let form = new Form('.js-callback-form')
})

/* End */
;; /* /local/components/ig/page.constructor/templates/.default/script.js?15877229331083*/
; /* /local/templates/ig/components/bitrix/form.result.new/row/script.js?15970779741620*/
