(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{179:function(t,e,n){"use strict";n.d(e,"c",function(){return o}),n.d(e,"b",function(){return c}),n.d(e,"a",function(){return d});var r=n(181);n(180);function o(t){var e=Math.round(t/10);return"".concat(new Array(e||1).fill("☕️").join("")," ").concat(t," min read")}function c(t){var e;if("function"!=typeof Date.prototype.toLocaleDateString)return t;t=new Date(t);var n=["en-EN",{day:"numeric",month:"long",year:"numeric"}].filter(Boolean);return(e=t).toLocaleDateString.apply(e,Object(r.a)(n))}function d(t,e,n){var r;return function(){var o=this,c=arguments,d=n&&!r;clearTimeout(r),r=setTimeout(function(){r=null,n||t.apply(o,c)},e),d&&t.apply(o,c)}}},183:function(t,e,n){var map={"./create-simple-like-button-using-firebase-rtdb/index.md":[189,20],"./eslint-formatter-html-extended/index.md":[190,21],"./membuat-blog-keren-dengan-gridsome/index.md":[191,22],"./mencicipi-reasonml-untuk-react/index.md":[192,23],"./migrasi-nuxt-ke-typescript/index.md":[193,24],"./panduan-unit-testing-di-vuejs/index.md":[194,25],"./pengalaman-menjadi-fasilitator-gdk-mws-2018/index.md":[195,26]};function r(t){if(!n.o(map,t))return Promise.resolve().then(function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e});var e=map[t],r=e[0];return n.e(e[1]).then(function(){return n.t(r,7)})}r.keys=function(){return Object.keys(map)},r.id=183,t.exports=r},184:function(t,e,n){var content=n(197);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("40b5eeea",content,!0,{sourceMap:!1})},185:function(t,e,n){"use strict";n(186);var r=n(179),o={name:"MetaData",props:{metaDate:{type:String,default:""},metaMinuteToRead:{type:Number,default:0},isShowStats:{type:Boolean,default:!1},statsLikes:{type:Number,default:0},statsRead:{type:Number,default:0}},data:function(){return{formatReadingTime:r.c,formatPostDate:r.b}}},c=n(4),component=Object(c.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"meta meta--desktop"},[n("small",{staticClass:"meta__date"},[t._v("\n      📆 "+t._s(t.formatPostDate(t.metaDate))+"\n    ")]),t._v(" "),n("small",{staticClass:"dot"},[t._v(" • ")]),t._v(" "),n("small",{staticClass:"meta__read"},[t._v(t._s(t.formatReadingTime(t.metaMinuteToRead)))]),t._v(" "),t.isShowStats?n("small",{staticClass:"dot"},[t._v(" • ")]):t._e(),t._v(" "),t.isShowStats?n("small",[t._v("\n      ❤️ "+t._s(t.statsLikes)+" likes\n    ")]):t._e(),t._v(" "),t.isShowStats?n("small",{staticClass:"dot"},[t._v(" • ")]):t._e(),t._v(" "),t.isShowStats?n("small",[t._v("\n      📓 "+t._s(t.statsRead)+" read\n    ")]):t._e()]),t._v(" "),n("div",{staticClass:"meta meta--mobile"},[n("div",[n("small",{staticClass:"meta__date"},[t._v("\n        📆 "+t._s(t.formatPostDate(t.metaDate))+"\n      ")]),t._v(" "),n("small",{staticClass:"dot"},[t._v(" • ")]),t._v(" "),n("small",{staticClass:"meta__read"},[t._v(t._s(t.formatReadingTime(t.metaMinuteToRead)))])]),t._v(" "),n("div",{staticStyle:{"margin-top":".5em"}},[t.isShowStats?n("small",[t._v("\n        ❤️ "+t._s(t.statsLikes)+" likes\n      ")]):t._e(),t._v(" "),t.isShowStats?n("small",{staticClass:"dot"},[t._v(" • ")]):t._e(),t._v(" "),t.isShowStats?n("small",[t._v("\n        📓 "+t._s(t.statsRead)+" read\n      ")]):t._e()])])])},[],!1,null,null,null);e.a=component.exports},196:function(t,e,n){"use strict";var r=n(184);n.n(r).a},197:function(t,e,n){(t.exports=n(9)(!1)).push([t.i,"h2[data-v-e9e6dbcc] {\n  color: var(--textSubtitle);\n}\nh3[data-v-e9e6dbcc] {\n  color: var(--textWarning);\n}\na[data-v-e9e6dbcc] {\n  color: var(--textHighlight);\n  text-decoration: underline;\n}\np[data-v-e9e6dbcc] {\n  line-height: 1.5;\n}\nimg[data-v-e9e6dbcc] {\n  width: 90%;\n  height: auto;\n  border-radius: 10px;\n  box-shadow: 1px 1px 8px 5px rgba(0, 0, 0, 0.2);\n}\nul[data-v-e9e6dbcc], ol > li[data-v-e9e6dbcc] {\n  line-height: 2;\n}\n",""])},198:function(t,e,n){"use strict";var r={name:"EditContentNav",props:{slug:{type:String,default:""},isDraft:{type:Boolean,default:!1}},computed:{markdownLocation:function(){return this.isDraft?"https://github.com/mazipan/blog-2.0/edit/master/contents/drafts/".concat(this.slug,"/index.md"):"https://github.com/mazipan/blog-2.0/edit/master/contents/published/".concat(this.slug,"/index.md")}}},o=n(4),component=Object(o.a)(r,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("nuxt-link",{attrs:{to:"/"}},[this._v("\n    🏠 Back to Home\n  ")]),this._v(" "),e("span",{staticClass:"dot"},[this._v(" • ")]),this._v(" "),e("a",{attrs:{target:"_blank",rel:"noopener",title:"Edit in Github",href:this.markdownLocation}},[this._v("\n    📝 Edit in Github\n  ")])],1)},[],!1,null,"037bcbec",null);e.a=component.exports},199:function(t,e,n){"use strict";var r=n(206),o=n.n(r),c=(n(207),n(208),n(209),n(210),n(211),n(212),n(213),n(214),n(215),{name:"ContentParser",props:{renderFn:{type:String,default:""},staticRenderFn:{type:String,default:""}},created:function(){this.templateRender=new Function(this.renderFn)(),this.$options.staticRenderFns=new Function(this.staticRenderFn)()},mounted:function(){o.a.highlightAll()},render:function(t){return this.templateRender?this.templateRender():t("div","Rendering")}}),d=(n(196),n(4)),component=Object(d.a)(c,void 0,void 0,!1,null,"e9e6dbcc",null);e.a=component.exports},216:function(t,e,n){var content=n(238);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("bed078cc",content,!0,{sourceMap:!1})},237:function(t,e,n){"use strict";var r=n(216);n.n(r).a},238:function(t,e,n){(t.exports=n(9)(!1)).push([t.i,".page__title[data-v-29d156b8] {\n  font-size: 2em;\n  margin-bottom: .25em;\n}\n.page__content[data-v-29d156b8] {\n  width: 100%;\n  word-break: break-word;\n  margin: 2em 0;\n}\n.page__date[data-v-29d156b8] {\n  color: var(--textSubtitle);\n}\n.page__footer[data-v-29d156b8] {\n  margin: 1em 0;\n}\n.block-wrap[data-v-29d156b8] {\n  margin: 1em 0;\n  display: flex;\n  justify-items: center;\n  align-items: center;\n}\n.like[data-v-29d156b8], .share[data-v-29d156b8] {\n  display: flex;\n}\n.like-btn[data-v-29d156b8], .share-btn[data-v-29d156b8] {\n    color: var(--textNormal);\n    background: var(--textLink);\n    padding: .25em 1em;\n    border-radius: .25em;\n    border: 0;\n    outline: 0;\n    cursor: pointer;\n    margin-right: 1em;\n    text-decoration: none;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n",""])},255:function(t,e,n){"use strict";n.r(e);n(18);var r=n(2),o=n(185),c=n(199),d=n(198),l=n(179),m={name:"SlugPage",components:{MetaData:o.a,EditContentNav:d.a,ContentParser:c.a},head:function(){var title="".concat(this.meta.title),t="".concat(this.meta.description),e="".concat(this.productionUrl,"/").concat(this.meta.slug,"/");return{title:title,meta:[{hid:"description",name:"description",content:t},{hid:"apple-mobile-web-app-title",name:"apple-mobile-web-app-title",content:title},{hid:"og:title",property:"og:title",content:title},{hid:"og:description",property:"og:description",content:t},{hid:"og:url",property:"og:url",content:e},{hid:"og:type",property:"og:type",content:"article"},{hid:"article:published_time",property:"article:published_time",content:new Date(this.meta.date).toISOString()},{hid:"article:section",property:"article:section",content:"Technology"},{hid:"twitter:title",name:"twitter:title",content:title},{hid:"twitter:description",name:"twitter:description",content:t},{hid:"twitter:url",name:"twitter:url",content:e}],links:[{hid:"canonical",rel:"canonical",href:e}]}},data:function(){return{productionUrl:"https://www.mazipan.xyz",formatReadingTime:l.c,formatPostDate:l.b,youClapped:0,claps:0,hits:0,isSupportWebshare:!1}},computed:{encodedTitle:function(){return encodeURIComponent("".concat(this.meta.title))},encodedDesc:function(){return encodeURIComponent("".concat(this.meta.description))},encodedUrl:function(){return encodeURIComponent("".concat(this.productionUrl,"/").concat(this.meta.slug,"?utm_source=sosial-share"))},fbLinkShare:function(){return"https://www.facebook.com/sharer/sharer.php?u=".concat(this.encodedUrl,"&title=").concat(this.encodedTitle,"&description=").concat(this.encodedDesc,"&quote=").concat(this.encodedDesc)},twitterLinkShare:function(){return"https://twitter.com/intent/tweet?text=".concat(this.encodedTitle,"-").concat(this.encodedDesc,"&url=").concat(this.encodedUrl,"&via=maz_ipan")},linkedinLinkShare:function(){return"https://www.linkedin.com/sharing/share-offsite/?url=".concat(this.encodedUrl)}},asyncData:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(e){var r,o,c;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.params,t.next=3,n(183)("./".concat(r.slug,"/index.md"));case 3:return o=t.sent,c=o.attributes,t.abrupt("return",{meta:{title:c.title,slug:c.slug,date:c.date,minute2read:c.minute2read,description:c.description},renderFn:o.vue.render,staticRenderFn:o.vue.staticRenderFns});case 6:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},h=(n(237),n(4)),component=Object(h.a)(m,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"page"},[n("h1",{staticClass:"page__title text-title"},[t._v("\n    "+t._s(t.meta.title)+"\n  ")]),t._v(" "),n("MetaData",{attrs:{"meta-date":t.meta.date,"meta-minute-to-read":t.meta.minute2read,"is-show-stats":!1}}),t._v(" "),n("div",{staticClass:"page__content"},[n("ContentParser",{attrs:{"render-fn":t.renderFn,"static-render-fn":t.staticRenderFn}}),t._v(" "),n("EditContentNav",{attrs:{slug:t.meta.slug}})],1),t._v(" "),n("hr"),t._v(" "),n("div",{staticClass:"page__footer"},[t._v("\n    🚨Do you like this article? help me to click ❤️ button, share to your followers and subscribe the newsletter.\n  ")])],1)},[],!1,null,"29d156b8",null);e.default=component.exports}}]);