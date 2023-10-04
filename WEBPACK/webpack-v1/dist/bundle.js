(()=>{"use strict";var e={705:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var r="",t=void 0!==n[5];return n[4]&&(r+="@supports (".concat(n[4],") {")),n[2]&&(r+="@media ".concat(n[2]," {")),t&&(r+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),r+=e(n),t&&(r+="}"),n[2]&&(r+="}"),n[4]&&(r+="}"),r})).join("")},n.i=function(e,r,t,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(t)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);t&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),r&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=r):d[2]=r),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},738:e=>{e.exports=function(e){return e[1]}},313:(e,n,r)=>{r.d(n,{Z:()=>s});var t=r(738),o=r.n(t),a=r(705),i=r.n(a)()(o());i.push([e.id,".button {  \r\n    background-color: #4CAF50;  \r\n    border: none;  \r\n    color: white;  \r\n    padding: 15px 32px;  \r\n    text-align: center;  \r\n    text-decoration: none;  \r\n    display: inline-block;  \r\n    font-size: 16px;  \r\n    margin: 4px 2px;  \r\n    cursor: pointer;  \r\n}  \r\n \r\n#div1  \r\n{  \r\n    margin-left: 450px;  \r\n    margin-top: 30px;  \r\n    margin-right: 150px  \r\n} ",""]);const s=i},771:(e,n,r)=>{r.d(n,{Z:()=>s});var t=r(738),o=r.n(t),a=r(705),i=r.n(a)()(o());i.push([e.id,"#divred{  \r\n    border-bottom: 30px solid red;  \r\n    background-color: lightgrey;  \r\n    min-height: 150px;  \r\n}  \r\n \r\n#divblue{  \r\n    border-bottom: 30px solid blue;  \r\n    background-color: lightgrey;  \r\n    min-height: 150px;  \r\n}   ",""]);const s=i},379:e=>{var n=[];function r(e){for(var r=-1,t=0;t<n.length;t++)if(n[t].identifier===e){r=t;break}return r}function t(e,t){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],l=t.base?c[0]+t.base:c[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=r(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var v=o(f,t);t.byIndex=s,n.splice(s,0,{identifier:u,updater:v,references:1})}i.push(u)}return i}function o(e,n){var r=n.domAPI(n);return r.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;r.update(e=n)}else r.remove()}}e.exports=function(e,o){var a=t(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=r(a[i]);n[s].references--}for(var c=t(e,o),l=0;l<a.length;l++){var d=r(a[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=c}}},569:e=>{var n={};e.exports=function(e,r){var t=function(e){if(void 0===n[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}n[e]=r}return n[e]}(e);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,r)=>{e.exports=function(e){var n=r.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(r){!function(e,n,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,o&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(t,e,n.options)}(n,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function r(t){var o=n[t];if(void 0!==o)return o.exports;var a=n[t]={id:t,exports:{}};return e[t](a,a.exports,r),a.exports}r.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return r.d(n,{a:n}),n},r.d=(e,n)=>{for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e=document.getElementById("divred"),n=document.getElementById("divblue"),t=document.getElementById("btnToggle"),o=r(379),a=r.n(o),i=r(795),s=r.n(i),c=r(569),l=r.n(c),d=r(565),u=r.n(d),p=r(216),f=r.n(p),v=r(589),m=r.n(v),y=r(313),h={};h.styleTagTransform=m(),h.setAttributes=u(),h.insert=l().bind(null,"head"),h.domAPI=s(),h.insertStyleElement=f(),a()(y.Z,h),y.Z&&y.Z.locals&&y.Z.locals;var g=r(771),b={};b.styleTagTransform=m(),b.setAttributes=u(),b.insert=l().bind(null,"head"),b.domAPI=s(),b.insertStyleElement=f(),a()(g.Z,b),g.Z&&g.Z.locals&&g.Z.locals;let x="divred";e.style.display="none",t.addEventListener("click",(function(){console.log(x),"divblue"==x?(x="divred",n.style.display="block",e.style.display="none"):"divred"==x&&(x="divblue",n.style.display="none",e.style.display="block")}))})()})();