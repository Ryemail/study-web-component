!function(t,e){t&&!t.getElementById("livereloadscript")&&((e=t.createElement("script")).async=1,e.src="//"+(self.location.host||"localhost").split(":")[0]+":35729/livereload.js?snipver=1",e.id="livereloadscript",t.getElementsByTagName("head")[0].appendChild(e))}(self.document),function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).CustomTag=e()}(this,(function(){"use strict";function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function e(t){return e=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},e(t)}function n(t,e){return n=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},n(t,e)}function o(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function r(t,e,i){return r=o()?Reflect.construct.bind():function(t,e,o){var r=[null];r.push.apply(r,e);var i=new(Function.bind.apply(t,r));return o&&n(i,o.prototype),i},r.apply(null,arguments)}function i(t){var o="function"==typeof Map?new Map:void 0;return i=function(t){if(null===t||(i=t,-1===Function.toString.call(i).indexOf("[native code]")))return t;var i;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==o){if(o.has(t))return o.get(t);o.set(t,c)}function c(){return r(t,arguments,e(this).constructor)}return c.prototype=Object.create(t.prototype,{constructor:{value:c,enumerable:!1,writable:!0,configurable:!0}}),n(c,t)},i(t)}function c(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}var a=function(r){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&n(t,e)}(p,r);var i,a,u,l,s,f=(i=p,a=o(),function(){var t,n=e(i);if(a){var o=e(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return c(this,t)});function p(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,p),(t=f.call(this)).avatar="",t.mobile="",t.name="",t._comments=[],t.attachShadow({mode:"open"}),t.render(),t}return u=p,s=[{key:"observedAttributes",get:function(){return["avatar","mobile","name","comments","_comments"]}}],(l=[{key:"comments",get:function(){return this._comments},set:function(t){this._comments=t,this.render()}},{key:"css",value:function(){return"\n\t\t<style>\n\t\t\t.user-item{\n\t\t\t\tpadding: 10px;\n\t\t\t\tmargin: 10px;\n\t\t\t\tdisplay: flex;\n\t\t\t\tjustify-content: space-between;\n\t\t\t\tbox-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);\n\t\t\t}\n\t\t\t.avatar {\n\t\t\t\tdisplay: block;\n\t\t\t\twidth: 100px;\n\t\t\t\theight: 100px;\n\t\t\t}\n\t\t\t.user-content {\n\t\t\t\tflex: 1;\n\t\t\t\tpadding-left: 10px;\n\t\t\t}</style>"}},{key:"onAvatar",value:function(){alert("rrrrr")}},{key:"html",value:function(){var t=this;return this._comments.map((function(e){return o=(n=e).name,r=n.avatar,i=n.mobile,console.log(t.onAvatar),'<div class="user-item"><img class="avatar" src="'.concat(r,'" />\n\t\t\t<div class="user-content">\n\t\t\t\t<div class="user-name">').concat(o,'</div>\n\t\t\t\t<div class="user-mobile">').concat(i,"</div>\n\t\t\t</div></div>");var n,o,r,i})).join("")}},{key:"$",value:function(t){return this.shadowRoot.querySelector(t)}},{key:"render",value:function(){this.shadowRoot.innerHTML=this.css()+this.html()}},{key:"connectedCallback",value:function(){console.log("首次插入dom 文档时调用"),window.addEventListener("")}},{key:"disconnectedCallback",value:function(){console.log("被从文档中删除时调用")}},{key:"adoptedCallback",value:function(){console.log("被移动到新文档中时调用")}},{key:"attributeChangedCallback",value:function(t,e,n){p.observedAttributes.find((function(e){return e===t}))&&e!==n&&(this[t]=n,this.render())}}])&&t(u.prototype,l),s&&t(u,s),Object.defineProperty(u,"prototype",{writable:!1}),p}(i(HTMLElement));return window.customElements.define("user-card",a),a}));
