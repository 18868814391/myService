(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-16f932ec"],{"01e3":function(t,e,a){},3897:function(t,e,a){},"43ca":function(t,e,a){"use strict";var n=a("01e3"),i=a.n(n);i.a},"86c6":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"m-members",class:{"s-bg-white":t.advanced&&!t.showAllMode}},[t.hasInvitePermission&&!t.showAllMode?a("a",{staticClass:"u-member",attrs:{href:"#/teaminvite/"+t.teamId}},[a("img",{staticClass:"avatar",attrs:{src:"http://yx-web.nos.netease.com/webdoc/h5/im/team_member_add.png",alt:""}}),a("span",[t._v("添加")])]):t._e(),t._l(t.membersInDisplay,function(e){return a("a",{key:e.account,staticClass:"u-member",on:{click:function(a){return t.onMemberClick(e)}}},[a("img",{staticClass:"avatar u-circle",attrs:{src:e.avatar}}),t.removeMode&&"owner"!=e.type&&e.account!=t.$store.state.userUID?a("span",{staticClass:"remove",on:{click:function(a){return t.remove(a,e)}}}):t._e(),"normal"!==e.type?a("span",{class:"manager"===e.type?"manager":"owner"}):t._e(),a("span",[t._v(t._s(e.alias))])])}),t.advanced?t._e():[a("a",{staticClass:"u-member",attrs:{href:"#/teaminvite/"+t.teamId}},[a("img",{staticClass:"avatar",attrs:{src:"http://yx-web.nos.netease.com/webdoc/h5/im/team_member_add.png",alt:""}}),a("span",[t._v("添加")])]),t.hasManagePermission?a("div",{staticClass:"u-member",on:{click:function(e){return t.triggerRemove()}}},[a("img",{staticClass:"avatar",attrs:{src:"http://yx-web.nos.netease.com/webdoc/h5/im/team_member_delete.png",alt:""}}),a("span",[t._v("移除")])]):t._e()]],2)},i=[],s=(a("ac6a"),a("5176")),r=a.n(s),o=(a("7514"),{props:{teamId:{type:String},advanced:{type:Boolean,default:!1},showAllMode:{type:Boolean,default:!1},filterAccount:{type:Array}},data:function(){return{removeMode:!1,hasManagePermission:!1,hasSearched:!1}},mounted:function(){var t=this.$store.state.teamMembers[this.teamId];void 0===t&&this.$store.dispatch("getTeamMembers",this.teamId)},computed:{teamInfo:function(){var t=this,e=this.$store.state.teamlist,a=e&&e.find(function(e){return e.teamId===t.teamId});if(a)return a},members:function(){var t=this,e=this.$store.state.teamMembers[this.teamId],a=this.$store.state.userInfos,n=[];if(e){if(e=e.map(function(e){var i=r()({},e);return i.valid=!0,i.account===t.$store.state.userUID?(i.alias="我",i.avatar=t.$store.state.myInfo.avatar,t.isOwner="owner"===i.type,t.hasManagePermission="normal"!==i.type):void 0===a[i.account]?(n.push(i.account),i.avatar=i.avatar||t.avatar,i.alias=i.nickInTeam||i.account):(i.avatar=a[i.account].avatar,i.alias=i.nickInTeam||a[i.account].nick),i}),n.length>0&&!this.hasSearched){this.hasSearched=!0;while(n.length>0)this.searchUsers(n.splice(0,150))}return e}return[]},membersInDisplay:function(){var t=this;return this.filterAccount?this.members.filter(function(e){return!!t.filterAccount.find(function(t){return t===e.account})}):this.advanced||this.showAllMode?this.members:this.members.slice(0,this.hasInvitePermission?3:4)},hasInvitePermission:function(){return this.advanced&&(this.hasManagePermission||this.teamInfo&&"all"===this.teamInfo.inviteMode)}},methods:{searchUsers:function(t){var e=this;this.$store.dispatch("searchUsers",{accounts:t,done:function(t){e.updateTeamMember(t)}})},updateTeamMember:function(t){var e=this;t.forEach(function(t){var a=e.members.find(function(e){return e.account===t.account});a&&(a.avatar=t.avatar,a.alias=a.nickInTeam||t.nick)})},triggerRemove:function(t,e){this.removeMode=!this.removeMode},remove:function(t,e){var a=this;this.$store.dispatch("showLoading"),this.$store.dispatch("delegateTeamFunction",{functionName:"removeTeamMembers",options:{teamId:this.teamId,accounts:[e.account],done:function(t,e){a.$toast("移除成功"),a.$store.dispatch("hideLoading")}}}),t.cancelBubble=!0,t.preventDefault()},onMemberClick:function(t){location.href=this.advanced?"#/teammembercard/".concat(t.id):"#/namecard/".concat(t.account)}}}),c=o,m=(a("9529"),a("2877")),u=Object(m["a"])(c,n,i,!1,null,"aad428f0",null);e["a"]=u.exports},9529:function(t,e,a){"use strict";var n=a("3897"),i=a.n(n);i.a},d338:function(t,e,a){"use strict";a.r(e);var n,i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"g-inherit m-article p-teammanager"},[a("div",{staticClass:"m-body"},[t.teamInfo&&"normal"===t.teamInfo.type?[a("team-member",{attrs:{teamId:t.teamId}}),a("van-cell-group",{staticClass:"m-group"},[a("van-cell",{attrs:{title:"讨论组名称",value:t.teamName,"is-link":""},nativeOn:{click:function(e){return function(){return t.onEditItemClick("修改讨论组名称","text","name")}()}}}),a("van-button",{attrs:{mini:"",type:"warn"},nativeOn:{click:function(e){return t.leaveTeam(e)}}},[t._v("退出讨论组")])],1)]:t._e(),t.teamInfo&&"advanced"===t.teamInfo.type?[a("van-cell",{attrs:{"is-link":""},nativeOn:{click:function(e){return t.onTeamAvatarClick(e)}}},[a("div",{staticClass:"m-teaminfo",attrs:{slot:"icon"},slot:"icon"},[a("img",{staticClass:"avatar u-circle",attrs:{src:t.teamAvatar}}),a("div",{staticClass:"u-info"},[a("p",[t._v(t._s(t.teamInfo.name))]),a("span",[t._v(t._s(t.teamInfo.teamId+" 于"+t.formateDate(t.teamInfo.createTime)+"创建"))])])]),a("form",[a("input",{ref:"input",staticStyle:{display:"none"},attrs:{type:"file",accept:"image/*"},on:{change:t.onFileSelected}})])]),a("van-cell-group",{staticClass:"m-group"},[a("van-cell",{attrs:{title:"群成员",value:"共"+t.teamMemberNum+"人","is-link":"",link:"/teammembers/"+t.teamId}}),a("team-member",{attrs:{teamId:t.teamId,advanced:!0}})],1),a("van-cell-group",{staticClass:"m-group"},[a("van-cell",{attrs:{title:"群名称",value:t.teamName,"is-link":""},nativeOn:{click:function(e){return function(){return t.onEditItemClick(t.hasEditPermission?"修改群名称":"群名称","text","name")}()}}}),a("van-cell",{attrs:{title:"群昵称",value:t.nickName,"is-link":""},nativeOn:{click:function(e){return function(){return t.onEditItemClick("修改群昵称","text","nickInTeam",!0)}()}}}),a("van-cell",{attrs:{title:"群介绍",value:t.teamInfo.intro||"未设置","is-link":""},nativeOn:{click:function(e){return function(){return t.onEditItemClick(t.hasEditPermission?"修改群介绍":"群介绍","textarea","intro")}()}}})],1),t.hasManagePermission?a("van-cell-group",{staticClass:"m-group"},[a("van-cell",{attrs:{title:"身份验证",value:t.getTeamInfo("joinMode"),"is-link":""},nativeOn:{click:function(e){return function(){return t.onEditItemClick("身份验证","select","joinMode")}()}}})],1):t._e(),a("van-cell-group",{staticClass:"m-group"},[t.hasManagePermission?[a("van-cell",{attrs:{title:"邀请他人权限",value:t.getTeamInfo("inviteMode"),"is-link":""},nativeOn:{click:function(e){return function(){return t.onEditItemClick("邀请他人权限","select","inviteMode")}()}}}),a("van-cell",{attrs:{title:"群资料修改权限",value:t.getTeamInfo("updateTeamMode"),"is-link":""},nativeOn:{click:function(e){return function(){return t.onEditItemClick("群资料修改权限","select","updateTeamMode")}()}}}),a("van-cell",{attrs:{title:"被邀请人身份验证",value:t.getTeamInfo("beInviteMode"),"is-link":""},nativeOn:{click:function(e){return function(){return t.onEditItemClick("被邀请人身份验证","select","beInviteMode")}()}}})]:t._e(),a("x-button",{attrs:{mini:"",type:"warn"},nativeOn:{click:function(e){return function(){return t.isOwner?t.dismissTeam():t.leaveTeam()}()}}},[t._v(t._s(t.isOwner?"解散群聊":"退出高级群"))])],2)]:t._e()],2)])},s=[],r=(a("7514"),a("bd86")),o=(a("7f7f"),a("f61f")),c=a("ed08"),m=a("86c6"),u=a("b970"),l=Object(r["a"])({data:function(){return{avatar:o["a"].defaultUserIcon,isOwner:!1,hasSearched:!1}},components:(n={},Object(r["a"])(n,u["b"].name,u["b"]),Object(r["a"])(n,u["c"].name,u["c"]),Object(r["a"])(n,u["d"].name,u["d"]),Object(r["a"])(n,u["a"].name,u["a"]),Object(r["a"])(n,u["f"].name,u["f"]),Object(r["a"])(n,u["i"].name,u["i"]),n),computed:{teamId:function(){return this.$route.params.teamId},teamInfo:function(){var t=this,e=this.$store.state.teamlist,a=e&&e.find(function(e){return e.teamId===t.teamId});if(a)return a},teamMembers:function(){return this.$store.state.teamMembers[this.teamId]},teamMemberNum:function(){return this.teamMembers&&this.teamMembers.length},teamAvatar:function(){return this.teamInfo.avatar||this.avatar},teamName:function(){return this.teamInfo&&this.teamInfo.name||"未设置"},nickName:function(){var t=this;if(!this.teamMembers)return"未设置";var e=this.teamMembers.find(function(e){return e.account===t.$store.state.userUID});return e&&e.nickInTeam||"未设置"},hasManagePermission:function(){var t=this;if(!this.teamMembers)return!1;var e=this.teamMembers.find(function(e){return e.account===t.$store.state.userUID});return this.isOwner="owner"===e.type,"normal"!==e.type},hasEditPermission:function(){return"normal"===this.teamInfo.type||"all"===this.teamInfo.updateTeamMode||this.hasManagePermission}},methods:{onTeamAvatarClick:function(){this.hasEditPermission&&this.$refs.input.click()},onFileSelected:function(t){var e=this;this.$store.dispatch("showLoading");var a=t.target;0!==a.files.length&&this.$store.dispatch("delegateTeamFunction",{functionName:"previewFile",options:{fileInput:a,done:function(t,a){if(e.$store.dispatch("hideLoading"),t)e.$toast(t);else{if(a.w<300||a.h<300)return void e.$toast("图片长宽不能小于300");e.updateTeamAvatar(a.url)}}}})},updateTeamAvatar:function(t){var e=this;this.$store.dispatch("delegateTeamFunction",{functionName:"updateTeam",options:{teamId:this.teamId,avatar:t,done:function(t,a){e.$toast(t||"修改群头像成功")}}})},dismissTeam:function(){var t=this;this.$vux.confirm.show({title:"确定要解散群？",onConfirm:function(){t.$store.dispatch("showLoading"),t.$store.dispatch("delegateTeamFunction",{functionName:"dismissTeam",options:{teamId:t.teamId,done:function(e,a){t.$store.dispatch("hideLoading"),t.$toast(e||"已解散群"),window.history.go(-1)}}})}})},leaveTeam:function(){var t=this;this.$vux.confirm.show({title:"确定要退出群？",onConfirm:function(){t.$store.dispatch("showLoading"),t.$store.dispatch("delegateTeamFunction",{functionName:"leaveTeam",options:{teamId:t.teamId,done:function(e,a){t.$store.dispatch("hideLoading"),t.$toast(e||"已退出群"),window.history.go(-2)}}})}})},onEditItemClick:function(t,e,a,n){this.$store.dispatch("enterSettingPage",{title:t,inputType:e,updateKey:a,teamId:this.teamId,defaultValue:this.teamInfo[a],updateInfoInTeam:n,enable:!!n||this.hasEditPermission})},getTeamInfo:function(t){return c["a"].teamConfigMap[t][this.teamInfo[t]]},formateDate:function(t){var e=new Date(t);return"".concat(e.getFullYear(),"-").concat(e.getMonth()+1,"-").concat(e.getDate())}}},"components",{TeamMember:m["a"]}),d=l,f=(a("43ca"),a("2877")),h=Object(f["a"])(d,i,s,!1,null,null,null);e["default"]=h.exports}}]);
//# sourceMappingURL=chunk-16f932ec.7509c27f.js.map