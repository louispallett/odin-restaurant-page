(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>h});var r=t(81),o=t.n(r),a=t(645),i=t.n(a),c=t(667),s=t.n(c),d=new URL(t(740),t.b),l=new URL(t(324),t.b),u=i()(o()),p=s()(d),f=s()(l);u.push([e.id,`@font-face {\n    font-family: "NewFont";\n    src: url(${p}) format('woff2'),\n    url(${f}) format('woff');\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n}\n\n:root {\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n    height: 100%;\n}\n\n.header {\n    display: flex;\n    justify-content: space-between;\n    background-color: #159c15;\n    color: white;\n    font-weight: bold;\n    font-family: "NewFont";\n}\n\n.header > div {\n    display: flex;\n    flex-wrap: nowrap;\n}\n\n.header > div > img {\n    padding: 30px 20px;\n}\n\n.header > div:first-child > div {\n    max-width: 100px;\n}\n\n.header > div:first-child {\n    justify-content: center;\n    align-items: center;\n    font-size: 2rem;\n    letter-spacing: 8px;\n}\n\n.links {\n    padding: 20px 50px;\n    font-size: 1.5rem;\n    font-weight: bold;\n}\n\n.links > button {\n    background: none;\n\tcolor: inherit;\n\tborder: none;\n\tpadding: 5px 20px;\n\tfont: inherit;\n\tcursor: pointer;\n\toutline: inherit;\n    border-radius: 20px;\n}\n\n.links > button:hover {\n    background-color: rgb(128, 233, 128);;\n}\n\n.banner > img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    min-height: 100px;\n    max-height: 30vh;\n}\n\n.main {\n    background-color: #20ab20af;\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    padding: 50px 20px;\n\n}\n\n.desc-wrapper {\n    background-color:  rgb(255, 255, 255);\n    border-radius: 10px;\n    padding: 20px;\n}\n\n.desc {\n    /* font-family: "NewFont"; */\n    color: rgb(0, 0, 0);\n}\n\n#on-page {\n    /* content: url("./leaf.svg");*/\n    border-bottom: 2px solid white;\n}`,""]);const h=u},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=t(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var h=o(f,r);r.byIndex=c,n.splice(c,0,{identifier:u,updater:h,references:1})}i.push(u)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=r(e,o),d=0;d<a.length;d++){var l=t(a[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},324:(e,n,t)=>{e.exports=t.p+"eb79faf7f20cf1bc1626.woff"},740:(e,n,t)=>{e.exports=t.p+"192a53083ace21b0af74.woff2"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0;var r={};(()=>{t.d(r,{OO:()=>b,Te:()=>y,n5:()=>g});var e=t(379),n=t.n(e),o=t(795),a=t.n(o),i=t(569),c=t.n(i),s=t(565),d=t.n(s),l=t(216),u=t.n(l),p=t(589),f=t.n(p),h=t(426),m={};function v(){document.querySelector(".desc-wrapper").innerHTML='<p class="desc">Matcha Mondays specializes in all the delights which matcha has to offer! We offer lattes, teas, pastries bursting with matcha moose, and delicious cakes of all different sizes which will keep you coming back for more!</p>\n                    <p class="desc">Matcha is a very finely grounded green tea. Unlike green tea leaves, much more of the plant is taken when making matcha, and the grinding process releases more caffine (although still much less than coffee) and antidoxidants. Studies have linked matcha to promoting healthy livers and hearts and even aid in weight-loss (although we should stress, no matter how much matcha a piece of cake has, it is still a piece of cake!).</p>\n                    <p class="desc">Please use the links at the top to make a booking or to see how to get in contact with us.</p>',b.removeAttribute("id","on-page"),y.removeAttribute("id","on-page"),g.setAttribute("id","on-page")}m.styleTagTransform=f(),m.setAttributes=d(),m.insert=c().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=u(),n()(h.Z,m),h.Z&&h.Z.locals&&h.Z.locals,(()=>{const e=document.getElementById("content"),n=document.createElement("div");document.createElement("p"),n.classList.add("header"),n.innerHTML='<div>\n                            <img src="../src/icon.svg" alt="teapot" id="icon">\n                            <div>Matcha Mondays</div>\n                        </div>\n                        <div class="links">\n                            <button class="home">Home</button>\n                            <button class="bookings"">Bookings</button>\n                            <button class="contact">Contact Us</button>\n                        </div>',e.appendChild(n);const t=document.createElement("div");t.classList.add("banner"),e.appendChild(t),t.innerHTML='<img src="../src/banner.jpg" alt="">',e.appendChild(t);const r=document.createElement("div");r.classList.add("main"),r.innerHTML='<div class="desc-wrapper"></div>',e.appendChild(r)})();const g=document.querySelector(".home"),b=document.querySelector(".bookings"),y=document.querySelector(".contact");g.addEventListener("click",(()=>{v()})),b.addEventListener("click",(()=>{document.querySelector(".desc-wrapper").innerHTML="<div> Bookings page </div>",g.removeAttribute("id","on-page"),y.removeAttribute("id","on-page"),b.setAttribute("id","on-page")})),y.addEventListener("click",(()=>{document.querySelector(".desc-wrapper").innerHTML="<div> Contact page </div>",g.removeAttribute("id","on-page"),b.removeAttribute("id","on-page"),y.setAttribute("id","on-page")})),v()})()})();