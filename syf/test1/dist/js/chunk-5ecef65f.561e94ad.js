(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-5ecef65f"],{"071c":function(t,n,e){t.exports=e.p+"img/lapulasi.d1773ef9.png"},"365c":function(t,n,e){"use strict";var r=e("bc3a"),o=e.n(r);o.a.defaults.baseURL="/apis/syf/php";var u=o.a.create({timeout:1e4});function i(t){return u({url:"/login/level.php",method:"post",data:t})}function a(t){return u({url:"/upload/fileUpload.php",method:"post",data:t})}function d(t){return u({url:"/upload/getFile.php",method:"post",data:t})}function c(t){return u({url:"/upload/richTxtUpload.php",method:"post",data:t})}function p(t){return u({url:"/upload/BlogList.php",method:"post",data:t})}function s(t){return u({url:"/upload/BlogDetail.php",method:"post",data:t})}function l(t){return u({url:"/novel/lightNovelList.php",method:"post",data:t})}function f(t){return u({url:"/novel/getNovel.php",method:"post",data:t})}function h(t){return u({url:"/novel/heavyNovelList.php",method:"post",data:t})}function m(t){return u({url:"/novel/mircleDetail.php",method:"post",data:t})}function g(t){return u({url:"/media/music.php",method:"post",data:t})}function v(t){return u({url:"/media/anime.php",method:"post",data:t})}function b(t){return u({url:"/interaction/footprint.php",method:"post",data:t})}function _(t){return u({url:"/interaction/footList.php",method:"post",data:t})}function w(t){return u({url:"/yii/web/index.php?r=blog/more",method:"post",data:t})}function x(t){return u({url:"/yii/web/index.php?r=blog/search",method:"post",data:t})}function y(t){return u({url:"/yii/web/index.php?r=user/register",method:"post",data:t})}function k(t){return u({url:"/yii/web/index.php?r=user/login",method:"post",data:t})}function R(t){return u({url:"/yii/web/index.php?r=socketdata/addmessage",method:"post",data:t})}function C(t){return u({url:"/yii/web/index.php?r=socketdata/getmessage",method:"post",data:t})}function I(t){return u({url:"/yii/web/index.php?r=common/getmad",method:"post",data:t})}function L(t){return u({url:"/yii/web/index.php?r=blog/tabs",method:"post",data:t})}function j(t){return u({url:"/yii/web/index.php?r=common/savedood",method:"post",data:t})}function N(t){return u({url:"/wechat/access.php",method:"post",data:t})}e.d(n,"l",function(){return i}),e.d(n,"c",function(){return a}),e.d(n,"f",function(){return d}),e.d(n,"b",function(){return c}),e.d(n,"a",function(){return p}),e.d(n,"d",function(){return s}),e.d(n,"m",function(){return l}),e.d(n,"k",function(){return f}),e.d(n,"j",function(){return h}),e.d(n,"h",function(){return m}),e.d(n,"i",function(){return g}),e.d(n,"e",function(){return v}),e.d(n,"n",function(){return b}),e.d(n,"g",function(){return _}),e.d(n,"p",function(){return w}),e.d(n,"q",function(){return x}),e.d(n,"u",function(){return y}),e.d(n,"s",function(){return k}),e.d(n,"w",function(){return R}),e.d(n,"x",function(){return C}),e.d(n,"t",function(){return I}),e.d(n,"r",function(){return L}),e.d(n,"v",function(){return j}),e.d(n,"o",function(){return N})},"498a":function(t,n,e){t.exports=e.p+"img/mircle.9253e539.png"},"5dd0":function(t,n,o){"use strict";o.r(n);var e=o("365c"),r={data:function(){return{list:""}},created:function(){var n=this;Object(e.m)({}).then(function(t){n.list=t.data.data}).catch(function(){})},methods:{goRead:function(t){this.$router.push({path:"/readPage",query:{id:t}})},goRead2:function(){this.$router.push({path:"/readPage2"})}}},u=(o("861d"),o("2877")),i=Object(u.a)(r,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"read-page"},[e._l(e.list,function(n,t){return 0==t?r("div",{key:t,staticClass:"novelItem",on:{click:function(t){return e.goRead(n.id)}}},[r("img",{attrs:{src:o("071c"),alt:""}}),e._v("\n    "+e._s(n.title)+"\n  ")]):e._e()}),e._l(e.list,function(n,t){return 1==t?r("div",{key:t,staticClass:"novelItem",on:{click:function(t){return e.goRead(n.id)}}},[r("img",{attrs:{src:o("df9f"),alt:""}}),e._v("\n    "+e._s(n.title)+"\n  ")]):e._e()}),e._l(e.list,function(n,t){return 2==t?r("div",{key:t,staticClass:"novelItem",on:{click:function(t){return e.goRead(n.id)}}},[r("img",{attrs:{src:o("fd8a"),alt:""}}),e._v("\n    "+e._s(n.title)+"\n  ")]):e._e()}),e._l(e.list,function(n,t){return 3==t?r("div",{key:t,staticClass:"novelItem",on:{click:function(t){return e.goRead(n.id)}}},[r("img",{attrs:{src:o("a356d"),alt:""}}),e._v("\n    "+e._s(n.title)+"\n  ")]):e._e()}),r("div",{staticClass:"novelItem",on:{click:e.goRead2}},[r("img",{attrs:{src:o("498a"),alt:""}}),e._v("\n    有关奇迹的设定\n  ")])],2)},[],!1,null,null,null);n.default=i.exports},8032:function(t,n,e){},"861d":function(t,n,e){"use strict";var r=e("8032");e.n(r).a},a356d:function(t,n,e){t.exports=e.p+"img/treedrogon.3a11ddf2.png"},df9f:function(t,n,e){t.exports=e.p+"img/seven.ced69ff9.png"},fd8a:function(t,n,e){t.exports=e.p+"img/theone.aa392f01.png"}}]);