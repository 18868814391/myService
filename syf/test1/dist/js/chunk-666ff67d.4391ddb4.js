(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-666ff67d"],{"1ea9":function(t,s,e){},"6ab3":function(t,s,e){"use strict";e.r(s);var a,c=e("e814"),r=e.n(c),i=e("bd86"),n=(e("7f7f"),e("f61f")),h=e("b970"),o={components:(a={},Object(i.a)(a,h.b.name,h.b),Object(i.a)(a,h.c.name,h.c),Object(i.a)(a,h.a.name,h.a),Object(i.a)(a,h.j.name,h.j),a),mounted:function(){var t=this;this.$nextTick(function(){t.searchType=r()(t.$route.params.searchType),t.$store.dispatch("resetSearchResult")}),setTimeout(function(){t.$refs.searchInput.$refs.input.focus()},500)},data:function(){return{searchType:0,searchText:"",searchList:[],errMsg:"",firstEntry:!0}},watch:{searchResult:function(t,s){0!==t.length||this.firstEntry?this.errMsg="":this.errMsg="无记录",this.searchList=t},searchType:function(){this.$refs.searchInput.$refs.input.focus()}},computed:{searchResult:function(){var t=[];return 1===this.searchType?t=this.$store.state.searchedTeams.map(function(t){return t.avatar=t.avatar||n.a.defaultUserIcon,t.link="/teamcard/".concat(t.teamId),t}):0===this.searchType&&(t=this.$store.state.searchedUsers.map(function(t){return t.nick=t.nick||t.account,t.link="/namecard/".concat(t.account),t.avatar=t.avatar||n.a.defaultUserIcon,t})),t}},methods:{onClickBack:function(){window.history.go(-1)},seleButton:function(t){this.searchType=t},searchUser:function(){if(this.searchText)if(this.firstEntry=!1,1===this.searchType){if(!/^(\d){4,9}$/.test(this.searchText))return void this.$toast("输入的群号非法");this.$store.dispatch("searchTeam",{teamId:this.searchText})}else 0===this.searchType&&(this.searchText===this.$store.state.userUID?(this.searchList=[],this.errMsg="别看了，就是你自己！"):this.$store.dispatch("searchUsers",{accounts:[this.searchText]}));else this.$toast("未输入内容")}}},u=(e("f3f5"),e("2877")),l=Object(u.a)(o,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"g-inherit m-article p-search-user"},[a("div",{staticClass:"Chat-nav"},[a("div",{on:{click:e.onClickBack}},[e._v("返回")]),a("div",{staticClass:"SearchUserButtons"},[a("div",{staticClass:"SearchUserBi",class:0==e.searchType?"seleB":"",on:{click:function(t){return e.seleButton(0)}}},[e._v("搜索用户")]),a("div",{staticClass:"SearchUserBi",class:1==e.searchType?"seleB":"",on:{click:function(t){return e.seleButton(1)}}},[e._v("搜索群")])]),a("div")]),a("van-cell-group",{staticClass:"u-search"},[a("van-search",{ref:"searchInput",staticClass:"u-ipt-default",attrs:{type:"text",placeholder:0===e.searchType?"请输入搜索内容":"请输入群号","show-action":""},model:{value:e.searchText,callback:function(t){e.searchText=t},expression:"searchText"}})],1),a("div",[a("van-button",{attrs:{size:"large",type:"primary"},nativeOn:{click:function(t){return e.searchUser(t)}}},[e._v("搜索")])],1),a("van-cell-group",{staticClass:"u-card u-list"},e._l(e.searchList,function(t,s){return 0===e.searchType?a("van-cell",{key:t.account,staticClass:"u-list-item",attrs:{title:t.nick,"inline-desc":t.account,userId:s,"is-link":"",to:t.link}},[a("img",{staticClass:"icon",attrs:{slot:"icon",width:"20",src:t.avatar},slot:"icon"})]):e._l(e.searchList,function(t){return a("van-cell",{key:t.teamId,staticClass:"u-list-item",attrs:{title:t.name,"is-link":"",to:t.link}},[a("img",{staticClass:"icon",attrs:{slot:"icon",width:"20",src:t.avatar},slot:"icon"})])})}),1),a("div",{staticClass:"u-card"},[a("h3",[e._v(e._s(e.errMsg))])])],1)},[],!1,null,null,null);s.default=l.exports},f3f5:function(t,s,e){"use strict";var a=e("1ea9");e.n(a).a}}]);