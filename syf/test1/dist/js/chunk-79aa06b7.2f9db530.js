(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-79aa06b7"],{"12f7":function(t,a,e){"use strict";var n=e("9a90");e.n(n).a},"9a90":function(t,a,e){},f99e:function(t,a,e){"use strict";e.r(a);var n,i=e("bd86"),s=(e("7f7f"),e("b970")),c={components:(n={},Object(i.a)(n,s.b.name,s.b),Object(i.a)(n,s.c.name,s.c),Object(i.a)(n,s.d.name,s.d),Object(i.a)(n,s.a.name,s.a),Object(i.a)(n,s.f.name,s.f),n),mounted:function(){var t=this;this.$nextTick(function(){t.teamType=t.$route.params.teamType})},data:function(){return{teamType:"normal"}},computed:{teamList:function(){var a=this;return this.$store.state.teamlist&&this.$store.state.teamlist.filter(function(t){return t.type===a.teamType&&t.validToCurrentUser})},pageTitle:function(){return"advanced"===this.teamType?"高级群":"讨论组"}},methods:{onClickBack:function(){window.history.go(-1)}}},o=(e("12f7"),e("2877")),r=Object(o.a)(c,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"g-inherit m-article p-teamlist m-article2"},[e("div",{staticClass:"teamList-head"},[e("van-icon",{attrs:{name:"arrow-left",color:"#0091e4"},on:{click:t.onClickBack}}),e("span",[t._v(t._s("advanced"==t.teamType?"高级群":"讨论组"))]),e("div")],1),e("div",{staticClass:"m-list"},[e("van-cell-group",t._l(t.teamList,function(t){return e("van-cell",{key:t.teamId,attrs:{title:t.name,"is-link":"",to:"`/chat/team-${team.teamId}`"}},[e("span",{staticClass:"icon icon-team-advanced",attrs:{slot:"icon"},slot:"icon"})])}),1)],1),!t.teamList||t.teamList.length<1?e("div",{staticClass:"empty-hint"},[t._v("暂无内容")]):t._e()])},[],!1,null,"24f1547c",null);a.default=r.exports}}]);