(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2a52e2fc"],{"365c":function(t,n,e){"use strict";var u=e("bc3a"),o=e.n(u);o.a.defaults.baseURL="http://118.31.62.251:81/syf/php";var r=o.a.create({timeout:1e4});function i(t){return r({url:"/login/register.php",method:"post",data:t})}function a(t){return r({url:"/login/login.php",method:"post",data:t})}function d(t){return r({url:"/login/level.php",method:"post",data:t})}function c(t){return r({url:"/upload/fileUpload.php",method:"post",data:t})}function p(t){return r({url:"/upload/getFile.php",method:"post",data:t})}function l(t){return r({url:"/upload/richTxtUpload.php",method:"post",data:t})}function s(t){return r({url:"/upload/BlogRichTxt.php",method:"post",data:t})}function f(t){return r({url:"/upload/BlogList.php",method:"post",data:t})}function h(t){return r({url:"/upload/BlogDetail.php",method:"post",data:t})}function m(t){return r({url:"/novel/lightNovelList.php",method:"post",data:t})}function g(t){return r({url:"/novel/getNovel.php",method:"post",data:t})}function v(t){return r({url:"/novel/heavyNovelList.php",method:"post",data:t})}function b(t){return r({url:"/novel/mircleDetail.php",method:"post",data:t})}function L(t){return r({url:"/media/music.php",method:"post",data:t})}function k(t){return r({url:"/media/anime.php",method:"post",data:t})}e.d(n,"o",function(){return i}),e.d(n,"n",function(){return a}),e.d(n,"l",function(){return d}),e.d(n,"d",function(){return c}),e.d(n,"g",function(){return p}),e.d(n,"c",function(){return l}),e.d(n,"b",function(){return s}),e.d(n,"a",function(){return f}),e.d(n,"e",function(){return h}),e.d(n,"m",function(){return m}),e.d(n,"k",function(){return g}),e.d(n,"j",function(){return v}),e.d(n,"h",function(){return b}),e.d(n,"i",function(){return L}),e.d(n,"f",function(){return k})},dcd2:function(t,n,e){"use strict";var u=e("f703");e.n(u).a},ed90:function(t,n,e){"use strict";e.r(n);var u=(e("ac6a"),e("365c")),o={data:function(){return{animeList:[]}},created:function(){var o=this;Object(u.f)({id:""}).then(function(t){var n=t.data.data;n.forEach(function(t,n,e){var u={id:"",img:""};u.id=t,u.img="http://118.31.62.251/syf/video/"+t+".jpg",o.animeList.push(u)})}).catch(function(){})},mounted:function(){},methods:{GoWatch:function(t){this.$router.push({path:"/animeDetail",query:{id:t}})}}},r=(e("dcd2"),e("2877")),i=Object(r.a)(o,function(){var e=this,t=e.$createElement,u=e._self._c||t;return u("div",{staticClass:"anime-page"},e._l(e.animeList,function(n,t){return u("div",{key:t,staticClass:"anime-page-box",on:{click:function(t){return e.GoWatch(n.id)}}},[u("img",{staticClass:"anime-page-box-img",attrs:{src:n.img,alt:""}}),u("div",{staticClass:"anime-page-box-tit"},[e._v(e._s(n.id))])])}),0)},[],!1,null,null,null);n.default=i.exports},f703:function(t,n,e){}}]);