(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-763815dd"],{"365c":function(t,n,o){"use strict";var e=o("bc3a"),r=o.n(e);r.a.defaults.baseURL="/apis/syf/php";var u=r.a.create({timeout:1e4});function a(t){return u({url:"/login/register.php",method:"post",data:t})}function i(t){return u({url:"/login/login.php",method:"post",data:t})}function c(t){return u({url:"/login/level.php",method:"post",data:t})}function d(t){return u({url:"/upload/fileUpload.php",method:"post",data:t})}function l(t){return u({url:"/upload/getFile.php",method:"post",data:t})}function p(t){return u({url:"/upload/richTxtUpload.php",method:"post",data:t})}function s(t){return u({url:"/upload/BlogRichTxt.php",method:"post",data:t})}function f(t){return u({url:"/upload/BlogList.php",method:"post",data:t})}function h(t){return u({url:"/upload/BlogDetail.php",method:"post",data:t})}function m(t){return u({url:"/novel/lightNovelList.php",method:"post",data:t})}function v(t){return u({url:"/novel/getNovel.php",method:"post",data:t})}function g(t){return u({url:"/novel/heavyNovelList.php",method:"post",data:t})}function b(t){return u({url:"/novel/mircleDetail.php",method:"post",data:t})}function T(t){return u({url:"/media/music.php",method:"post",data:t})}function _(t){return u({url:"/media/anime.php",method:"post",data:t})}function x(t){return u({url:"/interaction/footprint.php",method:"post",data:t})}function B(t){return u({url:"/interaction/footList.php",method:"post",data:t})}o.d(n,"p",function(){return a}),o.d(n,"o",function(){return i}),o.d(n,"m",function(){return c}),o.d(n,"d",function(){return d}),o.d(n,"g",function(){return l}),o.d(n,"c",function(){return p}),o.d(n,"b",function(){return s}),o.d(n,"a",function(){return f}),o.d(n,"e",function(){return h}),o.d(n,"n",function(){return m}),o.d(n,"l",function(){return v}),o.d(n,"k",function(){return g}),o.d(n,"i",function(){return b}),o.d(n,"j",function(){return T}),o.d(n,"f",function(){return _}),o.d(n,"q",function(){return x}),o.d(n,"h",function(){return B})},"4ab8":function(t,n,o){"use strict";var e=o("ee6c");o.n(e).a},c3ca:function(t,n,o){"use strict";o.r(n);var e=o("bd86"),r=(o("7f7f"),o("365c")),u=(o("953d"),o("b970")),a={components:Object(e.a)({},u.o.name,u.o),data:function(){return{id:"",con:"",richText:"",toast:"",timer:""}},created:function(){var n=this,t=u.o.loading({duration:0,forbidClick:!0,loadingType:"spinner",message:"loading... 3 秒"}),o=3,e=setInterval(function(){0<=--o?t.message="loading... ".concat(o," 秒"):o<0&&-3<=o?t.message="好吧，我的服务器是捡来的":o<-3&&-6<o?t.message="或许是你的网络问题，我关掉了嗷":o<=-6&&(u.o.clear(),clearInterval(e))},1e3);this.id=this.$route.query.id,Object(r.e)({id:n.id}).then(function(t){u.o.clear(),clearInterval(e),n.con=t.data.data,n.richText=n.con.content,n.goTop()}).catch(function(){u.o.clear(),clearInterval(e)})},methods:{goTop:function(){document.documentElement.scrollTop=0,document.body.scrollTop=0}}},i=(o("4ab8"),o("2877")),c=Object(i.a)(a,function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"MyBread"},[o("h2",{staticClass:"MB-tit"},[t._v(t._s(t.con.title))]),o("div",{staticClass:"MB-time"},[t._v("\n    由用户"+t._s(t.con.adm)+"在\n    "+t._s(t.con.updatatime)+"上传\n  ")]),o("div",{staticClass:"ql-editor BlogrichTxt",domProps:{innerHTML:t._s(t.richText)}})])},[],!1,null,null,null);n.default=c.exports},ee6c:function(t,n,o){}}]);