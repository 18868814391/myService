(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-16f932ec"],{"01e3":function(t,e,a){},3897:function(t,e,a){},"43ca":function(t,e,a){"use strict";var n=a("01e3");a.n(n).a},"86c6":function(t,e,a){"use strict";var n=(a("ac6a"),a("5176")),s=a.n(n),i=(a("7514"),{props:{teamId:{type:String},advanced:{type:Boolean,default:!1},showAllMode:{type:Boolean,default:!1},filterAccount:{type:Array}},data:function(){return{removeMode:!1,hasManagePermission:!1,hasSearched:!1}},mounted:function(){void 0===this.$store.state.teamMembers[this.teamId]&&this.$store.dispatch("getTeamMembers",this.teamId)},computed:{teamInfo:function(){var e=this,t=this.$store.state.teamlist,a=t&&t.find(function(t){return t.teamId===e.teamId});if(a)return a},members:function(){var a=this,t=this.$store.state.teamMembers[this.teamId],n=this.$store.state.userInfos,i=[];if(t){if(t=t.map(function(t){var e=s()({},t);return e.valid=!0,e.account===a.$store.state.userUID?(e.alias="我",e.avatar=a.$store.state.myInfo.avatar,a.isOwner="owner"===e.type,a.hasManagePermission="normal"!==e.type):void 0===n[e.account]?(i.push(e.account),e.avatar=e.avatar||a.avatar,e.alias=e.nickInTeam||e.account):(e.avatar=n[e.account].avatar,e.alias=e.nickInTeam||n[e.account].nick),e}),0<i.length&&!this.hasSearched)for(this.hasSearched=!0;0<i.length;)this.searchUsers(i.splice(0,150));return t}return[]},membersInDisplay:function(){var t=this;return this.filterAccount?this.members.filter(function(e){return!!t.filterAccount.find(function(t){return t===e.account})}):this.advanced||this.showAllMode?this.members:this.members.slice(0,this.hasInvitePermission?3:4)},hasInvitePermission:function(){return this.advanced&&(this.hasManagePermission||this.teamInfo&&"all"===this.teamInfo.inviteMode)}},methods:{searchUsers:function(t){var e=this;this.$store.dispatch("searchUsers",{accounts:t,done:function(t){e.updateTeamMember(t)}})},updateTeamMember:function(t){var a=this;t.forEach(function(e){var t=a.members.find(function(t){return t.account===e.account});t&&(t.avatar=e.avatar,t.alias=t.nickInTeam||e.nick)})},triggerRemove:function(t,e){this.removeMode=!this.removeMode},remove:function(t,e){var a=this;this.$store.dispatch("showLoading"),this.$store.dispatch("delegateTeamFunction",{functionName:"removeTeamMembers",options:{teamId:this.teamId,accounts:[e.account],done:function(t,e){a.$toast("移除成功"),a.$store.dispatch("hideLoading")}}}),t.cancelBubble=!0,t.preventDefault()},onMemberClick:function(t){location.href=this.advanced?"#/teammembercard/".concat(t.id):"#/namecard/".concat(t.account)}}}),r=(a("9529"),a("2877")),o=Object(r.a)(i,function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("div",{staticClass:"m-members",class:{"s-bg-white":a.advanced&&!a.showAllMode}},[a.hasInvitePermission&&!a.showAllMode?n("a",{staticClass:"u-member",attrs:{href:"#/teaminvite/"+a.teamId}},[n("img",{staticClass:"avatar",attrs:{src:"http://yx-web.nos.netease.com/webdoc/h5/im/team_member_add.png",alt:""}}),n("span",[a._v("添加")])]):a._e(),a._l(a.membersInDisplay,function(e){return n("a",{key:e.account,staticClass:"u-member",on:{click:function(t){return a.onMemberClick(e)}}},[n("img",{staticClass:"avatar u-circle",attrs:{src:e.avatar}}),a.removeMode&&"owner"!=e.type&&e.account!=a.$store.state.userUID?n("span",{staticClass:"remove",on:{click:function(t){return a.remove(t,e)}}}):a._e(),"normal"!==e.type?n("span",{class:"manager"===e.type?"manager":"owner"}):a._e(),n("span",[a._v(a._s(e.alias))])])}),a.advanced?a._e():[n("a",{staticClass:"u-member",attrs:{href:"#/teaminvite/"+a.teamId}},[n("img",{staticClass:"avatar",attrs:{src:"http://yx-web.nos.netease.com/webdoc/h5/im/team_member_add.png",alt:""}}),n("span",[a._v("添加")])]),a.hasManagePermission?n("div",{staticClass:"u-member",on:{click:function(t){return a.triggerRemove()}}},[n("img",{staticClass:"avatar",attrs:{src:"http://yx-web.nos.netease.com/webdoc/h5/im/team_member_delete.png",alt:""}}),n("span",[a._v("移除")])]):a._e()]],2)},[],!1,null,"aad428f0",null);e.a=o.exports},9529:function(t,e,a){"use strict";var n=a("3897");a.n(n).a},d338:function(t,e,a){"use strict";a.r(e);var n,i=(a("7514"),a("bd86")),s=(a("7f7f"),a("f61f")),r=a("ed08"),o=a("86c6"),c=a("b970"),m=Object(i.a)({data:function(){return{avatar:s.a.defaultUserIcon,isOwner:!1,hasSearched:!1}},components:(n={},Object(i.a)(n,c.b.name,c.b),Object(i.a)(n,c.c.name,c.c),Object(i.a)(n,c.d.name,c.d),Object(i.a)(n,c.a.name,c.a),Object(i.a)(n,c.f.name,c.f),Object(i.a)(n,c.h.name,c.h),n),computed:{teamId:function(){return this.$route.params.teamId},teamInfo:function(){var e=this,t=this.$store.state.teamlist,a=t&&t.find(function(t){return t.teamId===e.teamId});if(a)return a},teamMembers:function(){return this.$store.state.teamMembers[this.teamId]},teamMemberNum:function(){return this.teamMembers&&this.teamMembers.length},teamAvatar:function(){return this.teamInfo.avatar||this.avatar},teamName:function(){return this.teamInfo&&this.teamInfo.name||"未设置"},nickName:function(){var e=this;if(!this.teamMembers)return"未设置";var t=this.teamMembers.find(function(t){return t.account===e.$store.state.userUID});return t&&t.nickInTeam||"未设置"},hasManagePermission:function(){var e=this;if(!this.teamMembers)return!1;var t=this.teamMembers.find(function(t){return t.account===e.$store.state.userUID});return this.isOwner="owner"===t.type,"normal"!==t.type},hasEditPermission:function(){return"normal"===this.teamInfo.type||"all"===this.teamInfo.updateTeamMode||this.hasManagePermission}},methods:{onTeamAvatarClick:function(){this.hasEditPermission&&this.$refs.input.click()},onFileSelected:function(t){var a=this;this.$store.dispatch("showLoading");var e=t.target;0!==e.files.length&&this.$store.dispatch("delegateTeamFunction",{functionName:"previewFile",options:{fileInput:e,done:function(t,e){if(a.$store.dispatch("hideLoading"),t)a.$toast(t);else{if(e.w<300||e.h<300)return void a.$toast("图片长宽不能小于300");a.updateTeamAvatar(e.url)}}}})},updateTeamAvatar:function(t){var a=this;this.$store.dispatch("delegateTeamFunction",{functionName:"updateTeam",options:{teamId:this.teamId,avatar:t,done:function(t,e){a.$toast(t||"修改群头像成功")}}})},dismissTeam:function(){var a=this;this.$vux.confirm.show({title:"确定要解散群？",onConfirm:function(){a.$store.dispatch("showLoading"),a.$store.dispatch("delegateTeamFunction",{functionName:"dismissTeam",options:{teamId:a.teamId,done:function(t,e){a.$store.dispatch("hideLoading"),a.$toast(t||"已解散群"),window.history.go(-1)}}})}})},leaveTeam:function(){var a=this;this.$vux.confirm.show({title:"确定要退出群？",onConfirm:function(){a.$store.dispatch("showLoading"),a.$store.dispatch("delegateTeamFunction",{functionName:"leaveTeam",options:{teamId:a.teamId,done:function(t,e){a.$store.dispatch("hideLoading"),a.$toast(t||"已退出群"),window.history.go(-2)}}})}})},onEditItemClick:function(t,e,a,n){this.$store.dispatch("enterSettingPage",{title:t,inputType:e,updateKey:a,teamId:this.teamId,defaultValue:this.teamInfo[a],updateInfoInTeam:n,enable:!!n||this.hasEditPermission})},getTeamInfo:function(t){return r.a.teamConfigMap[t][this.teamInfo[t]]},formateDate:function(t){var e=new Date(t);return"".concat(e.getFullYear(),"-").concat(e.getMonth()+1,"-").concat(e.getDate())}}},"components",{TeamMember:o.a}),u=(a("43ca"),a("2877")),l=Object(u.a)(m,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"g-inherit m-article p-teammanager"},[a("div",{staticClass:"m-body"},[e.teamInfo&&"normal"===e.teamInfo.type?[a("team-member",{attrs:{teamId:e.teamId}}),a("van-cell-group",{staticClass:"m-group"},[a("van-cell",{attrs:{title:"讨论组名称",value:e.teamName,"is-link":""},nativeOn:{click:function(t){return e.onEditItemClick("修改讨论组名称","text","name")}}}),a("van-button",{attrs:{mini:"",type:"warn"},nativeOn:{click:function(t){return e.leaveTeam(t)}}},[e._v("退出讨论组")])],1)]:e._e(),e.teamInfo&&"advanced"===e.teamInfo.type?[a("van-cell",{attrs:{"is-link":""},nativeOn:{click:function(t){return e.onTeamAvatarClick(t)}}},[a("div",{staticClass:"m-teaminfo",attrs:{slot:"icon"},slot:"icon"},[a("img",{staticClass:"avatar u-circle",attrs:{src:e.teamAvatar}}),a("div",{staticClass:"u-info"},[a("p",[e._v(e._s(e.teamInfo.name))]),a("span",[e._v(e._s(e.teamInfo.teamId+" 于"+e.formateDate(e.teamInfo.createTime)+"创建"))])])]),a("form",[a("input",{ref:"input",staticStyle:{display:"none"},attrs:{type:"file",accept:"image/*"},on:{change:e.onFileSelected}})])]),a("van-cell-group",{staticClass:"m-group"},[a("van-cell",{attrs:{title:"群成员",value:"共"+e.teamMemberNum+"人","is-link":"",link:"/teammembers/"+e.teamId}}),a("team-member",{attrs:{teamId:e.teamId,advanced:!0}})],1),a("van-cell-group",{staticClass:"m-group"},[a("van-cell",{attrs:{title:"群名称",value:e.teamName,"is-link":""},nativeOn:{click:function(t){return e.onEditItemClick(e.hasEditPermission?"修改群名称":"群名称","text","name")}}}),a("van-cell",{attrs:{title:"群昵称",value:e.nickName,"is-link":""},nativeOn:{click:function(t){return e.onEditItemClick("修改群昵称","text","nickInTeam",!0)}}}),a("van-cell",{attrs:{title:"群介绍",value:e.teamInfo.intro||"未设置","is-link":""},nativeOn:{click:function(t){return e.onEditItemClick(e.hasEditPermission?"修改群介绍":"群介绍","textarea","intro")}}})],1),e.hasManagePermission?a("van-cell-group",{staticClass:"m-group"},[a("van-cell",{attrs:{title:"身份验证",value:e.getTeamInfo("joinMode"),"is-link":""},nativeOn:{click:function(t){return e.onEditItemClick("身份验证","select","joinMode")}}})],1):e._e(),a("van-cell-group",{staticClass:"m-group"},[e.hasManagePermission?[a("van-cell",{attrs:{title:"邀请他人权限",value:e.getTeamInfo("inviteMode"),"is-link":""},nativeOn:{click:function(t){return e.onEditItemClick("邀请他人权限","select","inviteMode")}}}),a("van-cell",{attrs:{title:"群资料修改权限",value:e.getTeamInfo("updateTeamMode"),"is-link":""},nativeOn:{click:function(t){return e.onEditItemClick("群资料修改权限","select","updateTeamMode")}}}),a("van-cell",{attrs:{title:"被邀请人身份验证",value:e.getTeamInfo("beInviteMode"),"is-link":""},nativeOn:{click:function(t){return e.onEditItemClick("被邀请人身份验证","select","beInviteMode")}}})]:e._e(),a("x-button",{attrs:{mini:"",type:"warn"},nativeOn:{click:function(t){return e.isOwner?e.dismissTeam():e.leaveTeam()}}},[e._v(e._s(e.isOwner?"解散群聊":"退出高级群"))])],2)]:e._e()],2)])},[],!1,null,null,null);e.default=l.exports}}]);