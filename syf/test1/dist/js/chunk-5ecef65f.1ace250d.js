(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-5ecef65f"],{"071c":function(t,n,e){t.exports=e.p+"img/lapulasi.d1773ef9.png"},"365c":function(t,n,e){"use strict";var o=e("bc3a"),r=e.n(o);r.a.defaults.baseURL="/apis/syf/php";var u=r.a.create({timeout:1e4});function i(t){return u({url:"/login/register.php",method:"post",data:t})}function a(t){return u({url:"/login/login.php",method:"post",data:t})}function c(t){return u({url:"/login/level.php",method:"post",data:t})}function d(t){return u({url:"/upload/fileUpload.php",method:"post",data:t})}function l(t){return u({url:"/upload/getFile.php",method:"post",data:t})}function s(t){return u({url:"/upload/richTxtUpload.php",method:"post",data:t})}function p(t){return u({url:"/upload/BlogRichTxt.php",method:"post",data:t})}function f(t){return u({url:"/upload/BlogList.php",method:"post",data:t})}function h(t){return u({url:"/upload/BlogDetail.php",method:"post",data:t})}function m(t){return u({url:"/novel/lightNovelList.php",method:"post",data:t})}function g(t){return u({url:"/novel/getNovel.php",method:"post",data:t})}function v(t){return u({url:"/novel/heavyNovelList.php",method:"post",data:t})}function _(t){return u({url:"/novel/mircleDetail.php",method:"post",data:t})}function k(t){return u({url:"/media/music.php",method:"post",data:t})}function R(t){return u({url:"/media/anime.php",method:"post",data:t})}e.d(n,"o",function(){return i}),e.d(n,"n",function(){return a}),e.d(n,"l",function(){return c}),e.d(n,"d",function(){return d}),e.d(n,"g",function(){return l}),e.d(n,"c",function(){return s}),e.d(n,"b",function(){return p}),e.d(n,"a",function(){return f}),e.d(n,"e",function(){return h}),e.d(n,"m",function(){return m}),e.d(n,"k",function(){return g}),e.d(n,"j",function(){return v}),e.d(n,"h",function(){return _}),e.d(n,"i",function(){return k}),e.d(n,"f",function(){return R})},"498a":function(t,n,e){t.exports=e.p+"img/mircle.9253e539.png"},"5dd0":function(t,n,r){"use strict";r.r(n);var e=r("365c"),o={data:function(){return{list:""}},created:function(){var n=this;Object(e.m)({}).then(function(t){n.list=t.data.data}).catch(function(){})},methods:{goRead:function(t){this.$router.push({path:"/readPage",query:{id:t}})},goRead2:function(){this.$router.push({path:"/readPage2"})}}},u=(r("861d"),r("2877")),i=Object(u.a)(o,function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"read-page"},[e._l(e.list,function(n,t){return 0==t?o("div",{key:t,staticClass:"novelItem",on:{click:function(t){return e.goRead(n.id)}}},[o("img",{attrs:{src:r("071c"),alt:""}}),e._v("\n    "+e._s(n.title)+"\n  ")]):e._e()}),e._l(e.list,function(n,t){return 1==t?o("div",{key:t,staticClass:"novelItem",on:{click:function(t){return e.goRead(n.id)}}},[o("img",{attrs:{src:r("df9f"),alt:""}}),e._v("\n    "+e._s(n.title)+"\n  ")]):e._e()}),e._l(e.list,function(n,t){return 2==t?o("div",{key:t,staticClass:"novelItem",on:{click:function(t){return e.goRead(n.id)}}},[o("img",{attrs:{src:r("fd8a"),alt:""}}),e._v("\n    "+e._s(n.title)+"\n  ")]):e._e()}),e._l(e.list,function(n,t){return 3==t?o("div",{key:t,staticClass:"novelItem",on:{click:function(t){return e.goRead(n.id)}}},[o("img",{attrs:{src:r("a356d"),alt:""}}),e._v("\n    "+e._s(n.title)+"\n  ")]):e._e()}),o("div",{staticClass:"novelItem",on:{click:e.goRead2}},[o("img",{attrs:{src:r("498a"),alt:""}}),e._v("\n    有关奇迹的设定\n  ")])],2)},[],!1,null,null,null);n.default=i.exports},8032:function(t,n,e){},"861d":function(t,n,e){"use strict";var o=e("8032");e.n(o).a},a356d:function(t,n,e){t.exports=e.p+"img/treedrogon.3a11ddf2.png"},df9f:function(t,n,e){t.exports=e.p+"img/seven.ced69ff9.png"},fd8a:function(t,n,e){t.exports=e.p+"img/theone.aa392f01.png"}}]);