!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=9)}([function(e,t,n){(function(t,n){!function(){"use strict";function r(e,t,n,r,o,i){return{tag:e,key:t,attrs:n,children:r,text:o,dom:i,domSize:void 0,state:void 0,_state:void 0,events:void 0,instance:void 0,skip:!1}}r.normalize=function(e){return Array.isArray(e)?r("[",void 0,void 0,r.normalizeChildren(e),void 0,void 0):null!=e&&"object"!=typeof e?r("#",void 0,void 0,!1===e?"":e,void 0,void 0):e},r.normalizeChildren=function(e){for(var t=0;t<e.length;t++)e[t]=r.normalize(e[t]);return e};var o=/(?:(^|#|\.)([^#\.\[\]]+))|(\[(.+?)(?:\s*=\s*("|'|)((?:\\["'\]]|.)*?)\5)?\])/g,i={},a={}.hasOwnProperty;function l(e){for(var t in e)if(a.call(e,t))return!1;return!0}function s(e){var t,n=arguments[1],s=2;if(null==e||"string"!=typeof e&&"function"!=typeof e&&"function"!=typeof e.view)throw Error("The selector must be either a string or a component.");if("string"==typeof e)var u=i[e]||function(e){for(var t,n="div",r=[],a={};t=o.exec(e);){var l=t[1],s=t[2];if(""===l&&""!==s)n=s;else if("#"===l)a.id=s;else if("."===l)r.push(s);else if("["===t[3][0]){var u=t[6];u&&(u=u.replace(/\\(["'])/g,"$1").replace(/\\\\/g,"\\")),"class"===t[4]?r.push(u):a[t[4]]=""===u?u:u||!0}}return r.length>0&&(a.className=r.join(" ")),i[e]={tag:n,attrs:a}}(e);if(null==n?n={}:("object"!=typeof n||null!=n.tag||Array.isArray(n))&&(n={},s=1),arguments.length===s+1)t=arguments[s],Array.isArray(t)||(t=[t]);else for(t=[];s<arguments.length;)t.push(arguments[s++]);var c=r.normalizeChildren(t);return"string"==typeof e?function(e,t,n){var o,i,s=!1,u=t.className||t.class;if(!l(e.attrs)&&!l(t)){var c={};for(var f in t)a.call(t,f)&&(c[f]=t[f]);t=c}for(var f in e.attrs)a.call(e.attrs,f)&&(t[f]=e.attrs[f]);for(var f in void 0!==u&&(void 0!==t.class&&(t.class=void 0,t.className=u),null!=e.attrs.className&&(t.className=e.attrs.className+" "+u)),t)if(a.call(t,f)&&"key"!==f){s=!0;break}return Array.isArray(n)&&1===n.length&&null!=n[0]&&"#"===n[0].tag?i=n[0].children:o=n,r(e.tag,t.key,s?t:void 0,o,i)}(u,n,c):r(e,n.key,n,c)}s.trust=function(e){return null==e&&(e=""),r("<",void 0,void 0,e,void 0,void 0)},s.fragment=function(e,t){return r("[",e.key,e,r.normalizeChildren(t),void 0,void 0)};var u=s;if((c=function(e){if(!(this instanceof c))throw new Error("Promise must be called with `new`");if("function"!=typeof e)throw new TypeError("executor must be a function");var n=this,r=[],o=[],i=u(r,!0),a=u(o,!1),l=n._instance={resolvers:r,rejectors:o},s="function"==typeof t?t:setTimeout;function u(e,t){return function i(u){var c;try{if(!t||null==u||"object"!=typeof u&&"function"!=typeof u||"function"!=typeof(c=u.then))s(function(){t||0!==e.length||console.error("Possible unhandled promise rejection:",u);for(var n=0;n<e.length;n++)e[n](u);r.length=0,o.length=0,l.state=t,l.retry=function(){i(u)}});else{if(u===n)throw new TypeError("Promise can't be resolved w/ itself");f(c.bind(u))}}catch(e){a(e)}}}function f(e){var t=0;function n(e){return function(n){t++>0||e(n)}}var r=n(a);try{e(n(i),r)}catch(e){r(e)}}f(e)}).prototype.then=function(e,t){var n,r,o=this._instance;function i(e,t,i,a){t.push(function(t){if("function"!=typeof e)i(t);else try{n(e(t))}catch(e){r&&r(e)}}),"function"==typeof o.retry&&a===o.state&&o.retry()}var a=new c(function(e,t){n=e,r=t});return i(e,o.resolvers,n,!0),i(t,o.rejectors,r,!1),a},c.prototype.catch=function(e){return this.then(null,e)},c.resolve=function(e){return e instanceof c?e:new c(function(t){t(e)})},c.reject=function(e){return new c(function(t,n){n(e)})},c.all=function(e){return new c(function(t,n){var r=e.length,o=0,i=[];if(0===e.length)t([]);else for(var a=0;a<e.length;a++)!function(a){function l(e){o++,i[a]=e,o===r&&t(i)}null==e[a]||"object"!=typeof e[a]&&"function"!=typeof e[a]||"function"!=typeof e[a].then?l(e[a]):e[a].then(l,n)}(a)})},c.race=function(e){return new c(function(t,n){for(var r=0;r<e.length;r++)e[r].then(t,n)})},"undefined"!=typeof window){void 0===window.Promise&&(window.Promise=c);var c=window.Promise}else if(void 0!==n){void 0===n.Promise&&(n.Promise=c);c=n.Promise}var f=function(e){if("[object Object]"!==Object.prototype.toString.call(e))return"";var t=[];for(var n in e)r(n,e[n]);return t.join("&");function r(e,n){if(Array.isArray(n))for(var o=0;o<n.length;o++)r(e+"["+o+"]",n[o]);else if("[object Object]"===Object.prototype.toString.call(n))for(var o in n)r(e+"["+o+"]",n[o]);else t.push(encodeURIComponent(e)+(null!=n&&""!==n?"="+encodeURIComponent(n):""))}},d=new RegExp("^file://","i"),h=function(e,t){var n,r=0;function o(){var e=0;function t(){0==--e&&"function"==typeof n&&n()}return function n(r){var o=r.then;return r.then=function(){e++;var i=o.apply(r,arguments);return i.then(t,function(n){if(t(),0===e)throw n}),n(i)},r}}function i(e,t){if("string"==typeof e){var n=e;null==(e=t||{}).url&&(e.url=n)}return e}function a(e,t){if(null==t)return e;for(var n=e.match(/:[^\/]+/gi)||[],r=0;r<n.length;r++){var o=n[r].slice(1);null!=t[o]&&(e=e.replace(n[r],t[o]))}return e}function l(e,t){var n=f(t);return""!==n&&(e+=(e.indexOf("?")<0?"?":"&")+n),e}function s(e){try{return""!==e?JSON.parse(e):null}catch(t){throw new Error(e)}}function u(e){return e.responseText}function c(e,t){if("function"==typeof e){if(!Array.isArray(t))return new e(t);for(var n=0;n<t.length;n++)t[n]=new e(t[n])}return t}return{request:function(n,r){var f=o();n=i(n,r);var h=new t(function(t,r){null==n.method&&(n.method="GET"),n.method=n.method.toUpperCase();var o="GET"!==n.method&&"TRACE"!==n.method&&("boolean"!=typeof n.useBody||n.useBody);"function"!=typeof n.serialize&&(n.serialize="undefined"!=typeof FormData&&n.data instanceof FormData?function(e){return e}:JSON.stringify),"function"!=typeof n.deserialize&&(n.deserialize=s),"function"!=typeof n.extract&&(n.extract=u),n.url=a(n.url,n.data),o?n.data=n.serialize(n.data):n.url=l(n.url,n.data);var i=new e.XMLHttpRequest,f=!1,h=i.abort;for(var m in i.abort=function(){f=!0,h.call(i)},i.open(n.method,n.url,"boolean"!=typeof n.async||n.async,"string"==typeof n.user?n.user:void 0,"string"==typeof n.password?n.password:void 0),n.serialize!==JSON.stringify||!o||n.headers&&n.headers.hasOwnProperty("Content-Type")||i.setRequestHeader("Content-Type","application/json; charset=utf-8"),n.deserialize!==s||n.headers&&n.headers.hasOwnProperty("Accept")||i.setRequestHeader("Accept","application/json, text/*"),n.withCredentials&&(i.withCredentials=n.withCredentials),n.headers)({}).hasOwnProperty.call(n.headers,m)&&i.setRequestHeader(m,n.headers[m]);"function"==typeof n.config&&(i=n.config(i,n)||i),i.onreadystatechange=function(){if(!f&&4===i.readyState)try{var e=n.extract!==u?n.extract(i,n):n.deserialize(n.extract(i,n));if(i.status>=200&&i.status<300||304===i.status||d.test(n.url))t(c(n.type,e));else{var o=new Error(i.responseText);for(var a in e)o[a]=e[a];r(o)}}catch(e){r(e)}},o&&null!=n.data?i.send(n.data):i.send()});return!0===n.background?h:f(h)},jsonp:function(n,s){var u=o();n=i(n,s);var f=new t(function(t,o){var i=n.callbackName||"_mithril_"+Math.round(1e16*Math.random())+"_"+r++,s=e.document.createElement("script");e[i]=function(r){s.parentNode.removeChild(s),t(c(n.type,r)),delete e[i]},s.onerror=function(){s.parentNode.removeChild(s),o(new Error("JSONP request failed")),delete e[i]},null==n.data&&(n.data={}),n.url=a(n.url,n.data),n.data[n.callbackKey||"callback"]=i,s.src=l(n.url,n.data),e.document.documentElement.appendChild(s)});return!0===n.background?f:u(f)},setCompletionCallback:function(e){n=e}}}(window,c),m=function(e){var t,n=e.document,o=n.createDocumentFragment(),i={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"};function a(e){return e.attrs&&e.attrs.xmlns||i[e.tag]}function l(e,t,n,r,o,i,a){for(var l=n;l<r;l++){var u=t[l];null!=u&&s(e,u,o,a,i)}}function s(e,t,i,f,d){var h=t.tag;if("string"!=typeof h)return function(e,t,n,r,i){if(c(t,n),null!=t.instance){var a=s(e,t.instance,n,r,i);return t.dom=t.instance.dom,t.domSize=null!=t.dom?t.instance.domSize:0,v(e,a,i),a}return t.domSize=0,o}(e,t,i,f,d);switch(t.state={},null!=t.attrs&&E(t.attrs,t,i),h){case"#":return function(e,t,r){return t.dom=n.createTextNode(t.children),v(e,t.dom,r),t.dom}(e,t,d);case"<":return u(e,t,d);case"[":return function(e,t,r,o,i){var a=n.createDocumentFragment();if(null!=t.children){var s=t.children;l(a,s,0,s.length,r,null,o)}return t.dom=a.firstChild,t.domSize=a.childNodes.length,v(e,a,i),a}(e,t,i,f,d);default:return function(e,t,o,i,s){var u=t.tag,c=t.attrs,f=c&&c.is,d=(i=a(t)||i)?f?n.createElementNS(i,u,{is:f}):n.createElementNS(i,u):f?n.createElement(u,{is:f}):n.createElement(u);t.dom=d,null!=c&&function(e,t,n){for(var r in t)x(e,r,null,t[r],n)}(t,c,i);if(v(e,d,s),null!=t.attrs&&null!=t.attrs.contenteditable)g(t);else if(null!=t.text&&(""!==t.text?d.textContent=t.text:t.children=[r("#",void 0,void 0,t.text,void 0,void 0)]),null!=t.children){var h=t.children;l(d,h,0,h.length,o,null,i),function(e){var t=e.attrs;"select"===e.tag&&null!=t&&("value"in t&&x(e,"value",null,t.value,void 0),"selectedIndex"in t&&x(e,"selectedIndex",null,t.selectedIndex,void 0))}(t)}return d}(e,t,i,f,d)}}function u(e,t,r){var o={caption:"table",thead:"table",tbody:"table",tfoot:"table",tr:"tbody",th:"tr",td:"tr",colgroup:"table",col:"colgroup"}[(t.children.match(/^\s*?<(\w+)/im)||[])[1]]||"div",i=n.createElement(o);i.innerHTML=t.children,t.dom=i.firstChild,t.domSize=i.childNodes.length;for(var a,l=n.createDocumentFragment();a=i.firstChild;)l.appendChild(a);return v(e,l,r),l}function c(e,t){var n;if("function"==typeof e.tag.view){if(e.state=Object.create(e.tag),null!=(n=e.state.view).$$reentrantLock$$)return o;n.$$reentrantLock$$=!0}else{if(e.state=void 0,null!=(n=e.tag).$$reentrantLock$$)return o;n.$$reentrantLock$$=!0,e.state=null!=e.tag.prototype&&"function"==typeof e.tag.prototype.view?new e.tag(e):e.tag(e)}if(e._state=e.state,null!=e.attrs&&E(e.attrs,e,t),E(e._state,e,t),e.instance=r.normalize(e._state.view.call(e.state,e)),e.instance===e)throw Error("A view cannot return the vnode it received as argument");n.$$reentrantLock$$=null}function f(e,t,n,r,o,i,a){if(t!==n&&(null!=t||null!=n))if(null==t)l(e,n,0,n.length,o,i,a);else if(null==n)y(t,0,t.length,n);else{if(t.length===n.length){for(var u=!1,c=0;c<n.length;c++)if(null!=n[c]&&null!=t[c]){u=null==n[c].key&&null==t[c].key;break}if(u){for(c=0;c<t.length;c++)t[c]!==n[c]&&(null==t[c]&&null!=n[c]?s(e,n[c],o,a,p(t,c+1,i)):null==n[c]?y(t,c,c+1,n):d(e,t[c],n[c],o,p(t,c+1,i),r,a));return}}if(r=r||function(e,t){if(null!=e.pool&&Math.abs(e.pool.length-t.length)<=Math.abs(e.length-t.length)){var n=e[0]&&e[0].children&&e[0].children.length||0,r=e.pool[0]&&e.pool[0].children&&e.pool[0].children.length||0,o=t[0]&&t[0].children&&t[0].children.length||0;if(Math.abs(r-o)<=Math.abs(n-o))return!0}return!1}(t,n)){var f=t.pool;t=t.concat(t.pool)}for(var g,w=0,b=0,x=t.length-1,k=n.length-1;x>=w&&k>=b;){if((E=t[w])!==(C=n[b])||r)if(null==E)w++;else if(null==C)b++;else if(E.key===C.key){var T=null!=f&&w>=t.length-f.length||null==f&&r;b++,d(e,E,C,o,p(t,++w,i),T,a),r&&E.tag===C.tag&&v(e,m(E),i)}else{if((E=t[x])!==C||r)if(null==E)x--;else if(null==C)b++;else{if(E.key!==C.key)break;T=null!=f&&x>=t.length-f.length||null==f&&r;d(e,E,C,o,p(t,x+1,i),T,a),(r||b<k)&&v(e,m(E),p(t,w,i)),x--,b++}else x--,b++}else w++,b++}for(;x>=w&&k>=b;){var E,C;if((E=t[x])!==(C=n[k])||r)if(null==E)x--;else if(null==C)k--;else if(E.key===C.key){T=null!=f&&x>=t.length-f.length||null==f&&r;d(e,E,C,o,p(t,x+1,i),T,a),r&&E.tag===C.tag&&v(e,m(E),i),null!=E.dom&&(i=E.dom),x--,k--}else{if(g||(g=h(t,x)),null!=C){var S=g[C.key];if(null!=S){var I=t[S];T=null!=f&&S>=t.length-f.length||null==f&&r;d(e,I,C,o,p(t,x+1,i),r,a),v(e,m(I),i),t[S].skip=!0,null!=I.dom&&(i=I.dom)}else{i=s(e,C,o,a,i)}}k--}else x--,k--;if(k<b)break}l(e,n,b,k+1,o,i,a),y(t,w,x+1,n)}}function d(e,t,n,o,i,l,h){var p=t.tag;if(p===n.tag){if(n.state=t.state,n._state=t._state,n.events=t.events,!l&&function(e,t){var n,r;null!=e.attrs&&"function"==typeof e.attrs.onbeforeupdate&&(n=e.attrs.onbeforeupdate.call(e.state,e,t));"string"!=typeof e.tag&&"function"==typeof e._state.onbeforeupdate&&(r=e._state.onbeforeupdate.call(e.state,e,t));if(!(void 0===n&&void 0===r||n||r))return e.dom=t.dom,e.domSize=t.domSize,e.instance=t.instance,!0;return!1}(n,t))return;if("string"==typeof p)switch(null!=n.attrs&&(l?(n.state={},E(n.attrs,n,o)):C(n.attrs,n,o)),p){case"#":!function(e,t){e.children.toString()!==t.children.toString()&&(e.dom.nodeValue=t.children);t.dom=e.dom}(t,n);break;case"<":!function(e,t,n,r){t.children!==n.children?(m(t),u(e,n,r)):(n.dom=t.dom,n.domSize=t.domSize)}(e,t,n,i);break;case"[":!function(e,t,n,r,o,i,a){f(e,t.children,n.children,r,o,i,a);var l=0,s=n.children;if(n.dom=null,null!=s){for(var u=0;u<s.length;u++){var c=s[u];null!=c&&null!=c.dom&&(null==n.dom&&(n.dom=c.dom),l+=c.domSize||1)}1!==l&&(n.domSize=l)}}(e,t,n,l,o,i,h);break;default:!function(e,t,n,o,i){var l=t.dom=e.dom;i=a(t)||i,"textarea"===t.tag&&(null==t.attrs&&(t.attrs={}),null!=t.text&&(t.attrs.value=t.text,t.text=void 0));(function(e,t,n,r){if(null!=n)for(var o in n)x(e,o,t&&t[o],n[o],r);if(null!=t)for(var o in t)null!=n&&o in n||("className"===o&&(o="class"),"o"!==o[0]||"n"!==o[1]||k(o)?"key"!==o&&e.dom.removeAttribute(o):T(e,o,void 0))})(t,e.attrs,t.attrs,i),null!=t.attrs&&null!=t.attrs.contenteditable?g(t):null!=e.text&&null!=t.text&&""!==t.text?e.text.toString()!==t.text.toString()&&(e.dom.firstChild.nodeValue=t.text):(null!=e.text&&(e.children=[r("#",void 0,void 0,e.text,void 0,e.dom.firstChild)]),null!=t.text&&(t.children=[r("#",void 0,void 0,t.text,void 0,void 0)]),f(l,e.children,t.children,n,o,null,i))}(t,n,l,o,h)}else!function(e,t,n,o,i,a,l){if(a)c(n,o);else{if(n.instance=r.normalize(n._state.view.call(n.state,n)),n.instance===n)throw Error("A view cannot return the vnode it received as argument");null!=n.attrs&&C(n.attrs,n,o),C(n._state,n,o)}null!=n.instance?(null==t.instance?s(e,n.instance,o,l,i):d(e,t.instance,n.instance,o,i,a,l),n.dom=n.instance.dom,n.domSize=n.instance.domSize):null!=t.instance?(w(t.instance,null),n.dom=void 0,n.domSize=0):(n.dom=t.dom,n.domSize=t.domSize)}(e,t,n,o,i,l,h)}else w(t,null),s(e,n,o,h,i)}function h(e,t){var n={},r=0;for(r=0;r<t;r++){var o=e[r];if(null!=o){var i=o.key;null!=i&&(n[i]=r)}}return n}function m(e){var t=e.domSize;if(null!=t||null==e.dom){var r=n.createDocumentFragment();if(t>0){for(var o=e.dom;--t;)r.appendChild(o.nextSibling);r.insertBefore(o,r.firstChild)}return r}return e.dom}function p(e,t,n){for(;t<e.length;t++)if(null!=e[t]&&null!=e[t].dom)return e[t].dom;return n}function v(e,t,n){n&&n.parentNode?e.insertBefore(t,n):e.appendChild(t)}function g(e){var t=e.children;if(null!=t&&1===t.length&&"<"===t[0].tag){var n=t[0].children;e.dom.innerHTML!==n&&(e.dom.innerHTML=n)}else if(null!=e.text||null!=t&&0!==t.length)throw new Error("Child node of a contenteditable must be trusted")}function y(e,t,n,r){for(var o=t;o<n;o++){var i=e[o];null!=i&&(i.skip?i.skip=!1:w(i,r))}}function w(e,t){var n,r=1,o=0;e.attrs&&"function"==typeof e.attrs.onbeforeremove&&(null!=(n=e.attrs.onbeforeremove.call(e.state,e))&&"function"==typeof n.then&&(r++,n.then(i,i)));"string"!=typeof e.tag&&"function"==typeof e._state.onbeforeremove&&(null!=(n=e._state.onbeforeremove.call(e.state,e))&&"function"==typeof n.then&&(r++,n.then(i,i)));function i(){if(++o===r&&(function e(t){t.attrs&&"function"==typeof t.attrs.onremove&&t.attrs.onremove.call(t.state,t);if("string"!=typeof t.tag)"function"==typeof t._state.onremove&&t._state.onremove.call(t.state,t),null!=t.instance&&e(t.instance);else{var n=t.children;if(Array.isArray(n))for(var r=0;r<n.length;r++){var o=n[r];null!=o&&e(o)}}}(e),e.dom)){var n=e.domSize||1;if(n>1)for(var i=e.dom;--n;)b(i.nextSibling);b(e.dom),null==t||null!=e.domSize||null!=(a=e.attrs)&&(a.oncreate||a.onupdate||a.onbeforeremove||a.onremove)||"string"!=typeof e.tag||(t.pool?t.pool.push(e):t.pool=[e])}var a}i()}function b(e){var t=e.parentNode;null!=t&&t.removeChild(e)}function x(e,t,r,o,i){var a=e.dom;if("key"!==t&&"is"!==t&&(r!==o||function(e,t){return"value"===t||"checked"===t||"selectedIndex"===t||"selected"===t&&e.dom===n.activeElement}(e,t)||"object"==typeof o)&&void 0!==o&&!k(t)){var l,s=t.indexOf(":");if(s>-1&&"xlink"===t.substr(0,s))a.setAttributeNS("http://www.w3.org/1999/xlink",t.slice(s+1),o);else if("o"===t[0]&&"n"===t[1]&&"function"==typeof o)T(e,t,o);else if("style"===t)!function(e,t,n){t===n&&(e.style.cssText="",t=null);if(null==n)e.style.cssText="";else if("string"==typeof n)e.style.cssText=n;else{for(var r in"string"==typeof t&&(e.style.cssText=""),n)e.style[r]=n[r];if(null!=t&&"string"!=typeof t)for(var r in t)r in n||(e.style[r]="")}}(a,r,o);else if(t in a&&("href"!==(l=t)&&"list"!==l&&"form"!==l&&"width"!==l&&"height"!==l)&&void 0===i&&!function(e){return e.attrs.is||e.tag.indexOf("-")>-1}(e)){if("value"===t){var u=""+o;if(("input"===e.tag||"textarea"===e.tag)&&e.dom.value===u&&e.dom===n.activeElement)return;if("select"===e.tag)if(null===o){if(-1===e.dom.selectedIndex&&e.dom===n.activeElement)return}else if(null!==r&&e.dom.value===u&&e.dom===n.activeElement)return;if("option"===e.tag&&null!=r&&e.dom.value===u)return}if("input"===e.tag&&"type"===t)return void a.setAttribute(t,o);a[t]=o}else"boolean"==typeof o?o?a.setAttribute(t,""):a.removeAttribute(t):a.setAttribute("className"===t?"class":t,o)}}function k(e){return"oninit"===e||"oncreate"===e||"onupdate"===e||"onremove"===e||"onbeforeremove"===e||"onbeforeupdate"===e}function T(e,n,r){var o=e.dom,i="function"!=typeof t?r:function(e){var n=r.call(o,e);return t.call(o,e),n};if(n in o)o[n]="function"==typeof r?i:null;else{var a=n.slice(2);if(void 0===e.events&&(e.events={}),e.events[n]===i)return;null!=e.events[n]&&o.removeEventListener(a,e.events[n],!1),"function"==typeof r&&(e.events[n]=i,o.addEventListener(a,e.events[n],!1))}}function E(e,t,n){"function"==typeof e.oninit&&e.oninit.call(t.state,t),"function"==typeof e.oncreate&&n.push(e.oncreate.bind(t.state,t))}function C(e,t,n){"function"==typeof e.onupdate&&n.push(e.onupdate.bind(t.state,t))}return{render:function(e,t){if(!e)throw new Error("Ensure the DOM element being passed to m.route/m.mount/m.render is not undefined.");var o=[],i=n.activeElement,a=e.namespaceURI;null==e.vnodes&&(e.textContent=""),Array.isArray(t)||(t=[t]),f(e,e.vnodes,r.normalizeChildren(t),!1,o,null,"http://www.w3.org/1999/xhtml"===a?void 0:a),e.vnodes=t,null!=i&&n.activeElement!==i&&i.focus();for(var l=0;l<o.length;l++)o[l]()},setEventCallback:function(e){return t=e}}};var p=function(e){var t=m(e);t.setEventCallback(function(e){!1===e.redraw?e.redraw=void 0:o()});var n=[];function r(e){var t=n.indexOf(e);t>-1&&n.splice(t,2)}function o(){for(var e=1;e<n.length;e+=2)n[e]()}return{subscribe:function(e,t){r(e),n.push(e,function(e){var t=0,n=null,r="function"==typeof requestAnimationFrame?requestAnimationFrame:setTimeout;return function(){var o=Date.now();0===t||o-t>=16?(t=o,e()):null===n&&(n=r(function(){n=null,e(),t=Date.now()},16-(o-t)))}}(t))},unsubscribe:r,redraw:o,render:t.render}}(window);h.setCompletionCallback(p.redraw);var v;u.mount=(v=p,function(e,t){if(null===t)return v.render(e,[]),void v.unsubscribe(e);if(null==t.view&&"function"!=typeof t)throw new Error("m.mount(element, component) expects a component, not a vnode");v.subscribe(e,function(){v.render(e,r(t))}),v.redraw()});var g=c,y=function(e){if(""===e||null==e)return{};"?"===e.charAt(0)&&(e=e.slice(1));for(var t=e.split("&"),n={},r={},o=0;o<t.length;o++){var i=t[o].split("="),a=decodeURIComponent(i[0]),l=2===i.length?decodeURIComponent(i[1]):"";"true"===l?l=!0:"false"===l&&(l=!1);var s=a.split(/\]\[?|\[/),u=n;a.indexOf("[")>-1&&s.pop();for(var c=0;c<s.length;c++){var f=s[c],d=s[c+1],h=""==d||!isNaN(parseInt(d,10)),m=c===s.length-1;if(""===f)null==r[a=s.slice(0,c).join()]&&(r[a]=0),f=r[a]++;null==u[f]&&(u[f]=m?l:h?[]:{}),u=u[f]}}return n},w=function(e){var n,r="function"==typeof e.history.pushState,o="function"==typeof t?t:setTimeout;function i(t){var n=e.location[t].replace(/(?:%[a-f89][a-f0-9])+/gim,decodeURIComponent);return"pathname"===t&&"/"!==n[0]&&(n="/"+n),n}function a(e,t,n){var r=e.indexOf("?"),o=e.indexOf("#"),i=r>-1?r:o>-1?o:e.length;if(r>-1){var a=o>-1?o:e.length,l=y(e.slice(r+1,a));for(var s in l)t[s]=l[s]}if(o>-1){var u=y(e.slice(o+1));for(var s in u)n[s]=u[s]}return e.slice(0,i)}var l={prefix:"#!",getPath:function(){switch(l.prefix.charAt(0)){case"#":return i("hash").slice(l.prefix.length);case"?":return i("search").slice(l.prefix.length)+i("hash");default:return i("pathname").slice(l.prefix.length)+i("search")+i("hash")}},setPath:function(t,n,o){var i={},s={};if(t=a(t,i,s),null!=n){for(var u in n)i[u]=n[u];t=t.replace(/:([^\/]+)/g,function(e,t){return delete i[t],n[t]})}var c=f(i);c&&(t+="?"+c);var d=f(s);if(d&&(t+="#"+d),r){var h=o?o.state:null,m=o?o.title:null;e.onpopstate(),o&&o.replace?e.history.replaceState(h,m,l.prefix+t):e.history.pushState(h,m,l.prefix+t)}else e.location.href=l.prefix+t}};return l.defineRoutes=function(t,i,s){function u(){var n=l.getPath(),r={},o=a(n,r,r),u=e.history.state;if(null!=u)for(var c in u)r[c]=u[c];for(var f in t){var d=new RegExp("^"+f.replace(/:[^\/]+?\.{3}/g,"(.*?)").replace(/:[^\/]+/g,"([^\\/]+)")+"/?$");if(d.test(o))return void o.replace(d,function(){for(var e=f.match(/:[^\/]+/g)||[],o=[].slice.call(arguments,1,-2),a=0;a<e.length;a++)r[e[a].replace(/:|\./g,"")]=decodeURIComponent(o[a]);i(t[f],r,n,f)})}s(n,r)}var c;r?e.onpopstate=(c=u,function(){null==n&&(n=o(function(){n=null,c()}))}):"#"===l.prefix.charAt(0)&&(e.onhashchange=u),u()},l};u.route=function(e,t){var n,o,i,a,l,s=w(e),u=function(e,u,c){if(null==e)throw new Error("Ensure the DOM element that was passed to `m.route` is not undefined");var f=function(){null!=n&&t.render(e,n(r(o,i.key,i)))},d=function(e){if(e===u)throw new Error("Could not resolve default route "+u);s.setPath(u,null,{replace:!0})};s.defineRoutes(c,function(e,t,r){var s=l=function(e,u){s===l&&(o=null==u||"function"!=typeof u.view&&"function"!=typeof u?"div":u,i=t,a=r,l=null,n=(e.render||function(e){return e}).bind(e),f())};e.view||"function"==typeof e?s({},e):e.onmatch?g.resolve(e.onmatch(t,r)).then(function(t){s(e,t)},d):s(e,"div")},d),t.subscribe(e,f)};return u.set=function(e,t,n){null!=l&&((n=n||{}).replace=!0),l=null,s.setPath(e,t,n)},u.get=function(){return a},u.prefix=function(e){s.prefix=e},u.link=function(e){e.dom.setAttribute("href",s.prefix+e.attrs.href),e.dom.onclick=function(e){if(!(e.ctrlKey||e.metaKey||e.shiftKey||2===e.which)){e.preventDefault(),e.redraw=!1;var t=this.getAttribute("href");0===t.indexOf(s.prefix)&&(t=t.slice(s.prefix.length)),u.set(t,void 0,void 0)}}},u.param=function(e){return void 0!==i&&void 0!==e?i[e]:i},u}(window,p),u.withAttr=function(e,t,n){return function(r){t.call(n||this,e in r.currentTarget?r.currentTarget[e]:r.currentTarget.getAttribute(e))}};var b=m(window);u.render=b.render,u.redraw=p.redraw,u.request=h.request,u.jsonp=h.jsonp,u.parseQueryString=y,u.buildQueryString=f,u.version="1.1.6",u.vnode=r,e.exports=u}()}).call(this,n(8).setImmediate,n(1))},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){var r=n(0),o={all_post:{"abf0122d-881e-4a68-9f75-5bcd0ce882c6.md":r(".container",[r("h1",["dlog: the engine behind this blog"]),r("p",[r("code",["dlog"])," is a simple blog engine that integrates well with other linux tools.\n"]),r("h2",["goals"]),r("ul",[r("li",["creating content should be no more complex than editing a markdown file"]),r("li",["integrates well with tools following the UNIX philosophy"]),r("li",["light payload"]),r("li",["minimal, but complete API"]),r("li",["a focus on the readablility of the end product"])]),r("h2",["api"]),r("ul",[r("li",[r("code",["new"]),"/",r("code",["remove"]),": register or remove a post from dlog's database"]),r("li",[r("code",["live_demo"]),": serve the a debuggable version of the site locally"]),r("li",[r("code",["live_prod"]),": serve the end product locally"]),r("li",[r("code",["publish"]),"/",r("code",["unpublish"]),": mark/unmark posts to be included in the production payload"]),r("li",[r("code",["edit"]),": edit the markdown version of a post (with a text editor of the user's choice)"]),r("li",[r("code",["print"]),": print out a line-oriented representation of dlog's database"])]),r("h2",["other features"]),r("ul",[r("li",["view logging output of internal commands (eg with ",r("code",["less +F"]),")"]),r("li",["live, local view of site"]),r("li",["skeleton.css is used as a base, easy to configure from that point"])]),r("h2",["example workflow"]),r("p",["Edit markdown files while checking local mirror as a reference.\nWhen things look good, push to github.\nThat's it!\n"]),r("h2",["acknowledgements"]),r("ul",[r("li",[r("a",{href:"http://getskeleton.com"},["skeleteon.css"])]),r("li",[r("a",{href:"https://mithril.js.org"},["mithril"])]),r("li",[r("a",{href:"https://github.com/miyuchina/mistletoe"},["mistletoe"])]),r("li",[r("a",{href:"https://nixos.org/nix"},["nix"])]),r("li",[r("a",{href:"http://entrproject.org"},["entr"])])])]),"2a487088-d2f4-49cc-826c-b7daae74e894.md":r(".container",[r("h1",["nix ideas"]),r("ul",[r("li",["set pure flag without using CLI (--pure)"]),r("li",[])])]),"99fad248-7d36-47cc-83e1-36f3176cea54.md":r(".container",[r("h1",["David Varela"]),r("ul",[r("li",["email: 00vareladavid@gmail.com"]),r("li",[r("a",{href:"https://github.com/00vareladavid"},["github"])]),r("li",["stackoverflow"]),r("li",["hackernews"]),r("li",["find me on IRC as nur0n0"])]),r("h3",["Projects"]),r("ul",[r("li",[r("a",{href:"https://github.com/00vareladavid/scheme"},["a scheme implementation"])]),r("li",["perl parser"]),r("li",["dlog"]),r("li",["borked container project"])]),r("h3",["Tools"]),r("ul",[r("li",[r("a",{href:"https://google.com"},["my resume"])])])]),"1f36a5d1-1817-440e-b89e-a6cd2fad1837.md":r(".container",[r("h1",["profiling"]),r("h2",["operf"]),r("h3",["permissions"]),r("ul",[r("li",["check: ",r("code",["sysctl kernel.kptr_restrict"])]),r("li",["disable: ",r("code",["sudo sysctl -w kernel.kptr_restrict=0"])]),r("ul",[r("li",["note: issue this outside of container (if applicable)  ### notes"])]),r("li",["needs root permissions"])])]),"bc7b1bda-c655-44fe-8f84-92fb43a2d423.md":r(".container",[r("h1",["School"]),r("ul",[r("li",["degree awarded: December 2017"]),r("li",["verify degree: https://registrar.ucdavis.edu/records/verifications"]),r("li",["registrar contact info: https://registrar.ucdavis.edu/about/contact"]),r("li",["diploma information: https://registrar.ucdavis.edu/records/diploma"])]),r("h2",["TODO"]),r("ul",[r("li",["I sent an email to the Office of the Registrar, they will hit me back on 00vareladavid"]),r("ul",[r("li",["registar (jdrutherford) sent diploma on march 16,2018 and it bounced"]),r("li",["wait for them to hit you back first or reply jdrutherford in 1 week"]),r("li",["what is the new address?"])]),r("li",["difference between myfedloan and"])])]),"46d2be01-c996-4e58-825f-84904363e0ec.md":r(".container",[r("h1",["a practical nix tutorial"]),r("h2",["idioms"]),r("ul",[r("li",[r("code",["nix repl '<nixpkgs>'"])])]),r("h1",["TODO"]),r("ul",[r("li",["pypi2nix"])])]),"4ffff35e-b7e1-497e-9437-c37bbbe6be5a.md":r(".container",[r("h1",["Setting up ssh inside of systemd-nspawn"]),r("h2",["Motivation"]),r("p",["Now that the big distros (debian, arch, and RHEL) have switched to systemd,\n  I find that systemd-nspawn is the most painless way to run a container.\nI do most of my work inside of containers;\n  which means multiple interactive processes per container.\nSome system is required to manage interaction with multiple processes.\nIn general, two choices are available:\n"]),r("ul",[r("li",["run a multiplexer (e.g. tmux) after an ssh connection is made"]),r("li",["connect to the container using multiple ssh connections; one connection per process"])]),r("p",["Both options have strengths and weaknesses.\nTwo weaknesses of terminal multiplexers:\n  they consume key-bindings\n  and they add complexity to the connection stream.\nEven if you choose to run a multiplexer,\n  I recommend setting up ssh for the added flexibility.\n"]),r("h2",["Instructions"]),r("p",[r("strong",["Outside of the container"]),"\n"]),r("ul",[r("li",["make sure the systemd-nspawn container is running: ",r("code",["systemd-nspawn <...>"])])]),r("p",[r("strong",["Inside the container"]),"\n"]),r("ul",[r("li",["install an ssh daemon: ",r("code",["pacman -S openssh"])]),r("ul",[r("li",["of course if you are not running arch, replace ",r("code",["pacman"])," with ",r("code",["apt"]),", ",r("code",["yum"]),", ..."])]),r("li",["configure ssh: a good starting point is this ",r("a",{href:"https://www.linode.com/docs/security/securing-your-server"},["guide"])]),r("li",["enable the ssh daemon through systemd: ",r("code",["systemctl enable sshd"])]),r("ul",[r("li",["do not forget to start the daemon!: ",r("code",["systemctl start sshd"])])])]),r("p",[r("strong",["Outside the container"]),"\n"]),r("ul",[r("li",["login via ssh: ",r("code",["ssh <username>@localhost"])])]),r("h1",["TODO"]),r("ul",[r("li",["enable systemd-nspawn automatically"])])])},focused:r("hello"),load:function(e){o.focused=o.all_post[e]}};e.exports=o},function(e,t,n){n(0);var r=n(2);e.exports={oninit:function(e){r.load(e.attrs.id)},view:function(){return r.focused}}},function(e,t,n){var r=n(0);e.exports={view:function(e){return r(".top",[r(".navbar",r(".row",r(".container",r(".row",[r(".two columns",r("a.navbutton",{href:"/",oncreate:r.route.link},"home")),r(".two columns",r("a.navbutton",{href:"/list",oncreate:r.route.link},"blog")),r(".two columns",r("a.navbutton",{href:"https://github.com/00vareladavid"},"github")),r(".two columns",r("a.navbutton",{href:"/about",oncreate:r.route.link},"about me"))])))),r(".row",r("section",e.children))])}}},function(e,t,n){var r=n(0);e.exports={view:function(){return r(".container",[r("p",[r("a.large-link",{href:"/post/abf0122d-881e-4a68-9f75-5bcd0ce882c6.md",oncreate:r.route.link},["designing dlog"]),"\n",r("a.large-link",{href:"/post/4ffff35e-b7e1-497e-9437-c37bbbe6be5a.md",oncreate:r.route.link},["systemd-nspawn and ssh"]),"\n"])])}}},function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function l(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var s,u=[],c=!1,f=-1;function d(){c&&s&&(c=!1,s.length?u=s.concat(u):f=-1,u.length&&h())}function h(){if(!c){var e=l(d);c=!0;for(var t=u.length;t;){for(s=u,u=[];++f<t;)s&&s[f].run();f=-1,t=u.length}s=null,c=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function p(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new m(e,t)),1!==u.length||c||l(h)},m.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=p,o.addListener=p,o.once=p,o.off=p,o.removeListener=p,o.removeAllListeners=p,o.emit=p,o.prependListener=p,o.prependOnceListener=p,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t,n){(function(e,t){!function(e,n){"use strict";if(!e.setImmediate){var r,o,i,a,l,s=1,u={},c=!1,f=e.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(e);d=d&&d.setTimeout?d:e,"[object process]"==={}.toString.call(e.process)?r=function(e){t.nextTick(function(){m(e)})}:!function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?e.MessageChannel?((i=new MessageChannel).port1.onmessage=function(e){m(e.data)},r=function(e){i.port2.postMessage(e)}):f&&"onreadystatechange"in f.createElement("script")?(o=f.documentElement,r=function(e){var t=f.createElement("script");t.onreadystatechange=function(){m(e),t.onreadystatechange=null,o.removeChild(t),t=null},o.appendChild(t)}):r=function(e){setTimeout(m,0,e)}:(a="setImmediate$"+Math.random()+"$",l=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(a)&&m(+t.data.slice(a.length))},e.addEventListener?e.addEventListener("message",l,!1):e.attachEvent("onmessage",l),r=function(t){e.postMessage(a+t,"*")}),d.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var o={callback:e,args:t};return u[s]=o,r(s),s++},d.clearImmediate=h}function h(e){delete u[e]}function m(e){if(c)setTimeout(m,0,e);else{var t=u[e];if(t){c=!0;try{!function(e){var t=e.callback,r=e.args;switch(r.length){case 0:t();break;case 1:t(r[0]);break;case 2:t(r[0],r[1]);break;case 3:t(r[0],r[1],r[2]);break;default:t.apply(n,r)}}(t)}finally{h(e),c=!1}}}}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,n(1),n(6))},function(e,t,n){(function(e){var r=void 0!==e&&e||"undefined"!=typeof self&&self||window,o=Function.prototype.apply;function i(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new i(o.call(setTimeout,r,arguments),clearTimeout)},t.setInterval=function(){return new i(o.call(setInterval,r,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},i.prototype.unref=i.prototype.ref=function(){},i.prototype.close=function(){this._clearFn.call(r,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},n(7),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(this,n(1))},function(e,t,n){var r=n(0),o=n(5),i=n(4),a=n(3);r.route(document.body,"/list",{"/list":{render:function(){return r(i,r(o))}},"/post/:id":{render:function(e){return r(i,r(a,e.attrs))}}})}]);