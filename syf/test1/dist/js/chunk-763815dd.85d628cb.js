(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-763815dd"],{"365c":function(t,n,o){"use strict";var e=o("bc3a"),u=o.n(e);u.a.defaults.baseURL="/apis/syf/php";var r=u.a.create({timeout:1e4});function i(t){return r({url:"/login/register.php",method:"post",data:t})}function a(t){return r({url:"/login/login.php",method:"post",data:t})}function c(t){return r({url:"/login/level.php",method:"post",data:t})}function d(t){return r({url:"/upload/fileUpload.php",method:"post",data:t})}function l(t){return r({url:"/upload/getFile.php",method:"post",data:t})}function p(t){return r({url:"/upload/richTxtUpload.php",method:"post",data:t})}function s(t){return r({url:"/upload/BlogRichTxt.php",method:"post",data:t})}function h(t){return r({url:"/upload/BlogList.php",method:"post",data:t})}function f(t){return r({url:"/upload/BlogDetail.php",method:"post",data:t})}function m(t){return r({url:"/novel/lightNovelList.php",method:"post",data:t})}function v(t){return r({url:"/novel/getNovel.php",method:"post",data:t})}function g(t){return r({url:"/novel/heavyNovelList.php",method:"post",data:t})}function T(t){return r({url:"/novel/mircleDetail.php",method:"post",data:t})}function b(t){return r({url:"/media/music.php",method:"post",data:t})}function _(t){return r({url:"/media/anime.php",method:"post",data:t})}o.d(n,"o",function(){return i}),o.d(n,"n",function(){return a}),o.d(n,"l",function(){return c}),o.d(n,"d",function(){return d}),o.d(n,"g",function(){return l}),o.d(n,"c",function(){return p}),o.d(n,"b",function(){return s}),o.d(n,"a",function(){return h}),o.d(n,"e",function(){return f}),o.d(n,"m",function(){return m}),o.d(n,"k",function(){return v}),o.d(n,"j",function(){return g}),o.d(n,"h",function(){return T}),o.d(n,"i",function(){return b}),o.d(n,"f",function(){return _})},"4ab8":function(t,n,o){"use strict";var e=o("ee6c");o.n(e).a},c3ca:function(t,n,o){"use strict";o.r(n);var e=o("365c"),u=(o("953d"),{data:function(){return{id:"",con:"",richText:""}},created:function(){var n=this;this.id=this.$route.query.id,Object(e.e)({id:n.id}).then(function(t){n.con=t.data.data,n.richText=n.con.content,n.goTop()}).catch(function(){})},methods:{goTop:function(){document.documentElement.scrollTop=0,document.body.scrollTop=0}}}),r=(o("4ab8"),o("2877")),i=Object(r.a)(u,function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"MyBread"},[o("h2",{staticClass:"MB-tit"},[t._v(t._s(t.con.title))]),o("div",{staticClass:"MB-time"},[t._v("\n    由用户"+t._s(t.con.adm)+"在\n    "+t._s(t.con.updatatime)+"上传\n  ")]),o("div",{staticClass:"ql-editor BlogrichTxt",domProps:{innerHTML:t._s(t.richText)}})])},[],!1,null,null,null);n.default=i.exports},ee6c:function(t,n,o){}}]);