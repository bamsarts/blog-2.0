(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{165:function(t,e,n){"use strict";n.d(e,"c",function(){return o}),n.d(e,"b",function(){return c}),n.d(e,"a",function(){return l});var r=n(167);n(166);function o(t){var e=Math.round(t/10);return"".concat(new Array(e||1).fill("☕️").join("")," ").concat(t," min read")}function c(t){var e;if("function"!=typeof Date.prototype.toLocaleDateString)return t;t=new Date(t);var n=["en-EN",{day:"numeric",month:"long",year:"numeric"}].filter(Boolean);return(e=t).toLocaleDateString.apply(e,Object(r.a)(n))}function l(t,e,n){var r;return function(){var o=this,c=arguments,l=function(){r=null,n||t.apply(o,c)},d=n&&!r;clearTimeout(r),r=setTimeout(l,e),d&&t.apply(o,c)}}},166:function(t,e,n){var r=n(7);r(r.P,"Array",{fill:n(169)}),n(57)("fill")},167:function(t,e,n){"use strict";function r(t){return function(t){if(Array.isArray(t)){for(var i=0,e=new Array(t.length);i<t.length;i++)e[i]=t[i];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(e,"a",function(){return r})},169:function(t,e,n){"use strict";var r=n(22),o=n(101),c=n(18);t.exports=function(t){for(var e=r(this),n=c(e.length),l=arguments.length,d=o(l>1?arguments[1]:void 0,n),f=l>2?arguments[2]:void 0,m=void 0===f?n:o(f,n);m>d;)e[d++]=t;return e}},171:function(t,e,n){var map={"./create-awesome-blog-with-gridsome/index.md":[176,33],"./create-simple-like-button-using-firebase-rtdb/index.md":[177,35],"./eslint-formatter-html-extended/index.md":[178,37],"./experience-in-become-fasilitator-gdk-mws-2018/index.md":[179,39],"./generate-amp-pages-in-nuxtjs/index.md":[180,41],"./migrate-nuxt-to-typescript/index.md":[181,43],"./tasting-reasonml-for-react/index.md":[182,45],"./the-art-of-deleting-and-updating-the-code/index.md":[183,47],"./unit-testing-guide-in-vuejs/index.md":[184,49]};function r(t){if(!n.o(map,t))return Promise.resolve().then(function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e});var e=map[t],r=e[0];return n.e(e[1]).then(function(){return n.t(r,7)})}r.keys=function(){return Object.keys(map)},r.id=171,t.exports=r},260:function(t,e,n){"use strict";n.r(e);n(23),n(13),n(73),n(17);var r,o=n(3),c=n(165),l=n(75),d={name:"ArchivesPageAmp",layout:"amp-default",head:function(){var title="Archives | @mazipan",t="".concat(this.productionUrl,"/archives/");return{title:title,meta:[{hid:"description",name:"description",content:"Page Archives"},{hid:"apple-mobile-web-app-title",name:"apple-mobile-web-app-title",content:title},{hid:"og:title",property:"og:title",content:title},{hid:"og:description",property:"og:description",content:"Page Archives"},{hid:"og:url",property:"og:url",content:t},{hid:"twitter:title",name:"twitter:title",content:title},{hid:"twitter:description",name:"twitter:description",content:"Page Archives"},{hid:"twitter:url",name:"twitter:url",content:t}],link:[{hid:"canonical",rel:"canonical",href:t}]}},data:function(){return{formatReadingTime:c.c,formatPostDate:c.b,productionUrl:"https://www.mazipan.xyz"}},asyncData:(r=Object(o.a)(regeneratorRuntime.mark(function t(e){var r,c;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return c=function(){return(c=Object(o.a)(regeneratorRuntime.mark(function t(e){var r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n(171)("./".concat(e,"/index.md"));case 2:return r=t.sent,t.abrupt("return",r.attributes);case 4:case"end":return t.stop()}},t)}))).apply(this,arguments)},r=function(t){return c.apply(this,arguments)},e.store,t.abrupt("return",Promise.all(l.a.data.map(function(t){return r(t)})).then(function(t){return{blogs:t}}));case 4:case"end":return t.stop()}},t)})),function(t){return r.apply(this,arguments)})},f=n(2),component=Object(f.a)(d,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"archives"},[t._m(0),t._v(" "),n("table",{attrs:{width:"100%"}},t._l(t.blogs,function(e){return n("tr",{key:e.title,staticStyle:{"vertical-align":"top","line-height":"2"}},[n("td",{attrs:{width:"150px"}},[t._v("\n        "+t._s(t.formatPostDate(e.date))+"\n      ")]),t._v(" "),n("td",{attrs:{width:"20px"}},[t._v("\n        •\n      ")]),t._v(" "),n("td",[n("nuxt-link",{attrs:{to:"/amp/"+e.slug+"/?utm_source=archives",title:e.title}},[t._v("\n          "+t._s(e.title)+"\n        ")])],1)])}),0)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"space-bottom text-title"},[e("h1",[this._v("Archives")])])}],!1,null,null,null);e.default=component.exports}}]);