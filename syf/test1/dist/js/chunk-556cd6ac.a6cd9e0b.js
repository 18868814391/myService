(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-556cd6ac"],{"1c1d":function(t,e,i){},"30b2":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"mad-page"},[t.list[0]?i("video-player",{ref:"videoPlayer",staticClass:"video-player-box",attrs:{options:t.playerOptions,playsinline:!0}}):t._e(),t.list[0]?i("div",{staticClass:"animeDetail-tip"},[t._v("\n       ↑↑↑↑如果手机浏览器给你省流量，请手动点击播放。还有，带宽就100K，要多等会儿的。\n  ")]):t._e(),t.list[0]?i("div",{staticClass:"ans-box"},t._l(t.list,function(e,s){return i("div",{key:s,staticClass:"ans-box-item",on:{click:function(i){return t.sele(e)}}},[t._v("\n      "+t._s(e.substring(0,e.indexOf(".")))+"\n    ")])}),0):t._e(),t.list[0]?t._e():i("div",[t._v("暂无内容")])],1)},a=[],n=(i("55dd"),i("fda2"),i("d6d3")),o=i("365c"),l={components:{videoPlayer:n["videoPlayer"]},data:function(){return{id:"",list:[],playerOptions:{autoplay:!0,muted:!1,loop:!1,preload:"auto",language:"zh-CN",aspectRatio:"16:9",fluid:!0,playbackRates:[.7,1,1.5,2],sources:[{type:"video/mp4",src:""}],poster:"",controlBar:{timeDivider:!0,durationDisplay:!0,remainingTimeDisplay:!1,fullscreenToggle:!0}}}},computed:{player:function(){return this.$refs.videoPlayer.player}},created:function(){var t=this;this.id=this.$route.query.id,console.log(this.id),Object(o["u"])({}).then(function(e){console.log(e.data.data),t.list=e.data.data,t.list.sort(),setTimeout(function(){t.sele(t.list[0])},1e3)}).catch(function(t){})},methods:{sele:function(t){this.playerOptions.sources[0].src="/apis/syf/MAD/"+t,console.log(this.playerOptions.sources[0].src)}}},r=l,c=(i("b986"),i("2877")),d=Object(c["a"])(r,s,a,!1,null,null,null);e["default"]=d.exports},b986:function(t,e,i){"use strict";var s=i("1c1d"),a=i.n(s);a.a}}]);
//# sourceMappingURL=chunk-556cd6ac.a6cd9e0b.js.map