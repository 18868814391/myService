(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-530ce530"],{"131e":function(t,n,o){"use strict";o.r(n);var r=o("365c"),u={data:function(){return{tit:"",loc:""}},created:function(){var n=this;Object(r.f)({}).then(function(t){n.tit=t.data.data.fileName,n.loc=t.data.data.fileLocatiom}).catch(function(t){})},methods:{load:function(t){window.location.href=this.loc[t]}}},e=(o("fff0"),o("2877")),i=Object(e.a)(u,function(){var o=this,t=o.$createElement,r=o._self._c||t;return r("div",{staticClass:"myFilePage"},[o._v("\n  因为服务器的带宽只有1M啊 (ノへ￣、) "),r("br"),o._v("\n  所以下载速度足足有100Kb/s啊 ヽ✿゜▽゜)ノ "),r("br"),o._v("\n  上传一时爽啊，下载急死人 w(゜Д゜)w  "),r("br"),o._v("\n  真的要紧的话，请向站长索要源文件吧 ┗|｀O′|┛ 嗷~~"),r("br"),o._l(o.tit,function(t,n){return r("div",{key:n,staticClass:"mfg-tit"},[r("span",[o._v(o._s(t))]),r("div",{staticClass:"mfg-line"}),r("button",{on:{click:function(t){return o.load(n)}}},[o._v("下载")])])})],2)},[],!1,null,null,null);n.default=i.exports},"365c":function(t,n,o){"use strict";var r=o("bc3a"),u=o.n(r);u.a.defaults.baseURL="/apis/syf/php";var e=u.a.create({timeout:1e4});function i(t){return e({url:"/login/register.php",method:"post",data:t})}function a(t){return e({url:"/login/login.php",method:"post",data:t})}function c(t){return e({url:"/login/level.php",method:"post",data:t})}function d(t){return e({url:"/upload/fileUpload.php",method:"post",data:t})}function l(t){return e({url:"/upload/getFile.php",method:"post",data:t})}function p(t){return e({url:"/upload/richTxtUpload.php",method:"post",data:t})}function f(t){return e({url:"/upload/BlogList.php",method:"post",data:t})}function s(t){return e({url:"/upload/BlogDetail.php",method:"post",data:t})}function h(t){return e({url:"/novel/lightNovelList.php",method:"post",data:t})}function m(t){return e({url:"/novel/getNovel.php",method:"post",data:t})}function v(t){return e({url:"/novel/heavyNovelList.php",method:"post",data:t})}function b(t){return e({url:"/novel/mircleDetail.php",method:"post",data:t})}function g(t){return e({url:"/media/music.php",method:"post",data:t})}function w(t){return e({url:"/media/anime.php",method:"post",data:t})}function _(t){return e({url:"/interaction/footprint.php",method:"post",data:t})}function k(t){return e({url:"/interaction/footList.php",method:"post",data:t})}function L(t){return e({url:"/yii/web/index.php?r=blog/more",method:"post",data:t})}o.d(n,"o",function(){return i}),o.d(n,"n",function(){return a}),o.d(n,"l",function(){return c}),o.d(n,"c",function(){return d}),o.d(n,"f",function(){return l}),o.d(n,"b",function(){return p}),o.d(n,"a",function(){return f}),o.d(n,"d",function(){return s}),o.d(n,"m",function(){return h}),o.d(n,"k",function(){return m}),o.d(n,"j",function(){return v}),o.d(n,"h",function(){return b}),o.d(n,"i",function(){return g}),o.d(n,"e",function(){return w}),o.d(n,"p",function(){return _}),o.d(n,"g",function(){return k}),o.d(n,"q",function(){return L})},4278:function(t,n,o){},fff0:function(t,n,o){"use strict";var r=o("4278");o.n(r).a}}]);