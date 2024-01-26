(()=>{"use strict";var n,e,t,r,o,a,i,c,s,p,u,l,d,f,v={28:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,"body {\n    margin: 25px auto;\n    max-width: 85vw;\n}\n\n.top {\n    display: flex;\n    align-items: center;\n}\n\n.about {\n    display: flex;\n    flex-direction: column;\n    padding: 8px;\n    font-size: 32px;\n}\n\n.about-me-title {\n    font-size: 2em;\n}\n\n/* .about-me-text {\n\n} */\n\n.about-me-icons {\n    display: flex;\n    justify-content: flex-end;\n    gap: 20px;\n}\n\n.navigation {\n    height: 35px;\n}\n\n/* .project-links {\n    height: 15px;\n} */\n\n.projects {\n    display: flex;\n    justify-content: space-between;\n    gap: 20px;\n    flex-wrap: wrap;\n}\n\n.panel {\n    max-width: 400px;\n    box-shadow: black 0px 3px 8px;\n}\n\n.project-header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between\n}\n\n.project-title {\n    font-size: 24px;\n    margin: 10px 0px;\n}\n\n.project-navigation {\n    height: 24px;\n}\n\n.project-text {\n    margin: 8px 16px 24px 16px;\n}",""]);const c=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var p=0;p<n.length;p++){var u=[].concat(n[p]);r&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),e.push(u))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],p=r.base?s[0]+r.base:s[0],u=a[p]||0,l="".concat(p," ").concat(u);a[p]=u+1;var d=t(l),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)e[d].references++,e[d].updater(f);else{var v=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:l,updater:v,references:1})}i.push(l)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=r(n,o),p=0;p<a.length;p++){var u=t(a[p]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},m={};function x(n){var e=m[n];if(void 0!==e)return e.exports;var t=m[n]={id:n,exports:{}};return v[n](t,t.exports,x),t.exports}x.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return x.d(e,{a:e}),e},x.d=(n,e)=>{for(var t in e)x.o(e,t)&&!x.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},x.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),x.nc=void 0,n=x(379),e=x.n(n),t=x(795),r=x.n(t),o=x(569),a=x.n(o),i=x(565),c=x.n(i),s=x(216),p=x.n(s),u=x(589),l=x.n(u),d=x(28),(f={}).styleTagTransform=l(),f.setAttributes=c(),f.insert=a().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=p(),e()(d.Z,f),d.Z&&d.Z.locals&&d.Z.locals,console.log("hello webpack and run build")})();