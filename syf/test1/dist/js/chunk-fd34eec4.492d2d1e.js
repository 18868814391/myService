(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-fd34eec4"],{"267e":function(t,e,n){"use strict";var i=n("a3c8");n.n(i).a},"530b":function(t,e,n){"use strict";var i=n("d21c");n.n(i).a},5442:function(t,e,n){t.exports=n.p+"img/beian.d0289dc0.png"},"5ea9":function(t,e,n){},a3c8:function(t,e,n){},aa77:function(t,e,n){var s=n("5ca1"),i=n("be13"),r=n("79e5"),c=n("fdef"),a="["+c+"]",o=RegExp("^"+a+a+"*"),u=RegExp(a+a+"*$"),l=function(t,e,n){var i={},a=r(function(){return!!c[t]()||"​"!="​"[t]()}),o=i[t]=a?e(d):c[t];n&&(i[n]=o),s(s.P+s.F*a,"String",i)},d=l.trim=function(t,e){return t=String(i(t)),1&e&&(t=t.replace(o,"")),2&e&&(t=t.replace(u,"")),t};t.exports=l},b533:function(t,e,n){"use strict";n.r(e);var i,a=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{textAlign:"center",marginTop:"20px"}},[e("a",{attrs:{href:"http://www.beian.miit.gov.cn/"}},[this._v("浙ICP备19028592号")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{width:"300px",margin:"0 auto",padding:"20px 0"}},[e("a",{staticStyle:{display:"inline-block","text-decoration":"none",height:"20px","line-height":"20px"},attrs:{target:"_blank",href:"http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010402003945"}},[e("img",{staticStyle:{float:"left"},attrs:{src:n("5442")}}),e("p",{staticStyle:{float:"left",height:"20px","line-height":"20px",margin:"0px 0px 0px 5px",color:"#939393"}},[this._v("浙公网安备 33010402003945号")])])])}],o=n("bd86"),s=(n("7f7f"),n("b970")),r=n("5f87"),c={name:"jumpBox",data:function(){return{}},mounted:function(){},methods:{}},u=(n("530b"),n("2877")),l=Object(u.a)(c,function(){this.$createElement;return this._self._c,this._m(0)},[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"jumpBox-page"},[n("div",{staticClass:"container"},[n("span",{staticClass:"girl"},[t._v("仆")]),n("div",{staticClass:"boys"},[n("span",[t._v("届")]),n("span",[t._v("か")]),n("span",[t._v("な")]),n("span",[t._v("い")])])])])}],!1,null,null,null).exports,d=(n("c5f6"),{name:"navTBox",props:{rout:{type:String,default:function(){return"b"}},taber:{type:String,default:function(){return"b"}},sum:{type:Number,default:function(){return 1}},ind:{type:Number,default:function(){return 1}}},data:function(){return{start:!1,end:!0}},created:function(){},mounted:function(){var t=this,e=this.sum,n=this.ind;setTimeout(function(){setInterval(function(){t.start=!0,setTimeout(function(){t.start=!1},500)},250*e)},125*n)},methods:{goroute:function(){this.$router.push({path:"/".concat(this.rout)})}}}),h=(n("c084"),Object(u.a)(d,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"nt1",staticClass:"navTBox",class:t.start?"navTBoxAnime1":"",on:{click:t.goroute}},[n("div",{ref:"nt2",staticClass:"navTBox2",class:t.start?"navTBoxAnime2":""}),t._v("\n  "+t._s(t.taber)+"\n")])},[],!1,null,null,null)).exports,p={name:"disappearBtn",data:function(){return{}},props:{title:{type:String,default:function(){return"默认"}},rout:{type:String,default:function(){return"b"}},idn:{type:String,default:function(){return""}}},mounted:function(){var e=this;this.$refs.doom.classList.add("".concat(e.idn)),this.loadAsyncScript("http://118.31.62.251/apis/syf/staticJS/anime.min.js",function(){e.loadAsyncScript("http://118.31.62.251/apis/syf/staticJS/particles.js",function(){var t=new Particles(".".concat(e.idn));$(".".concat(e.idn)).click(function(){t.disintegrate(),setTimeout(function(){t.integrate()},4e3)})})})},methods:{goRoute:function(){var t=this;setTimeout(function(){t.$router.push({path:"/".concat(t.rout)})},2e3)},loadAsyncScript:function(t,e){var n=document.createElement("script");n.type="text/javascript",n.readyState?n.onreadystatechange=function(){"complete"!==n.readyState&&"loaded"!==n.readyState||e()}:n.onload=function(){e()},n.src=t,document.head.appendChild(n)}}},f=(n("b7dd"),Object(u.a)(p,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"disappearBtn-page"},[n("div",{staticClass:"divbtn cake",staticStyle:{width:"80px"},on:{click:t.goRoute}},[n("div",{ref:"doom",staticStyle:{width:"80px"},attrs:{id:"btn"}},[t._v(t._s(t.title))])])])},[],!1,null,null,null)).exports,m={components:(i={},Object(o.a)(i,s.o.name,s.o),Object(o.a)(i,l.name,l),Object(o.a)(i,h.name,h),Object(o.a)(i,f.name,f),i),data:function(){return{admin:Object(r.b)(),Thename:Object(r.a)(),cavenFlag:!1,position:{x:0,y:0},nx:"",ny:"",dx:"",dy:"",xPum:"",yPum:"",x:"",y:""}},created:function(){localStorage.getItem("isReg")&&(localStorage.removeItem("isReg"),window.location.reload()),sessionStorage.getItem("noClovers")||(this.cavenFlag=!0)},mounted:function(){var e=this;if(!sessionStorage.getItem("noClovers")){var t=document.createElement("script");t.type="text/javascript",t.src="http://118.31.62.251/apis/syf/staticJS/clover.js",document.body.appendChild(t)}L2Dwidget.init({pluginRootPath:"../../../public/live2dw/",pluginJsPath:"lib/",pluginModelPath:"live2d-widget-model-hijiki/assets/",tagMode:!1,debug:!1,model:{jsonPath:"/live2dw/live2d-widget-model-hijiki/assets/hijiki.model.json"},display:{position:"right",width:120,height:120},mobile:{show:!0},log:!1}),setTimeout(function(){var t=document.querySelector(".live2d-widget-container");e.w=document.documentElement.clientWidth||document.body.clientWidth,e.h=document.documentElement.clientHeight||document.body.clientHeight,e.x=t.offsetWidth,e.y=t.offsetHeight,t.addEventListener("touchstart",e.down,{passive:!1}),t.addEventListener("touchmove",e.move,{passive:!1})},2e3)},methods:{closeCaven:function(){this.cavenFlag=!1,sessionStorage.setItem("noClovers","1")},goUpload:function(){this.$router.push({path:"/upLoad"})},goRead:function(){this.$router.push({path:"/read"})},goCommon:function(){this.$router.push({path:"/myfile"})},goBlogUpload:function(){this.$router.push({path:"/blogUpload"})},goBlog:function(){this.$router.push({path:"/blog"})},goIM:function(){this.$router.push({path:"/session"})},goMap:function(){this.$router.push({path:"/map"})},goMusic:function(){this.$router.push({path:"/music"})},goMAD:function(){this.$router.push({path:"/mad"})},goAnime:function(){this.$router.push({path:"/anime"})},gofootprint:function(){this.$router.push({path:"/footprint"})},aboutMe:function(){this.$router.push({path:"/aboutMe"})},gochatRoom:function(){this.$router.push({path:"/chatRoom"})},down:function(){var t,e=document.querySelector(".live2d-widget-container");t=event.touches?event.touches[0]:event,this.position.x=t.clientX,this.position.y=t.clientY,this.dx=e.offsetLeft,this.dy=e.offsetTop},move:function(){var t,e=document.querySelector(".live2d-widget-container");t=event.touches?event.touches[0]:event,event.preventDefault(),this.nx=t.clientX-this.position.x,this.ny=t.clientY-this.position.y,this.xPum=this.dx+this.nx,this.yPum=this.dy+this.ny,this.xPum=0<this.xPum?this.xPum:0,this.yPum=0<this.yPum?this.yPum:0,this.xPum=this.xPum>this.w-this.x?this.w-this.x:this.xPum,this.yPum=this.yPum>this.h-this.y?this.h-this.y:this.yPum,e.style.left=this.xPum+"px",e.style.top=this.yPum+"px"}}},v=(n("267e"),Object(u.a)(m,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"indexPage"},[t.cavenFlag?n("canvas",{attrs:{id:"testCanvas",width:"550",height:"500"},on:{click:t.closeCaven}}):t._e(),t.cavenFlag?t._e():n("div",{staticClass:"index-item"},[n("div",{staticClass:"liuyanban"},[n("disappearBtn",{attrs:{title:"留言板",rout:"footprint",idn:"id1"}})],1),n("div",{staticClass:"liuyanban2"},[n("disappearBtn",{attrs:{title:"聊天室",rout:"chatRoom",idn:"id2"}})],1),n("div",{staticClass:"liuyanban3"},[n("disappearBtn",{attrs:{title:"涂鸦板",rout:"boobBrand",idn:"id3"}})],1),n("br"),n("navTBox",{attrs:{taber:"前端学习日记",rout:"blog",sum:7,ind:1}}),n("br"),n("navTBox",{attrs:{taber:"blog upload",rout:"blogUpload",sum:7,ind:2}}),n("br"),n("navTBox",{attrs:{taber:"网易im接入demo",rout:"session",sum:7,ind:3}}),n("br"),n("navTBox",{attrs:{taber:"novel",rout:"read",sum:7,ind:4}}),n("br"),n("navTBox",{attrs:{taber:"Music",rout:"music",sum:7,ind:5}}),n("br"),n("navTBox",{attrs:{taber:"文件夹",rout:"myfile",sum:7,ind:6}}),n("br"),n("navTBox",{attrs:{taber:"关于本站",rout:"aboutMe",sum:7,ind:7}})],1),t._m(0),t._m(1)])},a,!1,null,null,null));e.default=v.exports},b7dd:function(t,e,n){"use strict";var i=n("c306");n.n(i).a},c084:function(t,e,n){"use strict";var i=n("5ea9");n.n(i).a},c306:function(t,e,n){},c5f6:function(t,e,n){"use strict";var i=n("7726"),a=n("69a8"),o=n("2d95"),s=n("5dbc"),l=n("6a99"),r=n("79e5"),c=n("9093").f,u=n("11e9").f,d=n("86cc").f,h=n("aa77").trim,p="Number",f=i[p],m=f,v=f.prototype,g=o(n("2aeb")(v))==p,b="trim"in String.prototype,y=function(t){var e=l(t,!1);if("string"==typeof e&&2<e.length){var n,i,a,o=(e=b?e.trim():h(e,3)).charCodeAt(0);if(43===o||45===o){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:i=2,a=49;break;case 79:case 111:i=8,a=55;break;default:return+e}for(var s,r=e.slice(2),c=0,u=r.length;c<u;c++)if((s=r.charCodeAt(c))<48||a<s)return NaN;return parseInt(r,i)}}return+e};if(!f(" 0o1")||!f("0b1")||f("+0x1")){f=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof f&&(g?r(function(){v.valueOf.call(n)}):o(n)!=p)?s(new m(y(e)),n,f):y(e)};for(var x,_=n("9e1e")?c(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),S=0;_.length>S;S++)a(m,x=_[S])&&!a(f,x)&&d(f,x,u(m,x));(f.prototype=v).constructor=f,n("2aba")(i,p,f)}},d21c:function(t,e,n){},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);