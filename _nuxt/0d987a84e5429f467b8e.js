(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{190:function(t,e,n){"use strict";n.d(e,"c",function(){return o}),n.d(e,"b",function(){return c}),n.d(e,"a",function(){return l});var r=n(211);n(191);function o(t){var e=Math.round(t/5);return"".concat(new Array(e||1).fill("☕️").join("")," ").concat(t," min read")}function c(t){var e;if("function"!=typeof Date.prototype.toLocaleDateString)return t;t=new Date(t);var n=["en-EN",{day:"numeric",month:"long",year:"numeric"}].filter(Boolean);return(e=t).toLocaleDateString.apply(e,Object(r.a)(n))}function l(t,e,n){var r;return function(){var o=this,c=arguments,l=n&&!r;clearTimeout(r),r=setTimeout(function(){r=null,n||t.apply(o,c)},e),l&&t.apply(o,c)}}},193:function(t,e,n){var map={"./blog-2-0-in-nuxtjs/index.md":[165,0],"./create-simple-like-button-using-firebase-rtdb/index.md":[166,1],"./eslint-formatter-html-extended/index.md":[167,2],"./pengalaman-menjadi-fasilitator-gdk-mws-2018/index.md":[168,3]};function r(t){if(!n.o(map,t))return Promise.resolve().then(function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e});var e=map[t],r=e[0];return n.e(e[1]).then(function(){return n.t(r,7)})}r.keys=function(){return Object.keys(map)},r.id=193,t.exports=r},195:function(t,e,n){var content=n(232);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("6d1c08ec",content,!0,{sourceMap:!1})},210:function(t,e,n){var content=n(281);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("4a64eea3",content,!0,{sourceMap:!1})},231:function(t,e,n){"use strict";var r=n(195);n.n(r).a},232:function(t,e,n){(t.exports=n(14)(!1)).push([t.i,"a[data-v-0acbe3af] {\n  color: var(--textHighlight);\n  text-decoration: underline;\n}\np[data-v-0acbe3af] {\n  line-height: 1.5;\n}\nimg[data-v-0acbe3af] {\n  width: 90%;\n  height: auto;\n  border-radius: 10px;\n  box-shadow: 1px 1px 8px 5px rgba(0, 0, 0, 0.2);\n}\n",""])},280:function(t,e,n){"use strict";var r=n(210);n.n(r).a},281:function(t,e,n){(t.exports=n(14)(!1)).push([t.i,".page__title[data-v-1f37ec10] {\n  font-size: 2em;\n  margin-bottom: .25em;\n}\n.page__content[data-v-1f37ec10] {\n  width: 100%;\n  word-break: break-word;\n  margin: 2em 0;\n}\n.page__date[data-v-1f37ec10] {\n  color: var(--textSubtitle);\n}\n.page__footer[data-v-1f37ec10] {\n  margin: 1em 0;\n}\n.block-wrap[data-v-1f37ec10] {\n  margin: 1em 0;\n  display: flex;\n  justify-items: center;\n  align-items: center;\n}\n.share-btn[data-v-1f37ec10] {\n  color: var(--textNormal);\n  background: var(--textLink);\n  padding: .25em 1em;\n  border-radius: .25em;\n  border: 0;\n  outline: 0;\n  cursor: pointer;\n  margin-right: 1em;\n  text-decoration: none;\n}\n.like-plus[data-v-1f37ec10] {\n  color: var(--textNormal);\n  background: var(--textLink);\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  position: absolute;\n  margin-left: 130px;\n  padding: 10px 5px;\n  margin-top: -33px;\n}\n.like-btn[data-v-1f37ec10] {\n  color: var(--textNormal);\n  background: var(--textLink);\n  padding: .25em 1em;\n  border-radius: .25em;\n  border: 0;\n  outline: 0;\n  cursor: pointer;\n  margin-right: 1em;\n  text-decoration: none;\n}\n",""])},282:function(t,e,n){"use strict";n.r(e);var r=n(90),o=(n(20),n(3)),c=n(228),l=n.n(c),d=(n(229),{name:"ContentParser",props:{renderFn:{type:String,default:""},staticRenderFn:{type:String,default:""}},created:function(){this.templateRender=new Function(this.renderFn)(),this.$options.staticRenderFns=new Function(this.staticRenderFn)()},mounted:function(){l.a.highlightAll()},render:function(t){return this.templateRender?this.templateRender():t("div","Rendering")}}),h=(n(231),n(7)),m=Object(h.a)(d,void 0,void 0,!1,null,"0acbe3af",null).exports,f=n(190),v=n(92),_=n(233);function k(t){return"".concat(t,"/claps")}function w(t){return"".concat(t,"/hits")}function x(t,e){var n=k(e);return t.database().ref(n)}function S(t,e){var n=w(e);return t.database().ref(n)}function y(t,e){t.database().ref().update(e)}n(277);var C=null,O={name:"SlugPage",components:{ContentParser:m},head:function(){var title="".concat(this.meta.title),t="".concat(this.meta.description),e="".concat(this.productionUrl,"/").concat(this.meta.slug,"/");return{title:title,meta:[{hid:"description",name:"description",content:t},{hid:"apple-mobile-web-app-title",name:"apple-mobile-web-app-title",content:title},{hid:"og:title",property:"og:title",content:title},{hid:"og:description",property:"og:description",content:t},{hid:"og:url",property:"og:url",content:e},{hid:"og:type",property:"og:type",content:"article"},{hid:"article:published_time",property:"article:published_time",content:new Date(this.meta.date).toISOString()},{hid:"article:section",property:"article:section",content:"Technology"},{hid:"twitter:title",name:"twitter:title",content:title},{hid:"twitter:description",name:"twitter:description",content:t},{hid:"twitter:url",name:"twitter:url",content:e}]}},data:function(){return{productionUrl:"https://www.mazipan.xyz",formatReadingTime:f.c,youClapped:0,claps:0,hits:0,isSupportWebshare:!1}},computed:{encodedTitle:function(){return encodeURIComponent("".concat(this.meta.title))},encodedDesc:function(){return encodeURIComponent("".concat(this.meta.description))},encodedUrl:function(){return encodeURIComponent("".concat(this.productionUrl,"/").concat(this.meta.slug))},fbLinkShare:function(){return"https://www.facebook.com/sharer/sharer.php?u=".concat(this.encodedUrl,"&title=").concat(this.encodedTitle,"&description=").concat(this.encodedDesc,"&quote=").concat(this.encodedDesc)},twitterLinkShare:function(){return"https://twitter.com/intent/tweet?text=".concat(this.encodedTitle,"-").concat(this.encodedDesc,"&url=").concat(this.encodedUrl,"&via=maz_ipan")},linkedinLinkShare:function(){return"https://www.linkedin.com/sharing/share-offsite/?url=".concat(this.encodedUrl)}},asyncData:function(){var t=Object(o.a)(regeneratorRuntime.mark(function t(e){var r,o,c;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.params,t.next=3,n(193)("./".concat(r.slug,"/index.md"));case 3:return o=t.sent,c=o.attributes,t.abrupt("return",{meta:{title:c.title,slug:c.slug,date:c.date,minute2read:c.minute2read,description:c.description},renderFn:o.vue.render,staticRenderFn:o.vue.staticRenderFns});case 6:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),mounted:function(){var t=this;window.navigator.share&&(this.isSupportWebshare=!0),function(t,e,n){S(t,e).once("value",n)}(C=_.initializeApp({apiKey:"AIzaSyAjEDtmUc9C_mogAdlXPA3gOXwqQnJJP5c",authDomain:"mazipan-blog.firebaseapp.com",databaseURL:"https://mazipan-blog.firebaseio.com",projectId:"mazipan-blog",storageBucket:"",messagingSenderId:"331001770357"}),this.meta.slug,function(e){if(t.hits=e.val(),t.hits)!function(t,e,n){S(t,e).set(n)}(C,t.meta.slug,t.hits+1);else{var n=Object(r.a)({},w(t.meta.slug),1);y(C,n)}}),function(t,e,n){x(t,e).once("value",n)}(C,this.meta.slug,function(e){if(t.claps=e.val(),!t.claps){var n=Object(r.a)({},k(t.meta.slug),1);y(C,n)}}),function(t,e,n){x(t,e).on("value",n)}(C,this.meta.slug,function(e){Object(f.a)(function(){t.claps=e.val()},300)()})},methods:{trackSocialShare:function(t){Object(v.c)(this,this.meta.slug,t)},onClickShare:function(){var title="".concat(this.meta.title),t="".concat(this.meta.description),e="/".concat(this.meta.slug);Object(v.d)(this,this.meta.slug);var data={title:title,text:"".concat(t),url:e};window.navigator.share&&window.navigator.share(data)},onClickLike:function(){var t=this;C&&this.youClapped<10&&Object(f.a)(function(){Object(v.b)(t,t.meta.slug),t.youClapped+=1,function(t,e,n){x(t,e).set(n)}(C,t.meta.slug,t.claps+1)},300)()}}},j=(n(280),Object(h.a)(O,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"page"},[n("nuxt-link",{staticClass:"page__link",attrs:{to:"/"+t.meta.slug+"/",title:t.meta.title}},[n("h2",{staticClass:"page__title"},[t._v("\n      "+t._s(t.meta.title)+"\n    ")])]),t._v(" "),n("div",{staticClass:"meta"},[n("small",{staticClass:"meta__date"},[t._v(t._s(t.meta.date))]),t._v(" "),n("small",{staticClass:"dot"},[t._v(" • ")]),t._v(" "),n("small",{staticClass:"meta__read"},[t._v(t._s(t.formatReadingTime(t.meta.minute2read)))]),t._v(" "),n("small",{staticClass:"dot"},[t._v(" • ")]),t._v(" "),n("small",[t._v("\n      👍 "+t._s(t.claps)+" likes\n    ")]),t._v(" "),n("small",{staticClass:"dot"},[t._v(" • ")]),t._v(" "),n("small",[t._v("\n      📖 "+t._s(t.hits)+" read\n    ")])]),t._v(" "),n("div",{staticClass:"page__content"},[n("ContentParser",{attrs:{"render-fn":t.renderFn,"static-render-fn":t.staticRenderFn}})],1),t._v(" "),n("hr"),t._v(" "),n("div",{staticClass:"page__footer"},[t._v("\n    Do you like this article? help me to click this like button, share it to your followers and subscribe the newsletter.\n\n    "),n("div",{staticClass:"block-wrap"},[t.isSupportWebshare?n("div",{staticClass:"share"},[n("a",{staticClass:"share-btn",attrs:{title:"Share this article"},on:{click:t.onClickShare}},[t._v("\n          📣 Share\n        ")])]):n("div",{staticClass:"share"},[n("a",{staticClass:"share-btn",attrs:{title:"Share to facebook",href:t.fbLinkShare,target:"_blank",rel:"noopener"},nativeOn:{click:function(e){return t.trackSocialShare("Facebook")}}},[t._v("\n          🎭 FB Share\n        ")]),t._v(" "),n("a",{staticClass:"share-btn",attrs:{title:"Share to twitter",href:t.twitterLinkShare,target:"_blank",rel:"noopener"},nativeOn:{click:function(e){return t.trackSocialShare("Twitter")}}},[t._v("\n          🐦 Twitter Share\n        ")]),t._v(" "),n("a",{staticClass:"share-btn",attrs:{title:"Share to linkedin",href:t.linkedinLinkShare,target:"_blank",rel:"noopener"},nativeOn:{click:function(e){return t.trackSocialShare("LinkedIn")}}},[t._v("\n          💼 LinkedIn Share\n        ")])]),t._v(" "),n("div",{staticClass:"like"},[n("a",{staticClass:"like-btn",attrs:{title:"Like this article"},on:{click:t.onClickLike}},[t._v("\n          👍 "+t._s(t.claps)+"\n        ")])])])])],1)},[],!1,null,"1f37ec10",null));e.default=j.exports}}]);