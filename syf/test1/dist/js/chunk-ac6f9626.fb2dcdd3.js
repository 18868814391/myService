(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ac6f9626"],{ad09:function(s,t,e){"use strict";e.r(t);var n,a=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"g-inherit m-main p-session"},[e("van-cell-group",{staticClass:"u-list"},[e("van-cell",{staticClass:"session-cell",attrs:{title:"消息中心"},nativeOn:{click:function(t){return s.enterSysMsgs(t)}}},[e("img",{staticClass:"session-icon",attrs:{slot:"icon",src:s.noticeIcon},slot:"icon"}),e("span",{directives:[{name:"show",rawName:"v-show",value:s.sysMsgUnread>0,expression:"sysMsgUnread >0"}],staticClass:"session-noRead"},[s._v(s._s(s.sysMsgUnread))])]),e("van-cell",{staticClass:"session-cell",attrs:{title:"我的手机"},nativeOn:{click:function(t){return s.enterMyChat(t)}}},[e("img",{staticClass:"session-icon",attrs:{slot:"icon",src:s.myPhoneIcon},slot:"icon"})]),s._l(s.sessionlist,function(t,n){return e("van-cell",{directives:[{name:"touch",rawName:"v-touch:swipeleft",value:s.showDelBtn,expression:"showDelBtn",arg:"swipeleft"},{name:"touch",rawName:"v-touch:swiperight",value:s.hideDelBtn,expression:"hideDelBtn",arg:"swiperight"}],key:t.id,staticClass:"session-cell",attrs:{title:t.name,label:t.lastMsgShow,sessionId:t.id},nativeOn:{click:function(e){return s.enterChat(t)}}},[e("img",{staticClass:"session-icon",attrs:{slot:"icon",src:t.avatar},slot:"icon"}),e("span",{staticClass:"u-session-time"},[s._v("\n        "+s._s(t.updateTimeShow)+"\n      ")]),e("span",{directives:[{name:"show",rawName:"v-show",value:t.unread>0,expression:"session.unread > 0"}],staticClass:"session-noRead"},[s._v(s._s(t.unread))]),e("span",{staticClass:"u-tag-del",class:{active:s.delSessionId===t.id},on:{click:s.deleteSession}})])})],2)],1)},i=[],o=(e("7514"),e("bd86")),c=(e("7f7f"),e("ed08")),r=e("f61f"),l=e("b970"),u={components:(n={},Object(o["a"])(n,l["b"].name,l["b"]),Object(o["a"])(n,l["c"].name,l["c"]),n),data:function(){return{delSessionId:null,stopBubble:!1,noticeIcon:r["a"].noticeIcon,myPhoneIcon:r["a"].myPhoneIcon,myGroupIcon:r["a"].defaultGroupIcon,myAdvancedIcon:r["a"].defaultAdvancedIcon}},created:function(){this.$store.dispatch("connect"),this.$store.dispatch("updateRefreshState")},computed:{sysMsgUnread:function(){var s=this.$store.state.sysMsgUnread,t=s.addFriend||0;t+=s.team||0;var e=this.$store.state.customSysMsgUnread;return t+e},userInfos:function(){return this.$store.state.userInfos},myInfo:function(){return this.$store.state.myInfo},myPhoneId:function(){return"".concat(this.$store.state.userUID)},sessionlist:function(){var s=this,t=this.$store.state.sessionlist.filter(function(t){if(t.name="",t.avatar="","p2p"===t.scene){var e=null;if(t.to===s.myPhoneId)return!1;e=s.userInfos[t.to],e&&(t.name=c["a"].getFriendAlias(e),t.avatar=e.avatar)}else if("team"===t.scene){var n=null;n=s.$store.state.teamlist.find(function(s){return s.teamId===t.to}),n?(t.name=n.name,t.avatar=n.avatar||("normal"===n.type?s.myGroupIcon:s.myAdvancedIcon)):(t.name="群".concat(t.to),t.avatar=t.avatar||s.myGroupIcon)}var a=t.lastMsg||{};return"text"===a.type?t.lastMsgShow=a.text||"":"custom"===a.type?t.lastMsgShow=c["a"].parseCustomMsg(a):"team"===a.scene&&"notification"===a.type?t.lastMsgShow=c["a"].generateTeamSysmMsg(a):c["a"].mapMsgType(a)?t.lastMsgShow="[".concat(c["a"].mapMsgType(a),"]"):t.lastMsgShow="",t.updateTime&&(t.updateTimeShow=c["a"].formatDate(t.updateTime,!0)),t});return t}},methods:{enterSysMsgs:function(){this.hideDelBtn()||(location.href="#/sysmsgs")},backIndex:function(){this.$router.push({path:"/index"})},enterChat:function(s){this.hideDelBtn()||s&&s.id&&(location.href="#/chat/".concat(s.id))},enterMyChat:function(){location.href="#/chat/p2p-".concat(this.myPhoneId)},deleteSession:function(){null!==this.delSessionId&&this.$store.dispatch("deleteSession",this.delSessionId)},showDelBtn:function(s){var t=this;s&&s.data&&s.data.attrs&&(this.delSessionId=s.data.attrs.sessionId,this.stopBubble=!0,setTimeout(function(){t.stopBubble=!1},20))},hideDelBtn:function(){return null!==this.delSessionId&&!this.stopBubble&&(this.delSessionId=null,!0)}}},d=u,h=(e("e85b"),e("2877")),m=Object(h["a"])(d,a,i,!1,null,null,null);t["default"]=m.exports},e85b:function(s,t,e){"use strict";var n=e("eae9"),a=e.n(n);a.a},eae9:function(s,t,e){}}]);
//# sourceMappingURL=chunk-ac6f9626.fb2dcdd3.js.map