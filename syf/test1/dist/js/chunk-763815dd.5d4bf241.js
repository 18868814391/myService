(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-763815dd"],{"365c":function(t,n,e){"use strict";var o=e("bc3a"),r=e.n(o);r.a.defaults.baseURL="/apis/syf/php";var u=r.a.create({timeout:1e4});function a(t){return u({url:"/login/register.php",method:"post",data:t})}function i(t){return u({url:"/login/login.php",method:"post",data:t})}function c(t){return u({url:"/login/level.php",method:"post",data:t})}function d(t){return u({url:"/upload/fileUpload.php",method:"post",data:t})}function l(t){return u({url:"/upload/getFile.php",method:"post",data:t})}function p(t){return u({url:"/upload/richTxtUpload.php",method:"post",data:t})}function s(t){return u({url:"/upload/BlogRichTxt.php",method:"post",data:t})}function f(t){return u({url:"/upload/BlogList.php",method:"post",data:t})}function h(t){return u({url:"/upload/BlogDetail.php",method:"post",data:t})}function m(t){return u({url:"/novel/lightNovelList.php",method:"post",data:t})}function v(t){return u({url:"/novel/getNovel.php",method:"post",data:t})}function g(t){return u({url:"/novel/heavyNovelList.php",method:"post",data:t})}function b(t){return u({url:"/novel/mircleDetail.php",method:"post",data:t})}function T(t){return u({url:"/media/music.php",method:"post",data:t})}function _(t){return u({url:"/media/anime.php",method:"post",data:t})}e.d(n,"o",function(){return a}),e.d(n,"n",function(){return i}),e.d(n,"l",function(){return c}),e.d(n,"d",function(){return d}),e.d(n,"g",function(){return l}),e.d(n,"c",function(){return p}),e.d(n,"b",function(){return s}),e.d(n,"a",function(){return f}),e.d(n,"e",function(){return h}),e.d(n,"m",function(){return m}),e.d(n,"k",function(){return v}),e.d(n,"j",function(){return g}),e.d(n,"h",function(){return b}),e.d(n,"i",function(){return T}),e.d(n,"f",function(){return _})},"4ab8":function(t,n,e){"use strict";var o=e("ee6c");e.n(o).a},c3ca:function(t,n,e){"use strict";e.r(n);var o=e("bd86"),r=(e("7f7f"),e("365c")),u=(e("953d"),e("b970")),a={components:Object(o.a)({},u.n.name,u.n),data:function(){return{id:"",con:"",richText:"",toast:"",timer:""}},created:function(){var n=this,t=u.n.loading({duration:0,forbidClick:!0,loadingType:"spinner",message:"loading... 3 秒"}),e=3,o=setInterval(function(){0<=--e?t.message="loading... ".concat(e," 秒"):e<0&&-3<=e?t.message="好吧，我的服务器是捡来的":e<-3&&-6<e?t.message="或许是你的网络问题，我关掉了嗷":e<=-6&&(u.n.clear(),clearInterval(o))},1e3);this.id=this.$route.query.id,Object(r.e)({id:n.id}).then(function(t){u.n.clear(),clearInterval(o),n.con=t.data.data,n.richText=n.con.content,n.goTop()}).catch(function(){u.n.clear(),clearInterval(o)})},methods:{goTop:function(){document.documentElement.scrollTop=0,document.body.scrollTop=0}}},i=(e("4ab8"),e("2877")),c=Object(i.a)(a,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"MyBread"},[e("h2",{staticClass:"MB-tit"},[t._v(t._s(t.con.title))]),e("div",{staticClass:"MB-time"},[t._v("\n    由用户"+t._s(t.con.adm)+"在\n    "+t._s(t.con.updatatime)+"上传\n  ")]),e("div",{staticClass:"ql-editor BlogrichTxt",domProps:{innerHTML:t._s(t.richText)}})])},[],!1,null,null,null);n.default=c.exports},ee6c:function(t,n,e){}}]);