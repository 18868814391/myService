(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-1f9ebd24"],{"267e":function(o,t,n){"use strict";var i=n("a3c8");n.n(i).a},a3c8:function(o,t,n){},b533:function(o,t,i){"use strict";i.r(t);var n=i("bd86"),a=(i("7f7f"),i("b970")),e=i("5f87"),c={components:Object(n.a)({},a.o.name,a.o),data:function(){return{admin:Object(e.b)(),Thename:Object(e.a)(),cavenFlag:!1}},created:function(){localStorage.getItem("isReg")&&(localStorage.removeItem("isReg"),window.location.reload()),sessionStorage.getItem("noClovers")||(this.cavenFlag=!0)},mounted:function(){if(!sessionStorage.getItem("noClovers")){var o=document.createElement("script");o.type="text/javascript",o.src="http://118.31.62.251/apis/syf/staticJS/clover.js",document.body.appendChild(o)}},methods:{closeCaven:function(){this.cavenFlag=!1,sessionStorage.setItem("noClovers","1")},goUpload:function(){this.$router.push({path:"/upLoad"})},goRead:function(){this.$router.push({path:"/read"})},goCommon:function(){this.$router.push({path:"/myfile"})},goBlogUpload:function(){this.$router.push({path:"/blogUpload"})},goBlog:function(){this.$router.push({path:"/blog"})},goIM:function(){this.$router.push({path:"/session"})},goMap:function(){this.$router.push({path:"/map"})},goMusic:function(){this.$router.push({path:"/music"})},goAnime:function(){this.$router.push({path:"/anime"})},gofootprint:function(){this.$router.push({path:"/footprint"})},aboutMe:function(){this.$router.push({path:"/aboutMe"})},gochatRoom:function(){Object(a.o)("别戳了，还没做好......")}}},s=(i("267e"),i("2877")),l=Object(s.a)(c,function(){var o=this,t=o.$createElement,n=o._self._c||t;return n("div",{staticClass:"indexPage"},[o.cavenFlag?n("canvas",{attrs:{id:"testCanvas",width:"550",height:"500"},on:{click:o.closeCaven}}):o._e(),o.cavenFlag?o._e():n("div",{staticClass:"index-item"},[n("div",{staticClass:"liuyanban",on:{click:o.gofootprint}},[n("img",{attrs:{src:i("ddd8"),alt:""}}),n("div",{staticClass:"liuyanban-t"},[o._v("留言板")])]),n("div",{staticClass:"liuyanban2",on:{click:o.gochatRoom}},[n("img",{attrs:{src:i("ddd8"),alt:""}}),n("div",{staticClass:"liuyanban-t"},[o._v("聊天室")])]),n("br"),n("div",{on:{click:o.goBlog}},[o._v("\n    菜鸟博客\n  ")]),n("br"),n("div",{on:{click:o.goBlogUpload}},[o._v("blog upload")]),n("br"),n("div",{on:{click:o.goIM}},[o._v("网易im接入demo")]),n("p",[o._v("---------------")]),n("div",{on:{click:o.goMap}},[o._v("高德地图接入demo")]),n("p",[o._v("---------------")]),n("div",{on:{click:o.goMusic}},[o._v("Music")]),n("p",[o._v("---------------")]),n("div",{on:{click:o.goAnime}},[o._v("Anime")]),n("p",[o._v("---------------")]),n("div",{on:{click:o.goRead}},[o._v("novel")]),n("p",[o._v("---------------")]),n("div",{on:{click:o.goUpload}},[o._v("上传页面")]),n("p",[o._v("---------------")]),n("div",{on:{click:o.goCommon}},[o._v("公共文件夹")]),n("p",[o._v("---------------")]),n("div",{on:{click:o.gofootprint}},[o._v("留言板")]),n("p",[o._v("---------------")]),n("div",{on:{click:o.aboutMe}},[o._v("关于本站")]),n("p",[o._v("---------------")])])])},[],!1,null,null,null);t.default=l.exports},ddd8:function(o,t,n){o.exports=n.p+"img/liuyanban.701e4765.png"}}]);