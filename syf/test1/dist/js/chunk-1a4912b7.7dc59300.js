(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-1a4912b7"],{3340:function(t,n,r){"use strict";r.r(n);var e=r("365c"),o=(r("953d"),{data:function(){return{id:"",con:""}},created:function(){var n=this;this.id=this.$route.query.id,Object(e.k)({id:n.id}).then(function(t){n.con=t.data.data}).catch(function(){})},methods:{}}),u=(r("b314"),r("2877")),i=Object(u.a)(o,function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"Myread"},[r("h2",{staticClass:"myr-h2"},[t._v(t._s(t.con.title))]),r("div",{staticClass:"ql-editor myr-con",domProps:{innerHTML:t._s(t.con.content)}})])},[],!1,null,null,null);n.default=i.exports},"365c":function(t,n,r){"use strict";var e=r("bc3a"),o=r.n(e);o.a.defaults.baseURL="/apis/syf/php";var u=o.a.create({timeout:1e4});function i(t){return u({url:"/login/level.php",method:"post",data:t})}function d(t){return u({url:"/upload/fileUpload.php",method:"post",data:t})}function a(t){return u({url:"/upload/getFile.php",method:"post",data:t})}function c(t){return u({url:"/upload/richTxtUpload.php",method:"post",data:t})}function p(t){return u({url:"/upload/BlogList.php",method:"post",data:t})}function s(t){return u({url:"/upload/BlogDetail.php",method:"post",data:t})}function l(t){return u({url:"/novel/lightNovelList.php",method:"post",data:t})}function f(t){return u({url:"/novel/getNovel.php",method:"post",data:t})}function h(t){return u({url:"/novel/heavyNovelList.php",method:"post",data:t})}function m(t){return u({url:"/novel/mircleDetail.php",method:"post",data:t})}function b(t){return u({url:"/media/music.php",method:"post",data:t})}function v(t){return u({url:"/media/anime.php",method:"post",data:t})}function g(t){return u({url:"/interaction/footprint.php",method:"post",data:t})}function w(t){return u({url:"/interaction/footList.php",method:"post",data:t})}function y(t){return u({url:"/yii/web/index.php?r=blog/more",method:"post",data:t})}function x(t){return u({url:"/yii/web/index.php?r=blog/search",method:"post",data:t})}function k(t){return u({url:"/yii/web/index.php?r=user/register",method:"post",data:t})}function L(t){return u({url:"/yii/web/index.php?r=user/login",method:"post",data:t})}function _(t){return u({url:"/yii/web/index.php?r=socketdata/addmessage",method:"post",data:t})}function j(t){return u({url:"/yii/web/index.php?r=socketdata/getmessage",method:"post",data:t})}function q(t){return u({url:"/yii/web/index.php?r=common/getmad",method:"post",data:t})}r.d(n,"l",function(){return i}),r.d(n,"c",function(){return d}),r.d(n,"f",function(){return a}),r.d(n,"b",function(){return c}),r.d(n,"a",function(){return p}),r.d(n,"d",function(){return s}),r.d(n,"m",function(){return l}),r.d(n,"k",function(){return f}),r.d(n,"j",function(){return h}),r.d(n,"h",function(){return m}),r.d(n,"i",function(){return b}),r.d(n,"e",function(){return v}),r.d(n,"n",function(){return g}),r.d(n,"g",function(){return w}),r.d(n,"o",function(){return y}),r.d(n,"p",function(){return x}),r.d(n,"s",function(){return k}),r.d(n,"q",function(){return L}),r.d(n,"t",function(){return _}),r.d(n,"u",function(){return j}),r.d(n,"r",function(){return q})},"4fa9":function(t,n,r){},b314:function(t,n,r){"use strict";var e=r("4fa9");r.n(e).a}}]);