(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-89341096"],{2358:function(t,a,o){"use strict";o.r(a);var n,c=function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("div",{staticClass:"boobMore-page"},[t._l(t.boobList,function(a,n){return o("div",{key:n,staticClass:"boobMore-page-con"},[o("img",{attrs:{src:a.content,alt:""}}),o("div",[t._v("名字："+t._s(a.Thename))]),o("div",[t._v("介绍："+t._s(a.msg))]),o("div",[t._v("时间："+t._s(a.updataTime))])])}),o("div",{staticClass:"moreButton",on:{click:t.forMore}},[o("button",[t._v("加载更多")])])],2)},e=[],s=o("bd86"),i=(o("7f7f"),o("365c")),r=o("b970"),b={components:(n={},Object(s["a"])(n,r["o"].name,r["o"]),Object(s["a"])(n,r["i"].name,r["i"]),n),data:function(){return{boobList:"",start:0}},created:function(){var t=this;Object(i["s"])({start:0}).then(function(a){t.boobList=a.data.data}).catch(function(t){})},methods:{forMore:function(){var t=this;this.start++,r["o"].loading({mask:!0,message:"提交中..."}),Object(i["s"])({start:t.start}).then(function(a){r["o"].clear(),t.boobList=t.boobList.concat(a.data.data),a.data.data.length<=0&&Object(r["o"])("再戳也没有更多了 = =!")}).catch(function(t){r["o"].clear()})}}},u=b,d=(o("91cc"),o("2877")),l=Object(d["a"])(u,c,e,!1,null,null,null);a["default"]=l.exports},"91cc":function(t,a,o){"use strict";var n=o("b94e"),c=o.n(n);c.a},b94e:function(t,a,o){}}]);
//# sourceMappingURL=chunk-89341096.f87797bd.js.map