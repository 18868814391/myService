(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-1a4912b7"],{3340:function(t,n,o){"use strict";o.r(n);var u=o("365c"),r=(o("953d"),{data:function(){return{id:"",con:""}},created:function(){var n=this;this.id=this.$route.query.id,Object(u.k)({id:n.id}).then(function(t){n.con=t.data.data}).catch(function(){})},methods:{}}),e=(o("b314"),o("2877")),i=Object(e.a)(r,function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"Myread"},[o("h2",{staticClass:"myr-h2"},[t._v(t._s(t.con.title))]),o("div",{staticClass:"ql-editor myr-con",domProps:{innerHTML:t._s(t.con.content)}})])},[],!1,null,null,null);n.default=i.exports},"365c":function(t,n,o){"use strict";var u=o("bc3a"),r=o.n(u);r.a.defaults.baseURL="http://118.31.62.251/syf/php";var e=r.a.create({timeout:1e4});function i(t){return e({url:"/login/register.php",method:"post",data:t})}function a(t){return e({url:"/login/login.php",method:"post",data:t})}function d(t){return e({url:"/login/level.php",method:"post",data:t})}function c(t){return e({url:"/upload/fileUpload.php",method:"post",data:t})}function p(t){return e({url:"/upload/getFile.php",method:"post",data:t})}function l(t){return e({url:"/upload/richTxtUpload.php",method:"post",data:t})}function s(t){return e({url:"/upload/BlogRichTxt.php",method:"post",data:t})}function h(t){return e({url:"/upload/BlogList.php",method:"post",data:t})}function f(t){return e({url:"/upload/BlogDetail.php",method:"post",data:t})}function m(t){return e({url:"/novel/lightNovelList.php",method:"post",data:t})}function v(t){return e({url:"/novel/getNovel.php",method:"post",data:t})}function g(t){return e({url:"/novel/heavyNovelList.php",method:"post",data:t})}function b(t){return e({url:"/novel/mircleDetail.php",method:"post",data:t})}function w(t){return e({url:"/media/music.php",method:"post",data:t})}function y(t){return e({url:"/media/anime.php",method:"post",data:t})}o.d(n,"o",function(){return i}),o.d(n,"n",function(){return a}),o.d(n,"l",function(){return d}),o.d(n,"d",function(){return c}),o.d(n,"g",function(){return p}),o.d(n,"c",function(){return l}),o.d(n,"b",function(){return s}),o.d(n,"a",function(){return h}),o.d(n,"e",function(){return f}),o.d(n,"m",function(){return m}),o.d(n,"k",function(){return v}),o.d(n,"j",function(){return g}),o.d(n,"h",function(){return b}),o.d(n,"i",function(){return w}),o.d(n,"f",function(){return y})},"4fa9":function(t,n,o){},b314:function(t,n,o){"use strict";var u=o("4fa9");o.n(u).a}}]);