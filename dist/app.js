!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=1)}([function(t,e,n){!function(e,n){t.exports=n()}(0,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1),o=n(8),a=n(10);e.Component=a.Component;var i=n(11),u=n(4);e.on=u.on,e.update=u.update,r.default.createElement=o.createElement,r.default.render=o.render,r.default.start=function(t,e,n,r,o){var i=Object.assign(o||{},{render:!0,global_event:!0}),u=new a.Component(e,n,r);return u.mount(t,i),u},"object"==typeof window&&(window.app=r.default,document.addEventListener("DOMContentLoaded",function(){return new i.default})),e.default=r.default},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(){this._events={}}return t.prototype.on=function(t,e,n){void 0===n&&(n={}),n.debug&&console.log("on: "+t),this._events[t]=this._events[t]||[],this._events[t].push({fn:e,options:n})},t.prototype.run=function(t){for(var e=this,n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];var o=this._events[t];console.assert(!!o,"No subscriber for event: "+t),o&&(this._events[t]=o.filter(function(r){var o=r.fn,a=r.options;return a.delay?e.delay(t,o,n,a):(a.debug&&console.log("run: "+t,n),o.apply(e,n)),!r.options.once}))},t.prototype.delay=function(t,e,n,r){var o=this;r._t&&clearTimeout(r._t),r._t=setTimeout(function(){clearTimeout(r._t),r.debug&&console.log("run-delay "+r.delay+":"+t,n),e.apply(o,n)},r.delay)},t}();e.App=r,e.default=new r},,,function(t,e,n){"use strict";function r(t,n){return void 0===n&&(n={}),function(r,o,a){return t=o+(t?","+t:""),e.Reflect.defineMetadata("apprun-update:"+t,{name:t,action:[a.value,n]},r),a}}function o(t,n){return void 0===n&&(n={}),function(n,r){t=r+(t?","+t:""),e.Reflect.defineMetadata("apprun-update:"+t,{name:t,key:r},n)}}Object.defineProperty(e,"__esModule",{value:!0}),e.Reflect={meta:new WeakMap,defineMetadata:function(t,e,n){this.meta.has(n)||this.meta.set(n,{}),this.meta.get(n)[t]=e},getMetadataKeys:function(t){return t=Object.getPrototypeOf(t),this.meta.get(t)?Object.keys(this.meta.get(t)):[]},getMetadata:function(t,e){return e=Object.getPrototypeOf(e),this.meta.get(e)?this.meta.get(e)[t]:null}},e.update=r,e.on=o},,function(t,e,n){"use strict";function r(t,e){d=0,e&&t&&(t.firstChild?a(t.firstChild,e):t.appendChild(u(e)))}function o(t,e){return t.nodeName===(""+(e.tag||"")).toUpperCase()}function a(t,e){if(console.assert(!!t),!o(t,e))return void t.parentNode.replaceChild(u(e),t);for(var n=Math.min(t.childNodes.length,e.children.length),r=0;r<n;r++){var s=e.children[r],c=t.childNodes[r];if("string"==typeof s)c.textContent!==s&&(3===c.nodeType?c.textContent=s:t.replaceChild(i(s),c));else{var f=s.props&&s.props.key;if(f)if(c.key===f)a(t.childNodes[r],s);else{var d=f&&p[f];d?(t.replaceChild(d,c),t.appendChild(c),a(t.childNodes[r],s)):(t.appendChild(u(e),c),a(t.childNodes[r],s))}else a(t.childNodes[r],s)}}for(var h=t.childNodes.length;h>n;)t.removeChild(t.lastChild),h--;if(e.children.length>n){for(var v=document.createDocumentFragment(),r=n;r<e.children.length;r++)v.appendChild(u(e.children[r]));t.appendChild(v)}l(t,e.props)}function i(t){if(0===t.indexOf("_html:")){var e=document.createElement("div");return e.insertAdjacentHTML("afterbegin",t.substring(6)),e}return document.createTextNode(t)}function u(t){if(console.assert(null!==t&&void 0!==t),"string"==typeof t)return i(t);if(!t.tag)return i(JSON.stringify(t));var e="svg"===t.tag?document.createElementNS("http://www.w3.org/2000/svg",t.tag):document.createElement(t.tag);return l(e,t.props),t.children&&t.children.forEach(function(t){return e.appendChild(u(t))}),e}function s(t,e){var n={};return t&&Object.keys(t).forEach(function(t){return n[t]=""}),e&&Object.keys(e).forEach(function(t){return n[t]=e[t]}),n}function l(t,e){console.assert(!!t);var n=t[f]||{};e=s(n,e),t[f]=e;for(var r in e){var o=e[r];if(n[r]!==o)if("style"===r){t.style.cssText&&(t.style.cssText="");for(var a in o)t.style[a]!==o[a]&&(t.style[a]=o[a])}else t[r]!==o&&(t[r]=o),"key"===r&&o&&(p[o]=t)}}Object.defineProperty(e,"__esModule",{value:!0});var c=n(9),f="_props";e.createElement=function(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var o=[],a=function(t){null!==t&&void 0!==t&&""!==t&&o.push("function"==typeof t||"object"==typeof t?t:""+t)};if(n.forEach(function(t){Array.isArray(t)?t.forEach(function(t){return a(t)}):a(t)}),"string"==typeof t)return{tag:t,props:e,children:o};if(Object.getPrototypeOf(t).name){var i=e&&e.id||"_"+t.name+"_"+ ++d;return c.default(t,i,e)}return t(e,o)};var d=0,p={};e.updateElement=r,e.render=r,e.default={createElement:e.createElement,updateElement:e.updateElement}},,function(t,e,n){"use strict";function r(t,e){console.assert(!!t),o.updateElement(t,e)}Object.defineProperty(e,"__esModule",{value:!0});var o=n(6);e.createElement=o.createElement,e.render=r},function(t,e,n){"use strict";function r(t,e,n){var r=a[e]?a[e]:a[e]=new t(n).mount(e);return o.default.createElement("div",{id:e},r.render&&r.render())}Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),a={};e.default=r},function(t,e,n){"use strict";var r=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),o=this&&this.__assign||Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t};Object.defineProperty(e,"__esModule",{value:!0});var a=n(1),i=n(4),u=function(t){function e(e,n,r,a){var i=t.call(this)||this;return i.state=e,i.view=n,i.update=r,i.options=a,i._history=[],i._history_idx=-1,i.start=function(t,e){return void 0===t&&(t=null),void 0===e&&(e={render:!0}),i.mount(t,o({},e,{render:!0}))},i.render=function(){return i.view(i.state)},i}return r(e,t),e.prototype.renderState=function(t){if(this.view){var e=this.view(t),n="string"==typeof this.element?document.getElementById(this.element):this.element;n&&a.default.render&&a.default.render(n,e),n&&(n._component=this)}},e.prototype.setState=function(t,e){var n=this;if(t instanceof Promise)t.then(function(t){n.setState(t,e)}).catch(function(t){throw console.error(t),t});else{if(null==t)return;this.state=t,!1!==e.render&&this.renderState(t),!1!==e.history&&this.enable_history&&(this._history=this._history.concat([t]),this._history_idx=this._history.length-1),"function"==typeof e.callback&&e.callback(this.state),this.rendered&&this.rendered(this.state)}},e.prototype.mount=function(t,e){var n=this;if(void 0===t&&(t=null),console.assert(!this.element,"Component already mounted."),this.options=e=Object.assign(this.options||{},e),this.element=t,this.global_event=e.global_event,this.enable_history=!!e.history,this.enable_history){var r=function(){n._history_idx--,n._history_idx>=0?n.setState(n._history[n._history_idx],{render:!0,history:!1}):n._history_idx=0},o=function(){n._history_idx++,n._history_idx<n._history.length?n.setState(n._history[n._history_idx],{render:!0,history:!1}):n._history_idx=n._history.length-1};this.on(e.history.prev||"history-prev",r),this.on(e.history.next||"history-next",o)}return this.add_actions(),void 0===this.state&&(this.state=this.model||{}),e.render?this.setState(this.state,{render:!0,history:!0}):this.setState(this.state,{render:!1,history:!0}),this},e.prototype.is_global_event=function(t){return t&&(t.startsWith("#")||t.startsWith("/"))},e.prototype.add_action=function(t,e,n){var r=this;void 0===n&&(n={}),e&&"function"==typeof e&&this.on(t,function(){for(var t=[],o=0;o<arguments.length;o++)t[o]=arguments[o];var a=e.apply(void 0,[r.state].concat(t));r.setState(a,n)},n)},e.prototype.add_actions=function(){var t=this,e=this.update||{};i.Reflect.getMetadataKeys(this).forEach(function(n){if(n.startsWith("apprun-update:")){var r=i.Reflect.getMetadata(n,t);e[r.name]=r.action||t[r.key]}});var n={};Object.keys(e).forEach(function(t){var r=e[t];("function"==typeof r||Array.isArray(r))&&t.split(",").forEach(function(t){return n[t.trim()]=r})}),Object.keys(n).forEach(function(e){var r=n[e];"function"==typeof r?t.add_action(e,r):Array.isArray(r)&&t.add_action(e,r[0],r[1])})},e.prototype.run=function(e){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];return this.global_event||this.is_global_event(e)?a.default.run.apply(a.default,[e].concat(n)):t.prototype.run.apply(this,[e].concat(n))},e.prototype.on=function(e,n,r){return this.global_event||this.is_global_event(e)?a.default.on(e,n,r):t.prototype.on.call(this,e,n,r)},e}(a.App);e.Component=u},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1),o=function(){function t(){var t=this;r.default.on("route",function(e){return t.route(e)}),window.onpopstate=function(e){return t.route(location.hash)},this.route(location.hash)}return t.prototype.route=function(t){if(t||(t="#"),t.indexOf("/")>0){var e=t.split("/"),n=e[0],o=e.slice(1);r.default.run.apply(r.default,[n].concat(o)),r.default.run.apply(r.default,["//",n].concat(o))}else r.default.run(t),r.default.run("//",t)},t}();e.default=o}])})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0);r.default.on("#",function(t){return r.default.run("#Home")}),r.default.on("//",function(t){for(var e=document.querySelectorAll(".navbar-nav li"),n=0;n<e.length;++n)e[n].classList.remove("active");var r=document.querySelector("[href='"+t+"']");r&&r.parentElement.classList.add("active")});var o=function(t){return r.default.createElement("div",null,r.default.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.default.createElement("a",{className:"navbar-brand",href:"#"},"AppRun"),r.default.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.default.createElement("span",{className:"navbar-toggler-icon"})),r.default.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.default.createElement("ul",{className:"navbar-nav mr-auto"},r.default.createElement("li",{className:"nav-item active"},r.default.createElement("a",{className:"nav-link",href:"#Home"},"Home",r.default.createElement("span",{className:"sr-only"},"(current)"))),r.default.createElement("li",{className:"nav-item"},r.default.createElement("a",{className:"nav-link",href:"#About"},"About")),r.default.createElement("li",{className:"nav-item"},r.default.createElement("a",{className:"nav-link",href:"#Contact"},"Contact"))))),r.default.createElement("div",{className:"container-fluid",id:"my-app"}))};r.default.start("main",{},o,{});var a=n(2),i=n(3),u=n(4);(new a.default).mount("my-app"),(new i.default).mount("my-app"),(new u.default).mount("my-app")},function(t,e,n){"use strict";var r=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.state="Home",e.view=function(t){return o.default.createElement("div",null,o.default.createElement("h1",null,t))},e.update={"#Home":function(t){return t}},e}return r(e,t),e}(o.Component);e.default=a},function(t,e,n){"use strict";var r=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.state="About",e.view=function(t){return o.default.createElement("div",null,o.default.createElement("h1",null,t))},e.update={"#About":function(t){return t}},e}return r(e,t),e}(o.Component);e.default=a},function(t,e,n){"use strict";var r=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.state="Contact",e.view=function(t){return o.default.createElement("div",null,o.default.createElement("h1",null,t),o.default.createElement("input",{oninput:function(t){return e.run("input",t)}}))},e.update={"#Contact":function(t){return t},input:function(t,e){return e.target.value}},e}return r(e,t),e}(o.Component);e.default=a}]);
//# sourceMappingURL=app.js.map