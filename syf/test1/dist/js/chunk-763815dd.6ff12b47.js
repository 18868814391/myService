(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-763815dd"],{"365c":function(t,n,e){"use strict";var o=e("bc3a"),r=e.n(o);r.a.defaults.baseURL="/apis/syf/php";var u=r.a.create({timeout:1e4});function i(t){return u({url:"/login/level.php",method:"post",data:t})}function a(t){return u({url:"/upload/fileUpload.php",method:"post",data:t})}function d(t){return u({url:"/upload/getFile.php",method:"post",data:t})}function c(t){return u({url:"/upload/richTxtUpload.php",method:"post",data:t})}function p(t){return u({url:"/upload/BlogList.php",method:"post",data:t})}function s(t){return u({url:"/upload/BlogDetail.php",method:"post",data:t})}function l(t){return u({url:"/novel/lightNovelList.php",method:"post",data:t})}function f(t){return u({url:"/novel/getNovel.php",method:"post",data:t})}function h(t){return u({url:"/novel/heavyNovelList.php",method:"post",data:t})}function m(t){return u({url:"/novel/mircleDetail.php",method:"post",data:t})}function b(t){return u({url:"/media/music.php",method:"post",data:t})}function g(t){return u({url:"/media/anime.php",method:"post",data:t})}function v(t){return u({url:"/interaction/footprint.php",method:"post",data:t})}function w(t){return u({url:"/interaction/footList.php",method:"post",data:t})}function y(t){return u({url:"/yii/web/index.php?r=blog/more",method:"post",data:t})}function x(t){return u({url:"/yii/web/index.php?r=blog/search",method:"post",data:t})}function T(t){return u({url:"/yii/web/index.php?r=user/register",method:"post",data:t})}function _(t){return u({url:"/yii/web/index.php?r=user/login",method:"post",data:t})}function k(t){return u({url:"/yii/web/index.php?r=socketdata/addmessage",method:"post",data:t})}function B(t){return u({url:"/yii/web/index.php?r=socketdata/getmessage",method:"post",data:t})}function L(t){return u({url:"/yii/web/index.php?r=common/getmad",method:"post",data:t})}function C(t){return u({url:"/yii/web/index.php?r=blog/tabs",method:"post",data:t})}function j(t){return u({url:"/yii/web/index.php?r=common/savedood",method:"post",data:t})}e.d(n,"l",function(){return i}),e.d(n,"c",function(){return a}),e.d(n,"f",function(){return d}),e.d(n,"b",function(){return c}),e.d(n,"a",function(){return p}),e.d(n,"d",function(){return s}),e.d(n,"m",function(){return l}),e.d(n,"k",function(){return f}),e.d(n,"j",function(){return h}),e.d(n,"h",function(){return m}),e.d(n,"i",function(){return b}),e.d(n,"e",function(){return g}),e.d(n,"n",function(){return v}),e.d(n,"g",function(){return w}),e.d(n,"o",function(){return y}),e.d(n,"p",function(){return x}),e.d(n,"t",function(){return T}),e.d(n,"r",function(){return _}),e.d(n,"v",function(){return k}),e.d(n,"w",function(){return B}),e.d(n,"s",function(){return L}),e.d(n,"q",function(){return C}),e.d(n,"u",function(){return j})},"4ab8":function(t,n,e){"use strict";var o=e("ee6c");e.n(o).a},c3ca:function(t,n,e){"use strict";e.r(n);var o=e("bd86"),r=(e("7f7f"),e("365c")),u=(e("953d"),e("b970")),i={components:Object(o.a)({},u.o.name,u.o),data:function(){return{id:"",con:"",richText:"",toast:"",timer:""}},beforeDestroy:function(){window.scrollTo(0,0)},created:function(){var n=this,t=u.o.loading({duration:0,forbidClick:!0,loadingType:"spinner",message:"loading... 3 秒"}),e=3,o=setInterval(function(){0<=--e?t.message="loading... ".concat(e," 秒"):e<0&&-3<=e?t.message="好吧，我的服务器是捡来的":e<-3&&-6<e?t.message="或许是你的网络问题，我关掉了嗷":e<=-6&&(u.o.clear(),clearInterval(o))},1e3);this.id=this.$route.query.id,Object(r.d)({id:n.id}).then(function(t){u.o.clear(),clearInterval(o),n.con=t.data.data,n.richText=n.con.content,n.goTop()}).catch(function(){u.o.clear(),clearInterval(o)})},methods:{goTop:function(){document.documentElement.scrollTop=0,document.body.scrollTop=0}}},a=(e("4ab8"),e("2877")),d=Object(a.a)(i,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"MyBread"},[e("h2",{staticClass:"MB-tit"},[t._v(t._s(t.con.title))]),e("div",{staticClass:"MB-time"},[t._v("\n    由用户"+t._s(t.con.adm)+"在\n    "+t._s(t.con.updatatime)+"上传\n  ")]),e("div",{staticClass:"ql-editor BlogrichTxt",domProps:{innerHTML:t._s(t.richText)}})])},[],!1,null,null,null);n.default=d.exports},ee6c:function(t,n,e){}}]);