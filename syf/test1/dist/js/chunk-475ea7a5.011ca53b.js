(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-475ea7a5"],{"267e":function(t,e,i){"use strict";var o=i("a3c8");i.n(o).a},"530b":function(t,e,i){"use strict";var o=i("d21c");i.n(o).a},a3c8:function(t,e,i){},b533:function(t,e,o){"use strict";o.r(e);var i,n=o("bd86"),s=(o("7f7f"),o("b970")),a=o("5f87"),c={name:"jumpBox",data:function(){return{}},mounted:function(){},methods:{}},u=(o("530b"),o("2877")),l=Object(u.a)(c,function(){var t=this;t.$createElement;return t._self._c,t._m(0)},[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"jumpBox-page"},[i("div",{staticClass:"container"},[i("span",{staticClass:"girl"},[t._v("仆")]),i("div",{staticClass:"boys"},[i("span",[t._v("届")]),i("span",[t._v("か")]),i("span",[t._v("な")]),i("span",[t._v("い")])])])])}],!1,null,null,null).exports,h={components:(i={},Object(n.a)(i,s.o.name,s.o),Object(n.a)(i,l.name,l),i),data:function(){return{admin:Object(a.b)(),Thename:Object(a.a)(),cavenFlag:!1,position:{x:0,y:0},nx:"",ny:"",dx:"",dy:"",xPum:"",yPum:"",x:"",y:""}},created:function(){localStorage.getItem("isReg")&&(localStorage.removeItem("isReg"),window.location.reload()),sessionStorage.getItem("noClovers")||(this.cavenFlag=!0)},mounted:function(){var e=this;if(!sessionStorage.getItem("noClovers")){var t=document.createElement("script");t.type="text/javascript",t.src="http://118.31.62.251/apis/syf/staticJS/clover.js",document.body.appendChild(t)}L2Dwidget.init({pluginRootPath:"../../../public/live2dw/",pluginJsPath:"lib/",pluginModelPath:"live2d-widget-model-wanko/assets/",tagMode:!1,debug:!1,model:{jsonPath:"/live2dw/live2d-widget-model-wanko/assets/wanko.model.json"},display:{position:"right",width:120,height:120},mobile:{show:!0},log:!1}),setTimeout(function(){var t=document.querySelector(".live2d-widget-container");e.w=document.documentElement.clientWidth||document.body.clientWidth,e.h=document.documentElement.clientHeight||document.body.clientHeight,e.x=t.offsetWidth,e.y=t.offsetHeight,t.addEventListener("touchstart",e.down,{passive:!1}),t.addEventListener("touchmove",e.move,{passive:!1})},2e3)},methods:{closeCaven:function(){this.cavenFlag=!1,sessionStorage.setItem("noClovers","1")},goUpload:function(){this.$router.push({path:"/upLoad"})},goRead:function(){this.$router.push({path:"/read"})},goCommon:function(){this.$router.push({path:"/myfile"})},goBlogUpload:function(){this.$router.push({path:"/blogUpload"})},goBlog:function(){this.$router.push({path:"/blog"})},goIM:function(){this.$router.push({path:"/session"})},goMap:function(){this.$router.push({path:"/map"})},goMusic:function(){this.$router.push({path:"/music"})},goMAD:function(){this.$router.push({path:"/mad"})},goAnime:function(){this.$router.push({path:"/anime"})},gofootprint:function(){this.$router.push({path:"/footprint"})},aboutMe:function(){this.$router.push({path:"/aboutMe"})},gochatRoom:function(){this.$router.push({path:"/chatRoom"})},down:function(){var t,e=document.querySelector(".live2d-widget-container");t=event.touches?event.touches[0]:event,this.position.x=t.clientX,this.position.y=t.clientY,this.dx=e.offsetLeft,this.dy=e.offsetTop},move:function(){var t,e=document.querySelector(".live2d-widget-container");t=event.touches?event.touches[0]:event,event.preventDefault(),this.nx=t.clientX-this.position.x,this.ny=t.clientY-this.position.y,this.xPum=this.dx+this.nx,this.yPum=this.dy+this.ny,this.xPum=0<this.xPum?this.xPum:0,this.yPum=0<this.yPum?this.yPum:0,this.xPum=this.xPum>this.w-this.x?this.w-this.x:this.xPum,this.yPum=this.yPum>this.h-this.y?this.h-this.y:this.yPum,e.style.left=this.xPum+"px",e.style.top=this.yPum+"px"}}},d=(o("267e"),Object(u.a)(h,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"indexPage"},[t.cavenFlag?i("canvas",{attrs:{id:"testCanvas",width:"550",height:"500"},on:{click:t.closeCaven}}):t._e(),t.cavenFlag?t._e():i("div",{staticClass:"index-item"},[i("div",{staticClass:"liuyanban",on:{click:t.gofootprint}},[i("img",{attrs:{src:o("ddd8"),alt:""}}),i("div",{staticClass:"liuyanban-t"},[t._v("留言板")])]),i("div",{staticClass:"liuyanban2",on:{click:t.gochatRoom}},[i("img",{attrs:{src:o("ddd8"),alt:""}}),i("div",{staticClass:"liuyanban-t"},[t._v("聊天室")])]),i("br"),i("div",{on:{click:t.goBlog}},[t._v("\n    菜鸟博客\n  ")]),i("br"),i("div",{on:{click:t.goBlogUpload}},[t._v("blog upload")]),i("br"),i("div",{on:{click:t.goIM}},[t._v("网易im接入demo")]),i("p",[t._v("---------------")]),i("div",{on:{click:t.goMusic}},[t._v("Music")]),i("p",[t._v("---------------")]),i("div",{on:{click:t.goMAD}},[t._v("MAD")]),i("p",[t._v("---------------")]),i("div",{on:{click:t.goAnime}},[t._v("Anime")]),i("p",[t._v("---------------")]),i("div",{on:{click:t.goRead}},[t._v("novel")]),i("p",[t._v("---------------")]),i("div",{on:{click:t.goUpload}},[t._v("上传页面")]),i("p",[t._v("---------------")]),i("div",{on:{click:t.goCommon}},[t._v("公共文件夹")]),i("p",[t._v("---------------")]),i("div",{on:{click:t.aboutMe}},[t._v("关于本站")]),i("p",[t._v("---------------")])]),t.cavenFlag?t._e():i("jumpBox",{staticClass:"jumpBox"})],1)},[],!1,null,null,null));e.default=d.exports},d21c:function(t,e,i){},ddd8:function(t,e,i){t.exports=i.p+"img/liuyanban.701e4765.png"}}]);