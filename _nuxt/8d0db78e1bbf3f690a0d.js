(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{165:function(t,e,n){"use strict";n.d(e,"c",function(){return o}),n.d(e,"b",function(){return c}),n.d(e,"a",function(){return l});var r=n(167);n(166);function o(t){var e=Math.round(t/10);return"".concat(new Array(e||1).fill("☕️").join("")," ").concat(t," min read")}function c(t){var e;if("function"!=typeof Date.prototype.toLocaleDateString)return t;t=new Date(t);var n=["en-EN",{day:"numeric",month:"long",year:"numeric"}].filter(Boolean);return(e=t).toLocaleDateString.apply(e,Object(r.a)(n))}function l(t,e,n){var r;return function(){var o=this,c=arguments,l=function(){r=null,n||t.apply(o,c)},m=n&&!r;clearTimeout(r),r=setTimeout(l,e),m&&t.apply(o,c)}}},166:function(t,e,n){var r=n(7);r(r.P,"Array",{fill:n(169)}),n(57)("fill")},167:function(t,e,n){"use strict";function r(t){return function(t){if(Array.isArray(t)){for(var i=0,e=new Array(t.length);i<t.length;i++)e[i]=t[i];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(e,"a",function(){return r})},168:function(t,e,n){"use strict";n(170);var r=n(165),o={name:"MetaData",props:{metaDate:{type:String,default:""},metaMinuteToRead:{type:Number,default:0},isShowStats:{type:Boolean,default:!1},statsLikes:{type:Number,default:0},statsRead:{type:Number,default:0}},data:function(){return{formatReadingTime:r.c,formatPostDate:r.b}}},c=n(2),component=Object(c.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"meta meta--desktop"},[n("small",{staticClass:"meta__date"},[t._v("\n      📆 "+t._s(t.formatPostDate(t.metaDate))+"\n    ")]),t._v(" "),n("small",{staticClass:"dot"},[t._v(" • ")]),t._v(" "),n("small",{staticClass:"meta__read"},[t._v(t._s(t.formatReadingTime(t.metaMinuteToRead)))]),t._v(" "),t.isShowStats?n("small",{staticClass:"dot"},[t._v(" • ")]):t._e(),t._v(" "),t.isShowStats?n("small",[t._v("\n      ❤️ "+t._s(t.statsLikes)+" likes\n    ")]):t._e(),t._v(" "),t.isShowStats?n("small",{staticClass:"dot"},[t._v(" • ")]):t._e(),t._v(" "),t.isShowStats?n("small",[t._v("\n      📓 "+t._s(t.statsRead)+" read\n    ")]):t._e()]),t._v(" "),n("div",{staticClass:"meta meta--mobile"},[n("div",[n("small",{staticClass:"meta__date"},[t._v("\n        📆 "+t._s(t.formatPostDate(t.metaDate))+"\n      ")]),t._v(" "),n("small",{staticClass:"dot"},[t._v(" • ")]),t._v(" "),n("small",{staticClass:"meta__read"},[t._v(t._s(t.formatReadingTime(t.metaMinuteToRead)))])]),t._v(" "),n("div",{staticStyle:{"margin-top":".5em"}},[t.isShowStats?n("small",[t._v("\n        ❤️ "+t._s(t.statsLikes)+" likes\n      ")]):t._e(),t._v(" "),t.isShowStats?n("small",{staticClass:"dot"},[t._v(" • ")]):t._e(),t._v(" "),t.isShowStats?n("small",[t._v("\n        📓 "+t._s(t.statsRead)+" read\n      ")]):t._e()])])])},[],!1,null,null,null);e.a=component.exports},169:function(t,e,n){"use strict";var r=n(22),o=n(101),c=n(18);t.exports=function(t){for(var e=r(this),n=c(e.length),l=arguments.length,m=o(l>1?arguments[1]:void 0,n),f=l>2?arguments[2]:void 0,d=void 0===f?n:o(f,n);d>m;)e[m++]=t;return e}},170:function(t,e,n){"use strict";var r=n(5),o=n(19),c=n(27),l=n(102),m=n(58),f=n(11),d=n(40).f,_=n(59).f,v=n(9).f,h=n(174).trim,y=r.Number,w=y,S=y.prototype,x="Number"==c(n(74)(S)),N="trim"in String.prototype,C=function(t){var e=m(t,!1);if("string"==typeof e&&e.length>2){var n,r,o,c=(e=N?e.trim():h(e,3)).charCodeAt(0);if(43===c||45===c){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===c){switch(e.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+e}for(var code,l=e.slice(2),i=0,f=l.length;i<f;i++)if((code=l.charCodeAt(i))<48||code>o)return NaN;return parseInt(l,r)}}return+e};if(!y(" 0o1")||!y("0b1")||y("+0x1")){y=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof y&&(x?f(function(){S.valueOf.call(n)}):"Number"!=c(n))?l(new w(C(e)),n,y):C(e)};for(var k,E=n(8)?d(w):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),I=0;E.length>I;I++)o(w,k=E[I])&&!o(y,k)&&v(y,k,_(w,k));y.prototype=S,S.constructor=y,n(12)(r,"Number",y)}},171:function(t,e,n){var map={"./create-awesome-blog-with-gridsome/index.md":[176,33],"./create-simple-like-button-using-firebase-rtdb/index.md":[177,35],"./eslint-formatter-html-extended/index.md":[178,37],"./experience-in-become-fasilitator-gdk-mws-2018/index.md":[179,39],"./generate-amp-pages-in-nuxtjs/index.md":[180,41],"./migrate-nuxt-to-typescript/index.md":[181,43],"./tasting-reasonml-for-react/index.md":[182,45],"./the-art-of-deleting-and-updating-the-code/index.md":[183,47],"./unit-testing-guide-in-vuejs/index.md":[184,49]};function r(t){if(!n.o(map,t))return Promise.resolve().then(function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e});var e=map[t],r=e[0];return n.e(e[1]).then(function(){return n.t(r,7)})}r.keys=function(){return Object.keys(map)},r.id=171,t.exports=r},174:function(t,e,n){var r=n(7),o=n(26),c=n(11),l=n(175),m="["+l+"]",f=RegExp("^"+m+m+"*"),d=RegExp(m+m+"*$"),_=function(t,e,n){var o={},m=c(function(){return!!l[t]()||"​"!="​"[t]()}),f=o[t]=m?e(v):l[t];n&&(o[n]=f),r(r.P+r.F*m,"String",o)},v=_.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(f,"")),2&e&&(t=t.replace(d,"")),t};t.exports=_},175:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},268:function(t,e,n){"use strict";n.r(e);n(23),n(13),n(73),n(17);var r,o=n(3),c=n(75),l=n(165),m={name:"HomepageAmp",layout:"amp-homepage",components:{MetaData:n(168).a},head:function(){return{link:[{hid:"canonical",rel:"canonical",href:"".concat(this.productionUrl,"/")}]}},data:function(){return{productionUrl:"https://www.mazipan.xyz",formatReadingTime:l.c,formatPostDate:l.b}},asyncData:(r=Object(o.a)(regeneratorRuntime.mark(function t(e){var r,l;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return l=function(){return(l=Object(o.a)(regeneratorRuntime.mark(function t(e){var r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n(171)("./".concat(e,"/index.md"));case 2:return r=t.sent,t.abrupt("return",r.attributes);case 4:case"end":return t.stop()}},t)}))).apply(this,arguments)},r=function(t){return l.apply(this,arguments)},e.store,t.abrupt("return",Promise.all(c.a.data.map(function(t){return r(t)})).then(function(t){return{metas:t}}));case 4:case"end":return t.stop()}},t)})),function(t){return r.apply(this,arguments)})},f=n(2),component=Object(f.a)(m,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"pages"},t._l(t.metas,function(meta){return n("div",{key:meta.title,staticClass:"pages__item"},[meta.sponsored?n("span",{staticClass:"pages__sponsored"},[t._v("sponsored")]):t._e(),t._v(" "),n("nuxt-link",{staticClass:"pages__link",attrs:{to:"/amp/"+meta.slug+"/?utm_source=home",title:meta.title}},[n("h2",{staticClass:"pages__title"},[t._v("\n        "+t._s(meta.title)+"\n      ")])]),t._v(" "),n("MetaData",{attrs:{"meta-date":meta.date,"meta-minute-to-read":meta.minute2read}}),t._v(" "),n("div",[n("p",[t._v("\n        "+t._s(meta.description)+"\n      ")])]),t._v(" "),n("div",{staticClass:"pages__tags"},t._l(meta.categories,function(e){return n("div",{key:e,staticClass:"pages__tag"},[n("nuxt-link",{attrs:{to:"/amp/category/"+e+"?utm_source=home",title:e}},[t._v("\n          #"+t._s(e)+"\n        ")])],1)}),0)],1)}),0)},[],!1,null,null,null);e.default=component.exports}}]);