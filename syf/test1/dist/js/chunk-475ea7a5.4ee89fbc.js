(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-475ea7a5"],{"267e":function(t,o,n){"use strict";var i=n("a3c8");n.n(i).a},"530b":function(t,o,n){"use strict";var i=n("d21c");n.n(i).a},a3c8:function(t,o,n){},b533:function(t,o,i){"use strict";i.r(o);var n,a=i("bd86"),e=(i("7f7f"),i("b970")),s=i("5f87"),c={name:"jumpBox",data:function(){return{}},mounted:function(){},methods:{}},l=(i("530b"),i("2877")),u=Object(l.a)(c,function(){var t=this;t.$createElement;return t._self._c,t._m(0)},[function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",{staticClass:"jumpBox-page"},[n("div",{staticClass:"container"},[n("span",{staticClass:"girl"},[t._v("仆")]),n("div",{staticClass:"boys"},[n("span",[t._v("届")]),n("span",[t._v("か")]),n("span",[t._v("な")]),n("span",[t._v("い")])])])])}],!1,null,null,null).exports,d={components:(n={},Object(a.a)(n,e.o.name,e.o),Object(a.a)(n,u.name,u),n),data:function(){return{admin:Object(s.b)(),Thename:Object(s.a)(),cavenFlag:!1}},created:function(){localStorage.getItem("isReg")&&(localStorage.removeItem("isReg"),window.location.reload()),sessionStorage.getItem("noClovers")||(this.cavenFlag=!0)},mounted:function(){if(!sessionStorage.getItem("noClovers")){var t=document.createElement("script");t.type="text/javascript",t.src="http://118.31.62.251/apis/syf/staticJS/clover.js",document.body.appendChild(t)}L2Dwidget.init({pluginRootPath:"../../../public/live2dw/",pluginJsPath:"lib/",pluginModelPath:"live2d-widget-model-wanko/assets/",tagMode:!1,debug:!1,model:{jsonPath:"/live2dw/live2d-widget-model-wanko/assets/wanko.model.json"},display:{position:"right",width:150,height:300},mobile:{show:!0},log:!1})},methods:{closeCaven:function(){this.cavenFlag=!1,sessionStorage.setItem("noClovers","1")},goUpload:function(){this.$router.push({path:"/upLoad"})},goRead:function(){this.$router.push({path:"/read"})},goCommon:function(){this.$router.push({path:"/myfile"})},goBlogUpload:function(){this.$router.push({path:"/blogUpload"})},goBlog:function(){this.$router.push({path:"/blog"})},goIM:function(){this.$router.push({path:"/session"})},goMap:function(){this.$router.push({path:"/map"})},goMusic:function(){this.$router.push({path:"/music"})},goAnime:function(){this.$router.push({path:"/anime"})},gofootprint:function(){this.$router.push({path:"/footprint"})},aboutMe:function(){this.$router.push({path:"/aboutMe"})},gochatRoom:function(){Object(e.o)("别戳了，还没做好......")}}},r=(i("267e"),Object(l.a)(d,function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",{staticClass:"indexPage"},[t.cavenFlag?n("canvas",{attrs:{id:"testCanvas",width:"550",height:"500"},on:{click:t.closeCaven}}):t._e(),t.cavenFlag?t._e():n("div",{staticClass:"index-item"},[n("div",{staticClass:"liuyanban",on:{click:t.gofootprint}},[n("img",{attrs:{src:i("ddd8"),alt:""}}),n("div",{staticClass:"liuyanban-t"},[t._v("留言板")])]),n("div",{staticClass:"liuyanban2",on:{click:t.gochatRoom}},[n("img",{attrs:{src:i("ddd8"),alt:""}}),n("div",{staticClass:"liuyanban-t"},[t._v("聊天室")])]),n("br"),n("div",{on:{click:t.goBlog}},[t._v("\n    菜鸟博客\n  ")]),n("br"),n("div",{on:{click:t.goBlogUpload}},[t._v("blog upload")]),n("br"),n("div",{on:{click:t.goIM}},[t._v("网易im接入demo")]),n("p",[t._v("---------------")]),n("div",{on:{click:t.goMap}},[t._v("高德地图接入demo")]),n("p",[t._v("---------------")]),n("div",{on:{click:t.goMusic}},[t._v("Music")]),n("p",[t._v("---------------")]),n("div",{on:{click:t.goAnime}},[t._v("Anime")]),n("p",[t._v("---------------")]),n("div",{on:{click:t.goRead}},[t._v("novel")]),n("p",[t._v("---------------")]),n("div",{on:{click:t.goUpload}},[t._v("上传页面")]),n("p",[t._v("---------------")]),n("div",{on:{click:t.goCommon}},[t._v("公共文件夹")]),n("p",[t._v("---------------")]),n("div",{on:{click:t.aboutMe}},[t._v("关于本站")]),n("p",[t._v("---------------")])]),t.cavenFlag?t._e():n("jumpBox",{staticClass:"jumpBox"})],1)},[],!1,null,null,null));o.default=r.exports},d21c:function(t,o,n){},ddd8:function(t,o,n){t.exports=n.p+"img/liuyanban.701e4765.png"}}]);