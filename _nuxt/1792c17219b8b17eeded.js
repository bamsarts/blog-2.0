(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{161:function(t,e,n){"use strict";n.d(e,"c",function(){return o}),n.d(e,"b",function(){return c}),n.d(e,"a",function(){return l});var r=n(163);n(162);function o(t){var e=Math.round(t/10);return"".concat(new Array(e||1).fill("☕️").join("")," ").concat(t," min read")}function c(t){var e;if("function"!=typeof Date.prototype.toLocaleDateString)return t;t=new Date(t);var n=["en-EN",{day:"numeric",month:"long",year:"numeric"}].filter(Boolean);return(e=t).toLocaleDateString.apply(e,Object(r.a)(n))}function l(t,e,n){var r;return function(){var o=this,c=arguments,l=n&&!r;clearTimeout(r),r=setTimeout(function(){r=null,n||t.apply(o,c)},e),l&&t.apply(o,c)}}},162:function(t,e,n){var r=n(7);r(r.P,"Array",{fill:n(164)}),n(50)("fill")},163:function(t,e,n){"use strict";function r(t){return function(t){if(Array.isArray(t)){for(var i=0,e=new Array(t.length);i<t.length;i++)e[i]=t[i];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(e,"a",function(){return r})},164:function(t,e,n){"use strict";var r=n(28),o=n(100),c=n(17);t.exports=function(t){for(var e=r(this),n=c(e.length),l=arguments.length,d=o(l>1?arguments[1]:void 0,n),f=l>2?arguments[2]:void 0,m=void 0===f?n:o(f,n);m>d;)e[d++]=t;return e}},165:function(t,e,n){var map={"./create-awesome-blog-with-gridsome/index.md":[170,25],"./create-simple-like-button-using-firebase-rtdb/index.md":[171,27],"./eslint-formatter-html-extended/index.md":[172,29],"./experience-in-become-fasilitator-gdk-mws-2018/index.md":[173,31],"./migrate-nuxt-to-typescript/index.md":[174,33],"./tasting-reasonml-for-react/index.md":[175,35],"./unit-testing-guide-in-vuejs/index.md":[176,37]};function r(t){if(!n.o(map,t))return Promise.resolve().then(function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e});var e=map[t],r=e[0];return n.e(e[1]).then(function(){return n.t(r,7)})}r.keys=function(){return Object.keys(map)},r.id=165,t.exports=r},241:function(t,e,n){"use strict";n.r(e);n(72),n(73),n(35),n(29),n(68),n(16);var r=n(3),o=n(161),c=n(69),l={name:"CategoryPageAmp",head:function(){var title="Category ".concat(this.category," | @mazipan"),t="All article with ".concat(this.category," category"),e="".concat(this.productionUrl,"/category/").concat(this.category);return{title:title,meta:[{hid:"description",name:"description",content:t},{hid:"apple-mobile-web-app-title",name:"apple-mobile-web-app-title",content:title},{hid:"og:title",property:"og:title",content:title},{hid:"og:description",property:"og:description",content:t},{hid:"og:url",property:"og:url",content:e},{hid:"twitter:title",name:"twitter:title",content:title},{hid:"twitter:description",name:"twitter:description",content:t},{hid:"twitter:url",name:"twitter:url",content:e}],link:[{hid:"amphtml",rel:"amphtml",href:"".concat(this.productionUrl,"/amp/category/").concat(this.category)}]}},data:function(){return{formatReadingTime:o.c,formatPostDate:o.b,productionUrl:"https://www.mazipan.xyz"}},asyncData:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(e){var o,l,d;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return d=function(){return(d=Object(r.a)(regeneratorRuntime.mark(function t(e){var r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n(165)("./".concat(e,"/index.md"));case 2:return r=t.sent,t.abrupt("return",r.attributes);case 4:case"end":return t.stop()}},t)}))).apply(this,arguments)},l=function(t){return d.apply(this,arguments)},o=e.params,t.abrupt("return",Promise.all(c.a.data.map(function(t){return l(t)})).then(function(t){return{category:o.category,blogs:t.filter(function(t){return t.categories.includes(o.category)})}}));case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},d=n(2),component=Object(d.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"category"},[n("div",{staticClass:"space-bottom text-title"},[n("h1",[t._v("Category #"+t._s(t.category))])]),t._v(" "),n("table",{attrs:{width:"100%"}},t._l(t.blogs,function(e){return n("tr",{key:e.title,staticStyle:{"vertical-align":"top","line-height":"2"}},[n("td",{attrs:{width:"150px"}},[t._v("\n        "+t._s(t.formatPostDate(e.date))+"\n      ")]),t._v(" "),n("td",{attrs:{width:"20px"}},[t._v("\n        •\n      ")]),t._v(" "),n("td",[n("nuxt-link",{attrs:{to:"/amp/"+e.slug+"/?utm_source=archives",title:e.title}},[t._v("\n          "+t._s(e.title)+"\n        ")])],1)])}),0)])},[],!1,null,null,null);e.default=component.exports}}]);