(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-50d2da58"],{"365c":function(t,n,e){"use strict";var r=e("bc3a"),o=e.n(r);o.a.defaults.baseURL="/apis/syf/php";var a=o.a.create({timeout:1e4});function u(t){return a({url:"/login/level.php",method:"post",data:t})}function i(t){return a({url:"/upload/fileUpload.php",method:"post",data:t})}function d(t){return a({url:"/upload/getFile.php",method:"post",data:t})}function c(t){return a({url:"/upload/richTxtUpload.php",method:"post",data:t})}function s(t){return a({url:"/upload/BlogList.php",method:"post",data:t})}function p(t){return a({url:"/upload/BlogDetail.php",method:"post",data:t})}function l(t){return a({url:"/novel/lightNovelList.php",method:"post",data:t})}function m(t){return a({url:"/novel/getNovel.php",method:"post",data:t})}function f(t){return a({url:"/novel/heavyNovelList.php",method:"post",data:t})}function h(t){return a({url:"/novel/mircleDetail.php",method:"post",data:t})}function b(t){return a({url:"/media/music.php",method:"post",data:t})}function v(t){return a({url:"/media/anime.php",method:"post",data:t})}function g(t){return a({url:"/interaction/footprint.php",method:"post",data:t})}function y(t){return a({url:"/interaction/footList.php",method:"post",data:t})}function w(t){return a({url:"/yii/web/index.php?r=blog/more",method:"post",data:t})}function x(t){return a({url:"/yii/web/index.php?r=blog/search",method:"post",data:t})}function j(t){return a({url:"/yii/web/index.php?r=user/register",method:"post",data:t})}function O(t){return a({url:"/yii/web/index.php?r=user/login",method:"post",data:t})}function k(t){return a({url:"/yii/web/index.php?r=socketdata/addmessage",method:"post",data:t})}function C(t){return a({url:"/yii/web/index.php?r=socketdata/getmessage",method:"post",data:t})}function L(t){return a({url:"/yii/web/index.php?r=common/getmad",method:"post",data:t})}function _(t){return a({url:"/yii/web/index.php?r=blog/tabs",method:"post",data:t})}function N(t){return a({url:"/yii/web/index.php?r=common/savedood",method:"post",data:t})}function U(t){return a({url:"/wechat/access.php",method:"post",data:t})}e.d(n,"l",function(){return u}),e.d(n,"c",function(){return i}),e.d(n,"f",function(){return d}),e.d(n,"b",function(){return c}),e.d(n,"a",function(){return s}),e.d(n,"d",function(){return p}),e.d(n,"m",function(){return l}),e.d(n,"k",function(){return m}),e.d(n,"j",function(){return f}),e.d(n,"h",function(){return h}),e.d(n,"i",function(){return b}),e.d(n,"e",function(){return v}),e.d(n,"n",function(){return g}),e.d(n,"g",function(){return y}),e.d(n,"p",function(){return w}),e.d(n,"q",function(){return x}),e.d(n,"u",function(){return j}),e.d(n,"s",function(){return O}),e.d(n,"w",function(){return k}),e.d(n,"x",function(){return C}),e.d(n,"t",function(){return L}),e.d(n,"r",function(){return _}),e.d(n,"v",function(){return N}),e.d(n,"o",function(){return U})},"88d7":function(t,n,e){"use strict";e.r(n);var r,o=e("bd86"),a=(e("7f7f"),e("b970")),u=e("365c"),i=e("a78e"),d=e.n(i),c={components:(r={},Object(o.a)(r,a.f.name,a.f),Object(o.a)(r,a.o.name,a.o),Object(o.a)(r,a.d.name,a.d),Object(o.a)(r,a.a.name,a.a),Object(o.a)(r,a.e.name,a.e),r),data:function(){return{adm:"",myname:""}},created:function(){this.adm=d.a.get("admin")},methods:{submit:function(){a.o.loading({mask:!0,message:"提交中..."}),Object(u.l)({adm:this.adm,myname:this.myname}).then(function(t){0==t.data.errcode?(Object(a.o)(t.data.errmsg),window.history.go(-1)):Object(a.o)(t.data.errmsg)}).catch(function(t){Object(a.o)(t.data.errmsg)})}}},s=(e("e9dd"),e("2877")),p=Object(s.a)(c,function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"levelPage"},[e("br"),e("div",{staticClass:"test-con"},[e("div",{staticClass:"test-con-ques"},[n._v("\n      天王盖地虎\n    ")]),e("div",{staticClass:"test-con-tit"},[e("van-field",{staticClass:"input-item",attrs:{placeholder:"请输入下一句"},model:{value:n.myname,callback:function(t){n.myname=t},expression:"myname"}})],1),e("div",{staticClass:"reg-tip"},[n._v("你尽管猜，猜对了算我输.")]),e("van-button",{staticClass:"butt-item",attrs:{type:"primary"},on:{click:n.submit}},[n._v("提交")])],1)])},[],!1,null,null,null);n.default=p.exports},bcd3:function(t,n,e){},e9dd:function(t,n,e){"use strict";var r=e("bcd3");e.n(r).a}}]);