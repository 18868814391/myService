(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-28ac5158"],{"365c":function(t,n,r){"use strict";var e=r("bc3a"),o=r.n(e);o.a.defaults.baseURL="/apis/syf/php";var u=o.a.create({timeout:1e4});function i(t){return u({url:"/login/level.php",method:"post",data:t})}function a(t){return u({url:"/upload/fileUpload.php",method:"post",data:t})}function d(t){return u({url:"/upload/getFile.php",method:"post",data:t})}function p(t){return u({url:"/upload/richTxtUpload.php",method:"post",data:t})}function c(t){return u({url:"/upload/BlogList.php",method:"post",data:t})}function l(t){return u({url:"/upload/BlogDetail.php",method:"post",data:t})}function s(t){return u({url:"/novel/lightNovelList.php",method:"post",data:t})}function h(t){return u({url:"/novel/getNovel.php",method:"post",data:t})}function f(t){return u({url:"/novel/heavyNovelList.php",method:"post",data:t})}function m(t){return u({url:"/novel/mircleDetail.php",method:"post",data:t})}function g(t){return u({url:"/media/music.php",method:"post",data:t})}function v(t){return u({url:"/media/anime.php",method:"post",data:t})}function b(t){return u({url:"/interaction/footprint.php",method:"post",data:t})}function y(t){return u({url:"/interaction/footList.php",method:"post",data:t})}function w(t){return u({url:"/yii/web/index.php?r=blog/more",method:"post",data:t})}function T(t){return u({url:"/yii/web/index.php?r=user/register",method:"post",data:t})}function x(t){return u({url:"/yii/web/index.php?r=user/login",method:"post",data:t})}function k(t){return u({url:"/yii/web/index.php?r=socketdata/addmessage",method:"post",data:t})}function L(t){return u({url:"/yii/web/index.php?r=socketdata/getmessage",method:"post",data:t})}function _(t){return u({url:"/yii/web/index.php?r=common/getmad",method:"post",data:t})}r.d(n,"l",function(){return i}),r.d(n,"c",function(){return a}),r.d(n,"f",function(){return d}),r.d(n,"b",function(){return p}),r.d(n,"a",function(){return c}),r.d(n,"d",function(){return l}),r.d(n,"m",function(){return s}),r.d(n,"k",function(){return h}),r.d(n,"j",function(){return f}),r.d(n,"h",function(){return m}),r.d(n,"i",function(){return g}),r.d(n,"e",function(){return v}),r.d(n,"n",function(){return b}),r.d(n,"g",function(){return y}),r.d(n,"o",function(){return w}),r.d(n,"r",function(){return T}),r.d(n,"p",function(){return x}),r.d(n,"s",function(){return k}),r.d(n,"t",function(){return L}),r.d(n,"q",function(){return _})},"3d3d":function(t,n,r){"use strict";var e=r("5991");r.n(e).a},5991:function(t,n,r){},8294:function(t,n,r){"use strict";r.r(n);var e=r("365c"),o=(r("953d"),{data:function(){return{chapterTitle:"",paragraphTitle:"",con:""}},created:function(){var n=this;this.chapterTitle=this.$route.query.chapterTitle,this.paragraphTitle=this.$route.query.paragraphTitle,Object(e.h)({chapterTitle:n.chapterTitle,paragraphTitle:n.paragraphTitle}).then(function(t){n.con=t.data.data}).catch(function(){})},methods:{}}),u=(r("3d3d"),r("2877")),i=Object(u.a)(o,function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"Myread3"},[r("h2",{staticClass:"myr-3"},[t._v(t._s(t.con.title))]),r("div",{staticClass:"ql-editor myr3-con",domProps:{innerHTML:t._s(t.con.content)}})])},[],!1,null,null,null);n.default=i.exports}}]);