(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{303:function(t,e,n){"use strict";var s=n(9),r=n(4),i=n(96),a=n(19),c=n(7),u=n(26),o=n(305),f=n(44),l=n(3),h=n(45),p=n(69).f,d=n(25).f,m=n(8).f,b=n(308).trim,v=r.Number,g=v.prototype,N="Number"==u(h(g)),y=function(t){var e,n,s,r,i,a,c,u,o=f(t,!1);if("string"==typeof o&&o.length>2)if(43===(e=(o=b(o)).charCodeAt(0))||45===e){if(88===(n=o.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(o.charCodeAt(1)){case 66:case 98:s=2,r=49;break;case 79:case 111:s=8,r=55;break;default:return+o}for(a=(i=o.slice(2)).length,c=0;c<a;c++)if((u=i.charCodeAt(c))<48||u>r)return NaN;return parseInt(i,s)}return+o};if(i("Number",!v(" 0o1")||!v("0b1")||v("+0x1"))){for(var _,j=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof j&&(N?l((function(){g.valueOf.call(n)})):"Number"!=u(n))?o(new v(y(e)),n,j):y(e)},C=s?p(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),O=0;C.length>O;O++)c(v,_=C[O])&&!c(j,_)&&m(j,_,d(v,_));j.prototype=g,g.constructor=j,a(r,"Number",j)}},305:function(t,e,n){var s=n(5),r=n(161);t.exports=function(t,e,n){var i,a;return r&&"function"==typeof(i=e.constructor)&&i!==n&&s(a=i.prototype)&&a!==n.prototype&&r(t,a),t}},307:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},308:function(t,e,n){var s=n(24),r="["+n(307)+"]",i=RegExp("^"+r+r+"*"),a=RegExp(r+r+"*$"),c=function(t){return function(e){var n=String(s(e));return 1&t&&(n=n.replace(i,"")),2&t&&(n=n.replace(a,"")),n}};t.exports={start:c(1),end:c(2),trim:c(3)}},314:function(t,e,n){},315:function(t,e,n){},321:function(t,e,n){},322:function(t,e,n){},323:function(t,e,n){},324:function(t,e,n){},325:function(t,e,n){},327:function(t,e,n){"use strict";n(314)},328:function(t,e,n){"use strict";n(315)},333:function(t,e,n){"use strict";n(303),n(95);var s={namee:"NRow",props:{gutter:{type:[String,Number]},align:{type:String},justify:{type:String}},computed:{styleObj:function(){var t={};if(this.gutter){var e=this.gutter/2;t.marginLeft="-".concat(e,"px"),t.marginRight="-".concat(e,"px")}return this.align&&(t.alignItems={top:"flex-start",middle:"center",bottom:"flex-end"}[this.align]),this.justify&&(t.justifyContent=this.justify),t}},mounted:function(){var t=this;this.gutter&&this.$children.forEach((function(e){e.gutter=t.gutter}))}},r=(n(327),n(43)),i=Object(r.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"row-container",style:this.styleObj},[this._t("default")],2)}),[],!1,null,"41e44cf6",null);e.a=i.exports},334:function(t,e,n){"use strict";var s=n(32),r=(n(303),n(162),n(97),n(95),{name:"NCol",props:{span:{type:[String,Number]},offset:{type:[String,Number]},xs:{type:[String,Number,Object]},sm:{type:[String,Number,Object]},md:{type:[String,Number,Object]},lg:{type:[String,Number,Object]},xl:{type:[String,Number,Object]},xxl:{type:[String,Number,Object]}},data:function(){return{gutter:0}},computed:{className:function(){var t=[];return this.span&&t.push("col-".concat(this.span)),this.offset&&t.push("offset-".concat(this.offset)),t.push.apply(t,Object(s.a)(this.parseClass("xs")).concat(Object(s.a)(this.parseClass("sm")),Object(s.a)(this.parseClass("md")),Object(s.a)(this.parseClass("lg")),Object(s.a)(this.parseClass("xl")))),t},styleObj:function(){var t={};if(this.gutter){var e=this.gutter/2;t.paddingLeft="".concat(e,"px"),t.paddingRight="".concat(e,"px")}return t}},methods:{parseClass:function(t){var e=[];if(!this[t])return e;var n=this[t];return"string"!=typeof n&&"number"!=typeof n||(n={span:n}),Object.keys(n).forEach((function(s){e.push("".concat("span"===s?"col":"offset","-").concat(t,"-").concat(n[s]))})),e}}}),i=(n(328),n(43)),a=Object(i.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"col-container",class:this.className,style:this.styleObj},[this._t("default")],2)}),[],!1,null,"fff9e2b2",null);e.a=a.exports},337:function(t,e,n){"use strict";n(321)},338:function(t,e,n){"use strict";n(322)},339:function(t,e,n){"use strict";n(323)},340:function(t,e,n){"use strict";n(324)},341:function(t,e,n){"use strict";n(325)},348:function(t,e,n){"use strict";var s={name:"NContent"},r=(n(337),n(43)),i=Object(r.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"content-container"},[this._t("default")],2)}),[],!1,null,"e5bb1a0c",null);e.a=i.exports},349:function(t,e,n){"use strict";var s={name:"NFooter"},r=(n(338),n(43)),i=Object(r.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"footer-container"},[this._t("default")],2)}),[],!1,null,"00dec01a",null);e.a=i.exports},350:function(t,e,n){"use strict";var s={name:"NHeader"},r=(n(339),n(43)),i=Object(r.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"header-container"},[this._t("default")],2)}),[],!1,null,"423d0ad2",null);e.a=i.exports},351:function(t,e,n){"use strict";n(95),n(70);var s={name:"NLayout",data:function(){return{hasSider:!1}},mounted:function(){var t=this;this.$children.forEach((function(e){"NSider"===e.$options.name&&(t.hasSider=!0)}))}},r=(n(340),n(43)),i=Object(r.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"layout-container",class:{"layout-has-sider":this.hasSider}},[this._t("default")],2)}),[],!1,null,"1208d72c",null);e.a=i.exports},352:function(t,e,n){"use strict";var s={name:"NSider"},r=(n(341),n(43)),i=Object(r.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"sider-container"},[this._t("default")],2)}),[],!1,null,"2096dade",null);e.a=i.exports},390:function(t,e,n){},458:function(t,e,n){"use strict";n(390)},510:function(t,e,n){"use strict";n.r(e);var s=n(348),r=n(349),i=n(350),a=n(351),c=n(352),u=n(333),o=n(334),f={components:{NContent:s.a,NFooter:r.a,NHeader:i.a,NSider:c.a,NLayout:a.a,NRow:u.a,NCol:o.a},data:function(){return{}}},l=(n(458),n(43)),h=Object(l.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h4",[t._v("基础布局")]),t._v(" "),n("div",{staticClass:"section"},[n("n-layout",{staticClass:"layout"},[n("n-header",{staticClass:"layout-item bg2"},[t._v("header")]),t._v(" "),n("n-content",{staticClass:"layout-item bg3"},[t._v("content")]),t._v(" "),n("n-footer",{staticClass:"layout-item bg2"},[t._v("footer")])],1)],1),t._v(" "),n("br")])}),[],!1,null,"316430fc",null);e.default=h.exports}}]);