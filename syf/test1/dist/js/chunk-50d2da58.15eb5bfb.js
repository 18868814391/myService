(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-50d2da58"],{"365c":function(t,n,e){"use strict";var o=e("bc3a"),a=e.n(o);a.a.defaults.baseURL="/apis/syf/php";var r=a.a.create({timeout:1e4});function u(t){return r({url:"/login/register.php",method:"post",data:t})}function i(t){return r({url:"/login/login.php",method:"post",data:t})}function d(t){return r({url:"/login/level.php",method:"post",data:t})}function c(t){return r({url:"/upload/fileUpload.php",method:"post",data:t})}function s(t){return r({url:"/upload/getFile.php",method:"post",data:t})}function p(t){return r({url:"/upload/richTxtUpload.php",method:"post",data:t})}function l(t){return r({url:"/upload/BlogRichTxt.php",method:"post",data:t})}function m(t){return r({url:"/upload/BlogList.php",method:"post",data:t})}function f(t){return r({url:"/upload/BlogDetail.php",method:"post",data:t})}function h(t){return r({url:"/novel/lightNovelList.php",method:"post",data:t})}function b(t){return r({url:"/novel/getNovel.php",method:"post",data:t})}function v(t){return r({url:"/novel/heavyNovelList.php",method:"post",data:t})}function g(t){return r({url:"/novel/mircleDetail.php",method:"post",data:t})}function j(t){return r({url:"/media/music.php",method:"post",data:t})}function y(t){return r({url:"/media/anime.php",method:"post",data:t})}function O(t){return r({url:"/interaction/footprint.php",method:"post",data:t})}function w(t){return r({url:"/interaction/footList.php",method:"post",data:t})}e.d(n,"p",function(){return u}),e.d(n,"o",function(){return i}),e.d(n,"m",function(){return d}),e.d(n,"d",function(){return c}),e.d(n,"g",function(){return s}),e.d(n,"c",function(){return p}),e.d(n,"b",function(){return l}),e.d(n,"a",function(){return m}),e.d(n,"e",function(){return f}),e.d(n,"n",function(){return h}),e.d(n,"l",function(){return b}),e.d(n,"k",function(){return v}),e.d(n,"i",function(){return g}),e.d(n,"j",function(){return j}),e.d(n,"f",function(){return y}),e.d(n,"q",function(){return O}),e.d(n,"h",function(){return w})},"88d7":function(t,n,e){"use strict";e.r(n);var o,a=e("bd86"),r=(e("7f7f"),e("b970")),u=e("365c"),i=e("a78e"),d=e.n(i),c={components:(o={},Object(a.a)(o,r.f.name,r.f),Object(a.a)(o,r.o.name,r.o),Object(a.a)(o,r.d.name,r.d),Object(a.a)(o,r.a.name,r.a),Object(a.a)(o,r.e.name,r.e),o),data:function(){return{adm:"",myname:""}},created:function(){this.adm=d.a.get("admin")},methods:{submit:function(){r.o.loading({mask:!0,message:"提交中..."}),Object(u.m)({adm:this.adm,myname:this.myname}).then(function(t){0==t.data.errcode?(Object(r.o)(t.data.errmsg),window.history.go(-1)):Object(r.o)(t.data.errmsg)}).catch(function(t){Object(r.o)(t.data.errmsg)})}}},s=(e("e9dd"),e("2877")),p=Object(s.a)(c,function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"levelPage"},[e("br"),e("div",{staticClass:"test-con"},[e("div",{staticClass:"test-con-ques"},[n._v("\n      天王盖地虎\n    ")]),e("div",{staticClass:"test-con-tit"},[e("van-field",{staticClass:"input-item",attrs:{placeholder:"请输入下一句"},model:{value:n.myname,callback:function(t){n.myname=t},expression:"myname"}})],1),e("van-button",{staticClass:"butt-item",attrs:{type:"primary"},on:{click:n.submit}},[n._v("提交")])],1)])},[],!1,null,null,null);n.default=p.exports},bcd3:function(t,n,e){},e9dd:function(t,n,e){"use strict";var o=e("bcd3");e.n(o).a}}]);