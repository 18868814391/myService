(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-1ec9674a"],{"365c":function(t,n,e){"use strict";var a=e("bc3a"),o=e.n(a);o.a.defaults.baseURL="/apis/syf/php";var r=o.a.create({timeout:1e4});function i(t){return r({url:"/login/register.php",method:"post",data:t})}function u(t){return r({url:"/login/login.php",method:"post",data:t})}function d(t){return r({url:"/login/level.php",method:"post",data:t})}function c(t){return r({url:"/upload/fileUpload.php",method:"post",data:t})}function l(t){return r({url:"/upload/getFile.php",method:"post",data:t})}function p(t){return r({url:"/upload/richTxtUpload.php",method:"post",data:t})}function s(t){return r({url:"/upload/BlogRichTxt.php",method:"post",data:t})}function f(t){return r({url:"/upload/BlogList.php",method:"post",data:t})}function h(t){return r({url:"/upload/BlogDetail.php",method:"post",data:t})}function g(t){return r({url:"/novel/lightNovelList.php",method:"post",data:t})}function m(t){return r({url:"/novel/getNovel.php",method:"post",data:t})}function v(t){return r({url:"/novel/heavyNovelList.php",method:"post",data:t})}function b(t){return r({url:"/novel/mircleDetail.php",method:"post",data:t})}function _(t){return r({url:"/media/music.php",method:"post",data:t})}function k(t){return r({url:"/media/anime.php",method:"post",data:t})}function L(t){return r({url:"/interaction/footprint.php",method:"post",data:t})}function j(t){return r({url:"/interaction/footList.php",method:"post",data:t})}e.d(n,"p",function(){return i}),e.d(n,"o",function(){return u}),e.d(n,"m",function(){return d}),e.d(n,"d",function(){return c}),e.d(n,"g",function(){return l}),e.d(n,"c",function(){return p}),e.d(n,"b",function(){return s}),e.d(n,"a",function(){return f}),e.d(n,"e",function(){return h}),e.d(n,"n",function(){return g}),e.d(n,"l",function(){return m}),e.d(n,"k",function(){return v}),e.d(n,"i",function(){return b}),e.d(n,"j",function(){return _}),e.d(n,"f",function(){return k}),e.d(n,"q",function(){return L}),e.d(n,"h",function(){return j})},"584a8":function(t,n,e){},"66ac":function(t,n,e){"use strict";var a=e("584a8");e.n(a).a},7064:function(t,n,e){"use strict";e.r(n);var a,o=e("bd86"),r=(e("7f7f"),e("365c")),i=e("b970"),u={components:(a={},Object(o.a)(a,i.o.name,i.o),Object(o.a)(a,i.g.name,i.g),a),data:function(){return{list:[],start_page:0,pages:25,loading:!1,finished:!1}},created:function(){var n=this;Object(r.a)({start_page:n.start_page,pages:n.pages}).then(function(t){n.start_page++,n.loading=!1,n.list=n.list.concat(t.data.data),1*n.list.length>=1*t.data.total_page&&(n.finished=!0)}).catch(function(){})},methods:{goRead:function(t){this.$router.push({path:"/readBlog",query:{id:t}})},onLoad:function(){var n=this;Object(r.a)({start_page:n.start_page,pages:n.pages}).then(function(t){n.start_page++,n.loading=!1,n.list=n.list.concat(t.data.data),1*n.list.length>=1*t.data.total_page&&(n.finished=!0)}).catch(function(){})}}},d=(e("66ac"),e("2877")),c=Object(d.a)(u,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"blog-page"},[a("van-list",{attrs:{finished:e.finished,"immediate-check":!1,"finished-text":"不要划拉划拉啦，已经没有了"},on:{load:e.onLoad},model:{value:e.loading,callback:function(t){e.loading=t},expression:"loading"}},e._l(e.list,function(n,t){return a("div",{key:t,staticClass:"blp-item",on:{click:function(t){return e.goRead(n.id)}}},[e._v("\n      "+e._s(n.title)+"\n    ")])}),0)],1)},[],!1,null,null,null);n.default=c.exports}}]);