(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-1ec9674a"],{"365c":function(t,n,u){"use strict";var o=u("bc3a"),e=u.n(o);e.a.defaults.baseURL="http://118.31.62.251:81/syf/php";var r=e.a.create({timeout:1e4});function a(t){return r({url:"/login/register.php",method:"post",data:t})}function i(t){return r({url:"/login/login.php",method:"post",data:t})}function d(t){return r({url:"/login/level.php",method:"post",data:t})}function c(t){return r({url:"/upload/fileUpload.php",method:"post",data:t})}function l(t){return r({url:"/upload/getFile.php",method:"post",data:t})}function p(t){return r({url:"/upload/richTxtUpload.php",method:"post",data:t})}function s(t){return r({url:"/upload/BlogRichTxt.php",method:"post",data:t})}function f(t){return r({url:"/upload/BlogList.php",method:"post",data:t})}function h(t){return r({url:"/upload/BlogDetail.php",method:"post",data:t})}function m(t){return r({url:"/novel/lightNovelList.php",method:"post",data:t})}function v(t){return r({url:"/novel/getNovel.php",method:"post",data:t})}function g(t){return r({url:"/novel/heavyNovelList.php",method:"post",data:t})}function b(t){return r({url:"/novel/mircleDetail.php",method:"post",data:t})}function k(t){return r({url:"/media/music.php",method:"post",data:t})}function w(t){return r({url:"/media/anime.php",method:"post",data:t})}u.d(n,"o",function(){return a}),u.d(n,"n",function(){return i}),u.d(n,"l",function(){return d}),u.d(n,"d",function(){return c}),u.d(n,"g",function(){return l}),u.d(n,"c",function(){return p}),u.d(n,"b",function(){return s}),u.d(n,"a",function(){return f}),u.d(n,"e",function(){return h}),u.d(n,"m",function(){return m}),u.d(n,"k",function(){return v}),u.d(n,"j",function(){return g}),u.d(n,"h",function(){return b}),u.d(n,"i",function(){return k}),u.d(n,"f",function(){return w})},"584a8":function(t,n,u){},"66ac":function(t,n,u){"use strict";var o=u("584a8");u.n(o).a},7064:function(t,n,u){"use strict";u.r(n);var o=u("365c"),e={data:function(){return{list:""}},created:function(){var n=this;Object(o.a)({}).then(function(t){n.list=t.data.data}).catch(function(){})},methods:{goRead:function(t){this.$router.push({path:"/readBlog",query:{id:t}})}}},r=(u("66ac"),u("2877")),a=Object(r.a)(e,function(){var u=this,t=u.$createElement,o=u._self._c||t;return o("div",{staticClass:"blog-page"},u._l(u.list,function(n,t){return o("div",{key:t,staticClass:"blp-item",on:{click:function(t){return u.goRead(n.id)}}},[u._v("\n    "+u._s(n.title)+"\n  ")])}),0)},[],!1,null,null,null);n.default=a.exports}}]);