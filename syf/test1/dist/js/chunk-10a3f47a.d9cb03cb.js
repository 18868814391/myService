(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-10a3f47a"],{dcd2:function(t,i,n){"use strict";var a=n("f703"),e=n.n(a);e.a},ed90:function(t,i,n){"use strict";n.r(i);var a=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"anime-page"},t._l(t.animeList,function(i,a){return n("div",{key:a,staticClass:"anime-page-box",on:{click:function(n){return t.GoWatch(i.id)}}},[n("img",{staticClass:"anime-page-box-img",attrs:{src:i.img,alt:""}}),n("div",{staticClass:"anime-page-box-tit"},[t._v(t._s(i.id))])])}),0)},e=[],c=(n("ac6a"),n("365c")),s={data:function(){return{animeList:[]}},created:function(){var t=this;Object(c["e"])({id:""}).then(function(i){var n=i.data.data;console.log(n),n.forEach(function(i,n,a){var e={id:"",img:""};e.id=i,e.img="/apis/syf/video/"+i+".jpg",t.animeList.push(e)}),console.log(t.animeList)}).catch(function(){})},mounted:function(){},methods:{GoWatch:function(t){this.$router.push({path:"/animeDetail",query:{id:t}})}}},o=s,u=(n("dcd2"),n("2877")),r=Object(u["a"])(o,a,e,!1,null,null,null);i["default"]=r.exports},f703:function(t,i,n){}}]);
//# sourceMappingURL=chunk-10a3f47a.d9cb03cb.js.map