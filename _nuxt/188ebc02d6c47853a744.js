(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{171:function(e,t,n){"use strict";n.d(t,"c",function(){return o}),n.d(t,"b",function(){return d}),n.d(t,"a",function(){return c}),n.d(t,"e",function(){return l}),n.d(t,"d",function(){return m});n(14),n(22),n(17),n(59),n(2),n(60);var r=n(176);n(175),n(13);function o(e){var t=Math.round(e/10);return"".concat(new Array(t||1).fill("☕️").join("")," ").concat(e," min read")}function d(e){var t;if("function"!=typeof Date.prototype.toLocaleDateString)return e;e=new Date(e);var n=["en-EN",{day:"numeric",month:"long",year:"numeric"}].filter(Boolean);return(t=e).toLocaleDateString.apply(t,Object(r.a)(n))}function c(e,t,n){var r;return function(){var o=this,d=arguments,c=function(){r=null,n||e.apply(o,d)},l=n&&!r;clearTimeout(r),r=setTimeout(c,t),l&&e.apply(o,d)}}function l(e){return e&&e.replace(/"src":(?:[^=>][^"]*","data-src"|[^=>"]*)/gi,'"src"')}function m(e){var t=e.title,title=void 0===t?"":t,n=e.description,o=void 0===n?"":n,d=e.url,c=void 0===d?"":d,l=e.imageUrl,m=void 0===l?"":l,h=e.ampUrl,f=void 0===h?"":h,v=e.publishedDate,w=void 0===v?new Date:v,x=e.articleSection,y=void 0===x?"Technology":x,_=e.withAmpHtml,j=void 0!==_&&_,k=e.withCanonical,A=void 0!==k&&k,S=e.withArticle,D=void 0!==S&&S,meta=[{hid:"description",name:"description",content:o},{hid:"apple-mobile-web-app-title",name:"apple-mobile-web-app-title",content:title},{hid:"og:title",property:"og:title",content:title},{hid:"og:description",property:"og:description",content:o},{hid:"og:url",property:"og:url",content:c},{hid:"twitter:title",name:"twitter:title",content:title},{hid:"twitter:description",name:"twitter:description",content:o},{hid:"twitter:url",name:"twitter:url",content:c}],E=[{hid:"og:image",property:"og:image",content:m},{hid:"og:image:secure_url",property:"og:image:secure_url",content:m},{hid:"twitter:image:src",name:"twitter:image:src",content:m}],O=[{hid:"og:type",property:"og:type",content:"article"},{hid:"article:published_time",property:"article:published_time",content:new Date(w).toISOString()},{hid:"article:section",property:"article:section",content:y}];m&&(meta=[].concat(Object(r.a)(meta),E)),D&&(meta=[].concat(Object(r.a)(meta),O));var link=[];return j&&(link=[{hid:"amphtml",rel:"amphtml",href:f}]),A&&(link=[{hid:"canonical",rel:"canonical",href:c}]),{title:title,meta:meta,link:link}}},172:function(e,t,n){"use strict";var r=n(171),o=n(13);t.a={data:function(){return{formatReadingTime:r.c,formatPostDate:r.b,productionUrl:o.h,ENABLE_ADS:o.g,ADS_CLIENT:o.a}}}},174:function(e,t,n){var map={"./":[42,9],"./archives/blog-2-0-in-nuxtjs/index.md":[206,7,58],"./categories":[80,9],"./categories.js":[80,9],"./drafts":[78,9],"./drafts/":[78,9],"./drafts/cara-saya-belajar-teknologi-baru/index.md":[188,7,4],"./drafts/every-working-environtment-is-unique/en.md":[207,7,59],"./drafts/every-working-environtment-is-unique/index.md":[189,7,5],"./drafts/index":[78,9],"./drafts/index.js":[78,9],"./drafts/learn-programming-for-non-tech/en.md":[208,7,60],"./drafts/learn-programming-for-non-tech/index.md":[190,7,6],"./drafts/tokopedia-tech-interview-process/en.md":[209,7,61],"./drafts/tokopedia-tech-interview-process/index.md":[191,7,7],"./ghibah":[79,9],"./ghibah/":[79,9],"./ghibah/01-code-ownership/index.md":[192,7,8],"./ghibah/02-gaji-programmer/index.md":[193,7,9],"./ghibah/03-pindah-kerja/index.md":[194,7,10],"./ghibah/04-cto-gadungan/index.md":[195,7,11],"./ghibah/index":[79,9],"./ghibah/index.js":[79,9],"./index":[42,9],"./index.js":[42,9],"./node-index":[173,7,3],"./node-index.js":[173,7,3],"./published/create-awesome-blog-with-gridsome/en.md":[196,7,12],"./published/create-awesome-blog-with-gridsome/index.md":[178,7,13],"./published/create-simple-like-button-using-firebase-rtdb/en.md":[197,7,14],"./published/create-simple-like-button-using-firebase-rtdb/index.md":[179,7,15],"./published/eslint-formatter-html-extended/en.md":[198,7,16],"./published/eslint-formatter-html-extended/index.md":[180,7,17],"./published/experience-in-become-fasilitator-gdk-mws-2018/en.md":[199,7,18],"./published/experience-in-become-fasilitator-gdk-mws-2018/index.md":[181,7,19],"./published/generate-amp-pages-in-nuxtjs/en.md":[200,7,20],"./published/generate-amp-pages-in-nuxtjs/index.md":[182,7,21],"./published/lesson-learned-from-building-tokopedia-anniv-microsite/en.md":[201,7,22],"./published/lesson-learned-from-building-tokopedia-anniv-microsite/index.md":[183,7,23],"./published/migrate-nuxt-to-typescript/en.md":[202,7,24],"./published/migrate-nuxt-to-typescript/index.md":[184,7,25],"./published/tasting-reasonml-for-react/en.md":[203,7,26],"./published/tasting-reasonml-for-react/index.md":[185,7,27],"./published/the-art-of-deleting-and-updating-the-code/en.md":[204,7,28],"./published/the-art-of-deleting-and-updating-the-code/index.md":[186,7,29],"./published/unit-testing-guide-in-vuejs/en.md":[205,7,30],"./published/unit-testing-guide-in-vuejs/index.md":[187,7,31]};function r(e){if(!n.o(map,e))return Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t});var t=map[e],r=t[0];return Promise.all(t.slice(2).map(n.e)).then(function(){return n.t(r,t[1])})}r.keys=function(){return Object.keys(map)},r.id=174,e.exports=r},175:function(e,t,n){var r=n(7);r(r.P,"Array",{fill:n(177)}),n(61)("fill")},176:function(e,t,n){"use strict";function r(e){return function(e){if(Array.isArray(e)){for(var i=0,t=new Array(e.length);i<e.length;i++)t[i]=e[i];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(t,"a",function(){return r})},177:function(e,t,n){"use strict";var r=n(23),o=n(107),d=n(18);e.exports=function(e){for(var t=r(this),n=d(t.length),c=arguments.length,l=o(c>1?arguments[1]:void 0,n),m=c>2?arguments[2]:void 0,h=void 0===m?n:o(m,n);h>l;)t[l++]=e;return t}},291:function(e,t,n){"use strict";n.r(t);var r={name:"AboutPage",mixins:[n(172).a],head:function(){var title="About | @mazipan",e="".concat(this.productionUrl,"/about/"),t="".concat(this.productionUrl,"/amp/about/"),n="".concat(this.productionUrl,"/images/profile-rounded.png");return{title:title,meta:[{hid:"description",name:"description",content:"Page About"},{hid:"apple-mobile-web-app-title",name:"apple-mobile-web-app-title",content:title},{hid:"og:title",property:"og:title",content:title},{hid:"og:description",property:"og:description",content:"Page About"},{hid:"og:url",property:"og:url",content:e},{hid:"og:image",property:"og:image",content:n},{hid:"og:image:secure_url",property:"og:image:secure_url",content:n},{hid:"twitter:title",name:"twitter:title",content:title},{hid:"twitter:description",name:"twitter:description",content:"Page About"},{hid:"twitter:url",name:"twitter:url",content:e},{hid:"twitter:image:src",name:"twitter:image:src",content:n}],link:[{hid:"amphtml",rel:"amphtml",href:t}]}}},o=n(3),component=Object(o.a)(r,function(){var e=this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"about"},[n("div",{staticClass:"space-bottom text-title"},[n("h1",[e._v("About")])]),e._v(" "),n("div",[n("img",{attrs:{src:"/images/profile-rounded.png",alt:"@mazipan",height:"76px",width:"76px"}}),e._v(" "),n("br"),n("br"),e._v("Hi, I am Irfan Maulana.\n    "),n("br"),n("br"),e._v("Principal Engineer in Tokopedia. Former Software Engineer in Bizzy, Blibli.com and SML Technologies.\n\n    "),n("br"),n("br"),e._v("An experienced software engineer especially in frontend side.\n    "),n("br"),e._v("Having deep knowledge in HTML, CSS (with its pre-processor) and JavaScript with the various framework. Write good quality, well tested, and fast delivered code.\n    "),n("br"),e._v("Experience in architecting frontend codebase.\n\n    "),n("br"),n("br"),e._v("A well-known figure in the programming community, open-source creator, and writer for many technical articles.\n  ")])])}],!1,null,"a0e54244",null);t.default=component.exports}}]);