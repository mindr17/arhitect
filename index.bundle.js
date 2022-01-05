(()=>{var n={757:(n,t,e)=>{n.exports=e(666)},982:(n,t,e)=>{"use strict";e.d(t,{Z:()=>c});var r=e(81),o=e.n(r),i=e(645),a=e.n(i)()(o());a.push([n.id,"* {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  font-size: 20px;\n}\n.main {\n  display: flex;\n}\nbody {\n  font-family: \"GTEestiProText\", Arial, sans-serif;\n  text-decoration: none;\n}\nheader {\n  height: 240px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n.name {\n  font-weight: 700;\n  font-size: 18px;\n  letter-spacing: 2.5px;\n}\n.title {\n  margin: 30px;\n  font-family: 'Arial',Arial,sans-serif;\n  font-weight: 700;\n  font-size: 36px;\n}\n.contacts {\n  font-family: 'Roboto', Arial, sans-serif;\n  text-decoration: none;\n  font-size: 22px;\n}\n.contacts > div {\n  display: inline-block;\n}\n.gallery-wrapper {\n  display: flex;\n  padding-top:50px;\n  margin-top: -50px;\n  padding-bottom:50px;\n  margin-bottom:-50px;\n  overflow-x: hidden;\n  overflow-y: hidden;\n}\n.gallery {\n  display: flex;\n  flex-wrap: wrap;\n}\n.image-wrapper {\n  flex:max(213px, 100%/3);\n  display: flex;\n}\n@media (max-width: 500px) {\n  .image-wrapper {\n    flex:max(100% / 2);\n  }\n}\n\n\n/* .image-wrapper {\n  display: block;\n  display: flex;\n  width: 100%;\n  height: auto;\n  position: relative;\n  overflow: hidden;\n  padding: 34.37% 0 0 0;\n} */\n\n.image-href {\n  display: flex;\n  width: 100%;\n}\n/* .image {\n  display: block;\n  max-width: 100%;\n  max-height: 100%;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n} */\n\n.image {\n  width: 100%;\n  transition: transform 0.15s linear,-webkit-transform 0.15s linear;\n  aspect-ratio: 1 / 0.75;\n  object-fit: cover;\n  cursor: zoom-in;\n}\n\n\n.image:hover {\n  transform: scale(1.02);\n  box-shadow: 0px 5px 24px 5px rgba(0, 0, 0, 0.53);\n}\nfooter {\n  height: 172px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n.footer-icons {\n  display: flex;\n  padding: 5px;\n}\n.social-icon {\n  margin: 5px;\n}\n\n/* The Modal (background) */\n.modal {\n  display: none; /* Hidden by default */\n  position: fixed; /* Stay in place */\n  z-index: 1; /* Sit on top */\n  padding-top: 0;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  /* overflow: auto; */\n  /* max-height: 100vh; */\n  background-color: #fff; /* Fallback color */\n  overflow:hidden;\n  align-items: center;\n  justify-content: center;\n  /* padding: 20px; */\n}\n\n/* Modal Content (image) */\n.modal-content {\n  /* margin: auto; */\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: zoom-out;\n  max-height: 100vh;\n  max-width: 100vw;\n  /* width: 80%; */\n  /* width: 100vw; */\n  /* max-width: 700px; */\n}\n\n/* Caption of Modal Image */\n/* #caption {\n  margin: auto;\n  display: block;\n  text-align: center;\n  color: #ccc;\n  padding: 10px 0;\n  height: 150px;\n} */\n\n/* Add Animation */\n.modal-content, #caption {  \n  -webkit-animation-name: zoom;\n  -webkit-animation-duration: 0.6s;\n  animation-name: zoom;\n  animation-duration: 0.1s;\n}\n\n@-webkit-keyframes zoom {\n  from {-webkit-transform:scale(0)} \n  to {-webkit-transform:scale(1)}\n}\n\n@keyframes zoom {\n  from {transform:scale(0)} \n  to {transform:scale(1)}\n}\n\n.modal-content {\n  /* width: 100%; */\n}\n.is-open {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0;\n}\n\n/* 100% Image Width on Smaller Screens */\n/* @media only screen and (max-width: 700px){\n  .modal-content {\n    width: 100%;\n  }\n} */\n.move-right {\n  z-index: 4;\n  position: fixed;\n  display: flex;\n  right: 0;\n  height: 100vh;\n  width: 20vw;\n  cursor: pointer;\n  background: rgba(0, 0, 0, 0.3);\n  opacity: 0;\n  transition: 0.1s;\n  cursor: pointer;\n}\n.move-right:hover {\n  opacity: 1;\n}\n.move-left {\n  z-index: 4;\n  position: fixed;\n  display: flex; \n  left: 0;\n  height: 100vh;\n  width: 20vw;\n  /* background: red; */\n  cursor: pointer;\n  background: rgba(0, 0, 0, 0.3);\n  opacity: 0;\n  transition: 0.1s;\n}\n.move-left:hover {\n  opacity: 1;\n}\n\n.close {\n  z-index: 5;\n  position: fixed;\n  width: 50px;\n  height: 50px;\n  top: 30px;\n  right: 15px;\n  color: black;\n  /* background-color: rgba(255, 255, 255, 0.3); */\n  font-size: 80px;\n  font-weight: bold;\n  transition: 0.3s;\n}\n\n.close:hover,\n.close:focus {\n  color: #bbb;\n  text-decoration: none;\n  cursor: pointer;\n}",""]);const c=a},645:n=>{"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",r=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),r&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),r&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var u=0;u<n.length;u++){var l=[].concat(n[u]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},81:n=>{"use strict";n.exports=function(n){return n[1]}},666:n=>{var t=function(n){"use strict";var t,e=Object.prototype,r=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(n,t,e){return Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}),n[t]}try{s({},"")}catch(n){s=function(n,t,e){return n[t]=e}}function u(n,t,e,r){var o=t&&t.prototype instanceof g?t:g,i=Object.create(o.prototype),a=new M(r||[]);return i._invoke=function(n,t,e){var r=f;return function(o,i){if(r===p)throw new Error("Generator is already running");if(r===h){if("throw"===o)throw i;return q()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=S(a,e);if(c){if(c===m)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(r===f)throw r=h,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r=p;var s=l(n,t,e);if("normal"===s.type){if(r=e.done?h:d,s.arg===m)continue;return{value:s.arg,done:e.done}}"throw"===s.type&&(r=h,e.method="throw",e.arg=s.arg)}}}(n,e,a),i}function l(n,t,e){try{return{type:"normal",arg:n.call(t,e)}}catch(n){return{type:"throw",arg:n}}}n.wrap=u;var f="suspendedStart",d="suspendedYield",p="executing",h="completed",m={};function g(){}function y(){}function v(){}var x={};s(x,i,(function(){return this}));var w=Object.getPrototypeOf,b=w&&w(w(T([])));b&&b!==e&&r.call(b,i)&&(x=b);var L=v.prototype=g.prototype=Object.create(x);function k(n){["next","throw","return"].forEach((function(t){s(n,t,(function(n){return this._invoke(t,n)}))}))}function E(n,t){function e(o,i,a,c){var s=l(n[o],n,i);if("throw"!==s.type){var u=s.arg,f=u.value;return f&&"object"==typeof f&&r.call(f,"__await")?t.resolve(f.__await).then((function(n){e("next",n,a,c)}),(function(n){e("throw",n,a,c)})):t.resolve(f).then((function(n){u.value=n,a(u)}),(function(n){return e("throw",n,a,c)}))}c(s.arg)}var o;this._invoke=function(n,r){function i(){return new t((function(t,o){e(n,r,t,o)}))}return o=o?o.then(i,i):i()}}function S(n,e){var r=n.iterator[e.method];if(r===t){if(e.delegate=null,"throw"===e.method){if(n.iterator.return&&(e.method="return",e.arg=t,S(n,e),"throw"===e.method))return m;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=l(r,n.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,m;var i=o.arg;return i?i.done?(e[n.resultName]=i.value,e.next=n.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,m):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function N(n){var t={tryLoc:n[0]};1 in n&&(t.catchLoc=n[1]),2 in n&&(t.finallyLoc=n[2],t.afterLoc=n[3]),this.tryEntries.push(t)}function j(n){var t=n.completion||{};t.type="normal",delete t.arg,n.completion=t}function M(n){this.tryEntries=[{tryLoc:"root"}],n.forEach(N,this),this.reset(!0)}function T(n){if(n){var e=n[i];if(e)return e.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var o=-1,a=function e(){for(;++o<n.length;)if(r.call(n,o))return e.value=n[o],e.done=!1,e;return e.value=t,e.done=!0,e};return a.next=a}}return{next:q}}function q(){return{value:t,done:!0}}return y.prototype=v,s(L,"constructor",v),s(v,"constructor",y),y.displayName=s(v,c,"GeneratorFunction"),n.isGeneratorFunction=function(n){var t="function"==typeof n&&n.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},n.mark=function(n){return Object.setPrototypeOf?Object.setPrototypeOf(n,v):(n.__proto__=v,s(n,c,"GeneratorFunction")),n.prototype=Object.create(L),n},n.awrap=function(n){return{__await:n}},k(E.prototype),s(E.prototype,a,(function(){return this})),n.AsyncIterator=E,n.async=function(t,e,r,o,i){void 0===i&&(i=Promise);var a=new E(u(t,e,r,o),i);return n.isGeneratorFunction(e)?a:a.next().then((function(n){return n.done?n.value:a.next()}))},k(L),s(L,c,"Generator"),s(L,i,(function(){return this})),s(L,"toString",(function(){return"[object Generator]"})),n.keys=function(n){var t=[];for(var e in n)t.push(e);return t.reverse(),function e(){for(;t.length;){var r=t.pop();if(r in n)return e.value=r,e.done=!1,e}return e.done=!0,e}},n.values=T,M.prototype={constructor:M,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(j),!n)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var n=this.tryEntries[0].completion;if("throw"===n.type)throw n.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var e=this;function o(r,o){return c.type="throw",c.arg=n,e.next=r,o&&(e.method="next",e.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(n,t){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===n||"continue"===n)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=n,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(a)},complete:function(n,t){if("throw"===n.type)throw n.arg;return"break"===n.type||"continue"===n.type?this.next=n.arg:"return"===n.type?(this.rval=this.arg=n.arg,this.method="return",this.next="end"):"normal"===n.type&&t&&(this.next=t),m},finish:function(n){for(var t=this.tryEntries.length-1;t>=0;--t){var e=this.tryEntries[t];if(e.finallyLoc===n)return this.complete(e.completion,e.afterLoc),j(e),m}},catch:function(n){for(var t=this.tryEntries.length-1;t>=0;--t){var e=this.tryEntries[t];if(e.tryLoc===n){var r=e.completion;if("throw"===r.type){var o=r.arg;j(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(n,e,r){return this.delegate={iterator:T(n),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=t),m}},n}(n.exports);try{regeneratorRuntime=t}catch(n){"object"==typeof globalThis?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}},379:n=>{"use strict";var t=[];function e(n){for(var e=-1,r=0;r<t.length;r++)if(t[r].identifier===n){e=r;break}return e}function r(n,r){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],u=r.base?s[0]+r.base:s[0],l=i[u]||0,f="".concat(u," ").concat(l);i[u]=l+1;var d=e(f),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)t[d].references++,t[d].updater(p);else{var h=o(p,r);r.byIndex=c,t.splice(c,0,{identifier:f,updater:h,references:1})}a.push(f)}return a}function o(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=e(i[a]);t[c].references--}for(var s=r(n,o),u=0;u<i.length;u++){var l=e(i[u]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=s}}},569:n=>{"use strict";var t={};n.exports=function(n,e){var r=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},216:n=>{"use strict";n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},565:(n,t,e)=>{"use strict";n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},795:n=>{"use strict";n.exports=function(n){var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,o&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},589:n=>{"use strict";n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}}},t={};function e(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return n[r](i,i.exports,e),i.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})},e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),(()=>{"use strict";function n(n,t,e,r,o,i,a){try{var c=n[i](a),s=c.value}catch(n){return void e(n)}c.done?t(s):Promise.resolve(s).then(r,o)}function t(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,s,"next",t)}function s(t){n(a,o,i,c,s,"throw",t)}c(void 0)}))}}var r=e(757),o=e.n(r),i=e(379),a=e.n(i),c=e(795),s=e.n(c),u=e(569),l=e.n(u),f=e(565),d=e.n(f),p=e(216),h=e.n(p),m=e(589),g=e.n(m),y=e(982),v={};function x(){return x=t(o().mark((function n(){var e,r,i,a,c,s,u;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return u=function(){c.classList.remove("is-open"),document.getElementsByTagName("html")[0].style.overflow="scroll",document.documentElement.style.overflowX="hidden"},s=function(){c.classList.add("is-open"),document.getElementsByTagName("html")[0].style.overflow="hidden"},i=function(){return i=t(o().mark((function n(){var r,i,a,c;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:for((r=document.querySelector(".gallery")).innerHTML="",i=[],a=1;a<e+1;a++)i.push("img/".concat(a,".jpg"));c=0,i.forEach((function(n){++c,r.insertAdjacentHTML("beforeend",'\n        <div class="image-wrapper">\n        <img class="image" data-imgNum="'.concat(c,'" loading="lazy" id="img').concat(c,'" src="').concat(n,'">\n        </div>\n        '));var e=document.querySelector("#img".concat(c)),i=document.querySelector("#imgModal");e.addEventListener("click",function(){var n=t(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:s(),i.src=this.src,e=this.getAttribute("data-imgNum"),i.dataset.imgNum=e;case 4:case"end":return n.stop()}}),n,this)})));return function(t){return n.apply(this,arguments)}}())}));case 6:case"end":return n.stop()}}),n)}))),i.apply(this,arguments)},r=function(){return i.apply(this,arguments)},e=36,n.next=8,r();case 8:a=0,c=document.querySelector("#myModal"),document.querySelector(".close").addEventListener("click",function(){var n=t(o().mark((function n(t){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:u(),a=0;case 2:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()),document.querySelector("#imgModal").addEventListener("click",function(){var n=t(o().mark((function n(t){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:u(),a=0;case 2:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()),document.addEventListener("keydown",(function(n){if("ArrowRight"==n.code){var t=document.querySelector("#imgModal").dataset.imgNum;Number(t)+a<e&&a++,document.querySelector("#imgModal").src="https://raw.githubusercontent.com/mindr17/arhitect/main/img/".concat(Number(t)+a,".jpg")}if("ArrowLeft"==n.code){var r=document.querySelector("#imgModal").dataset.imgNum;Number(r)+a>1&&a--,document.querySelector("#imgModal").src="https://raw.githubusercontent.com/mindr17/arhitect/main/img/".concat(Number(r)+a,".jpg")}"Escape"==n.code&&(u(),a=0)})),document.querySelector(".move-right").addEventListener("click",(function(n){var t=document.querySelector("#imgModal").dataset.imgNum;Number(t)+a<e&&a++,document.querySelector("#imgModal").src="https://raw.githubusercontent.com/mindr17/arhitect/main/img/".concat(Number(t)+a,".jpg")})),document.querySelector(".move-left").addEventListener("click",(function(n){var t=document.querySelector("#imgModal").dataset.imgNum;Number(t)+a>1&&a--,document.querySelector("#imgModal").src="https://raw.githubusercontent.com/mindr17/arhitect/main/img/".concat(Number(t)+a,".jpg")}));case 16:case"end":return n.stop()}}),n)}))),x.apply(this,arguments)}v.styleTagTransform=g(),v.setAttributes=d(),v.insert=l().bind(null,"head"),v.domAPI=s(),v.insertStyleElement=h(),a()(y.Z,v),y.Z&&y.Z.locals&&y.Z.locals,function(){x.apply(this,arguments)}()})()})();