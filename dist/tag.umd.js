!function(e,t){e&&!e.getElementById("livereloadscript")&&((t=e.createElement("script")).async=1,t.src="//"+(self.location.host||"localhost").split(":")[0]+":35729/livereload.js?snipver=1",t.id="livereloadscript",e.getElementsByTagName("head")[0].appendChild(t))}(self.document),function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).CustomTag=t()}(this,(function(){"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(e){return t=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},t(e)}function n(e,t){return n=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},n(e,t)}function r(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function o(e,t,a){return o=r()?Reflect.construct.bind():function(e,t,r){var o=[null];o.push.apply(o,t);var a=new(Function.bind.apply(e,o));return r&&n(a,r.prototype),a},o.apply(null,arguments)}function a(e){var r="function"==typeof Map?new Map:void 0;return a=function(e){if(null===e||(a=e,-1===Function.toString.call(a).indexOf("[native code]")))return e;var a;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(e))return r.get(e);r.set(e,i)}function i(){return o(e,arguments,t(this).constructor)}return i.prototype=Object.create(e.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),n(i,e)},a(e)}function i(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}var c=function(o){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&n(e,t)}(p,o);var a,c,u,l,s,f=(a=p,c=r(),function(){var e,n=t(a);if(c){var r=t(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return i(this,e)});function p(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p),(e=f.call(this)).state={avatar:"",mobile:"",name:""};var t=e.attachShadow({mode:"open"});return t.appendChild(e.css()),t.appendChild(e.html()),e}return u=p,l=[{key:"css",value:function(){return e=":host {\n\t\t\tpadding: 10px;\n\t\t\tmargin: 10px;\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: space-between;\n\t\t\tbox-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);\n\t\t}\n\t\t.avatar {\n\t\t\tdisplay: block;\n\t\t\twidth: 100px;\n\t\t\theight: 100px;\n\t\t}\n\t\t.user-content {\n\t\t\tflex: 1;\n\t\t\tpadding-left: 10px;\n\t\t}",(t=document.createElement("style")).innerHTML=e,t;var e,t}},{key:"html",value:function(){var e=document.createElement("img"),t=document.createElement("div"),n=document.createElement("div"),r=document.createElement("div");t.className="user-content",n.className="user-name",r.className="user-mobile",e.className="avatar";var o=document.createDocumentFragment();return t.append(n,r),o.appendChild(e),o.appendChild(t),o}},{key:"updateProps",value:function(e){var t=e[0],n=e[1],r=e[2];p.observedAttributes.find((function(e){return e===t}))&&n!==r&&(this.state[t]=r,this.render())}},{key:"render",value:function(){var e=this.shadowRoot;e.querySelector(".avatar").setAttribute("src",this.state.avatar),e.querySelector(".user-name").innerText=this.state.name,e.querySelector(".user-mobile").innerText=this.state.mobile}},{key:"connectedCallback",value:function(){}},{key:"disconnectedCallback",value:function(){}},{key:"adoptedCallback",value:function(){}},{key:"attributeChangedCallback",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this.updateProps(t)}}],s=[{key:"observedAttributes",get:function(){return["avatar","mobile","name"]}}],l&&e(u.prototype,l),s&&e(u,s),Object.defineProperty(u,"prototype",{writable:!1}),p}(a(HTMLElement));return window.customElements.define("user-card",c),c}));
