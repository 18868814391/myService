<template>
  <div>222</div>
</template>
<script>
export default {
  data(){
    return{
      data:{},
      nim:null,
    }
  },
  created(){
    const self=this;
    var nim = SDK.NIM.getInstance({
      // debug: true,
      appKey: '45c6af3c98409b18a84451215d0bdd6e',
      account: 'pptvvx',
      token: '153719072fddad21235b126d4f0436dc',
        onconnect: self.onConnect,
        onerror: self.onError,
        onwillreconnect: self.onWillReconnect,
        ondisconnect: self.onDisconnect,
        // 多端登录
        onloginportschange: self.onLoginPortsChange,
        // 用户关系
        onblacklist: self.onBlacklist,
        onsyncmarkinblacklist: self.onMarkInBlacklist,
        onmutelist: self.onMutelist,
        onsyncmarkinmutelist: self.onMarkInMutelist,
        // 好友关系
        onfriends: self.onFriends,
        onsyncfriendaction: self.onSyncFriendAction,
        // 用户名片
        onmyinfo: self.onMyInfo,
        onupdatemyinfo: self.onUpdateMyInfo,
        onusers: self.onUsers,
        onupdateuser: self.onUpdateUser,
        // 机器人列表的回调
        onrobots: self.onRobots,
        // 群组
        onteams: self.onTeams,
        onsynccreateteam: self.onCreateTeam,
        onUpdateTeam: self.onUpdateTeam,
        onteammembers: self.onTeamMembers,
        // onsyncteammembersdone: onSyncTeamMembersDone,
        onupdateteammember: self.onUpdateTeamMember,
        // 群消息业务已读通知
        onTeamMsgReceipt: self.onTeamMsgReceipt,
        // 会话
        onsessions: self.onSessions,
        onupdatesession: self.onUpdateSession,
        // 消息
        onroamingmsgs: self.onRoamingMsgs,
        onofflinemsgs: self.onOfflineMsgs,
        onmsg: self.onMsg,
        // 系统通知
        onofflinesysmsgs: self.onOfflineSysMsgs,
        onsysmsg: self.onSysMsg,
        onupdatesysmsg: self.onUpdateSysMsg,
        onsysmsgunread: self.onSysMsgUnread,
        onupdatesysmsgunread: self.onUpdateSysMsgUnread,
        onofflinecustomsysmsgs: self.onOfflineCustomSysMsgs,
        oncustomsysmsg: self.onCustomSysMsg,
        // 收到广播消息
        onbroadcastmsg: self.onBroadcastMsg,
        onbroadcastmsgs: self.onBroadcastMsgs,
        // 同步完成
        onsyncdone: self.onSyncDone
    });
    this.nim=nim
    // var msg = this.nim.sendText({
    //   scene: 'p2p',
    //   to: 'pptvvx2',
    //   text: 'hello',
    //   done: function sendMsgDone (error, msg) {
    //     // ...
    //   }
    // })
  },
  methods:{
    onConnect() {
        console.log('连接成功');
        console.log(this.nim);
    },
    onWillReconnect(obj) {
        // 此时说明 `SDK` 已经断开连接, 请开发者在界面上提示用户连接已断开, 而且正在重新建立连接
        console.log('即将重连');
        console.log(obj.retryCount);
        console.log(obj.duration);
    },
    onDisconnect(error) {
        // 此时说明 `SDK` 处于断开状态, 开发者此时应该根据错误码提示相应的错误信息, 并且跳转到登录页面
        console.log('丢失连接');
        console.log(error);
        if (error) {
            switch (error.code) {
            // 账号或者密码错误, 请跳转到登录页面并提示错误
            case 302:
                break;
            // 被踢, 请提示错误后跳转到登录页面
            case 'kicked':
                break;
            default:
                break;
            }
        }
    },
    onError(error) {
        console.log(error);
    },

    onLoginPortsChange(loginPorts) {
        console.log('当前登录帐号在其它端的状态发生改变了', loginPorts);
    },

    onBlacklist(blacklist) {
        console.log('收到黑名单', blacklist);
        this.data.blacklist = this.nim.mergeRelations(this.data.blacklist, blacklist);
        this.data.blacklist = this.nim.cutRelations(this.data.blacklist, blacklist.invalid);
        this.refreshBlacklistUI();
    },
    onMarkInBlacklist(obj) {
        console.log(obj);
        console.log(obj.account + '被你在其它端' + (obj.isAdd ? '加入' : '移除') + '黑名单');
        if (obj.isAdd) {
            this.addToBlacklist(obj);
        } else {
            this.removeFromBlacklist(obj);
        }
    },
    addToBlacklist(obj) {
        this.data.blacklist = this.nim.mergeRelations(this.data.blacklist, obj.record);
        this.refreshBlacklistUI();
    },
    removeFromBlacklist(obj) {
        this.data.blacklist = this.nim.cutRelations(this.data.blacklist, obj.record);
        this.refreshBlacklistUI();
    },
    refreshBlacklistUI() {
       //window.location.reload();
    },
    onMutelist(mutelist) {
        console.log('收到静音列表', mutelist);
        this.data.mutelist = this.nim.mergeRelations(this.data.mutelist, mutelist);
        this.data.mutelist = this.nim.cutRelations(this.data.mutelist, mutelist.invalid);
        this.refreshMutelistUI();
    },
    onMarkInMutelist(obj) {
        console.log(obj);
        console.log(obj.account + '被你' + (obj.isAdd ? '加入' : '移除') + '静音列表');
        if (obj.isAdd) {
            this.addToMutelist(obj);
        } else {
            this.removeFromMutelist(obj);
        }
    },
    addToMutelist(obj) {
        this.data.mutelist = this.nim.mergeRelations(this.data.mutelist, obj.record);
        this.refreshMutelistUI();
    },
    removeFromMutelist(obj) {
        this.data.mutelist = this.nim.cutRelations(this.data.mutelist, obj.record);
        this.refreshMutelistUI();
    },
    refreshMutelistUI() {
      //window.location.reload();
    },

    onFriends(friends) {
        console.log('收到好友列表', friends);
        this.data.friends = this.nim.mergeFriends(this.data.friends, friends);
        this.data.friends = this.nim.cutFriends(this.data.friends, friends.invalid);
        this.refreshFriendsUI();
    },
    onSyncFriendAction(obj) {
        console.log(obj);
        switch (obj.type) {
        case 'addFriend':
            console.log('你在其它端直接加了一个好友' + obj.account + ', 附言' + obj.ps);
            this.onAddFriend(obj.friend);
            break;
        case 'applyFriend':
            console.log('你在其它端申请加了一个好友' + obj.account + ', 附言' + obj.ps);
            break;
        case 'passFriendApply':
            console.log('你在其它端通过了一个好友申请' + obj.account + ', 附言' + obj.ps);
            this.onAddFriend(obj.friend);
            break;
        case 'rejectFriendApply':
            console.log('你在其它端拒绝了一个好友申请' + obj.account + ', 附言' + obj.ps);
            break;
        case 'deleteFriend':
            console.log('你在其它端删了一个好友' + obj.account);
            this.onDeleteFriend(obj.account);
            break;
        case 'updateFriend':
            console.log('你在其它端更新了一个好友', obj.friend);
            this.onUpdateFriend(obj.friend);
            break;
        }
    },
    onAddFriend(friend) {
        this.data.friends = this.nim.mergeFriends(this.data.friends, friend);
        this.refreshFriendsUI();
    },
    onDeleteFriend(account) {
        this.data.friends = this.nim.cutFriendsByAccounts(this.data.friends, account);
        this.refreshFriendsUI();
    },
    onUpdateFriend(friend) {
        this.data.friends = this.nim.mergeFriends(this.data.friends, friend);
        this.refreshFriendsUI();
    },
    refreshFriendsUI() {
      //window.location.reload();
    },

    onMyInfo(user) {
        console.log('收到我的名片', user);
        this.data.myInfo = user;
        this.updateMyInfoUI();
    },
    onUpdateMyInfo(user) {
        console.log('我的名片更新了', user);
        this.data.myInfo = NIM.util.merge(this.data.myInfo, user);
        this.updateMyInfoUI();
    },
    updateMyInfoUI() {
       //window.location.reload();
    },
    onUsers(users) {
        console.log('收到用户名片列表', users);
        this.data.users = this.nim.mergeUsers(this.data.users, users);
    },
    onUpdateUser(user) {
        console.log('用户名片更新了', user);
        this.data.users = this.nim.mergeUsers(this.data.users, user);
    },
    onRobots (robots) {
        // 客户私有化方案不支持
        console.log('收到机器人列表', robots);
        this.data.robots = robots;
    },
    onTeams(teams) {
        console.log('群列表', teams);
        this.data.teams = this.nim.mergeTeams(this.data.teams, teams);
        this.onInvalidTeams(teams.invalid);
    },
    onInvalidTeams(teams) {
        this.data.teams = this.nim.cutTeams(this.data.teams, teams);
        this.data.invalidTeams = this.nim.mergeTeams(this.data.invalidTeams, teams);
        this.refreshTeamsUI();
    },
    onCreateTeam(team) {
        console.log('你创建了一个群', team);
        this.data.teams = this.nim.mergeTeams(this.data.teams, team);
        this.refreshTeamsUI();
        this.onTeamMembers({
            teamId: team.teamId,
            members: owner
        });
    },
    refreshTeamsUI() {
      //window.location.reload();
    },
    onTeamMembers(teamId, members) {
        console.log('群id', teamId, '群成员', members);
        var teamId = obj.teamId;
        var members = obj.members;
        this.data.teamMembers = this.data.teamMembers || {};
        this.data.teamMembers[teamId] = this.nim.mergeTeamMembers(this.data.teamMembers[teamId], members);
        this.data.teamMembers[teamId] = this.nim.cutTeamMembers(this.data.teamMembers[teamId], members.invalid);
        this.refreshTeamMembersUI();
    },
    onSyncTeamMembersDone() {
        console.log('同步群列表完成');
    },
    onUpdateTeam (team) {
        console.log('群状态更新', team)
    },
    onUpdateTeamMember(teamMember) {
        console.log('群成员信息更新了', teamMember);
        this.onTeamMembers({
            teamId: teamMember.teamId,
            members: teamMember
        });
    },
    refreshTeamMembersUI() {
      //window.location.reload();
    },
    onTeamMsgReceipt (teamMsgReceipts) {
        console.log('群消息已读通知', teamMsgReceipts)
    },

    onSessions(sessions) {
        console.log('收到会话列表', sessions);
        this.data.sessions = this.nim.mergeSessions(this.data.sessions, sessions);
        this.updateSessionsUI();
    },
    onUpdateSession(session) {
        console.log('会话更新了', session);
        this.data.sessions = this.nim.mergeSessions(this.data.sessions, session);
        this.updateSessionsUI();
    },
    updateSessionsUI() {
      //window.location.reload();
    },

    onRoamingMsgs(obj) {
        console.log('漫游消息', obj);
        this.pushMsg(obj.msgs);
    },
    onOfflineMsgs(obj) {
        console.log('离线消息', obj);
        this.pushMsg(obj.msgs);
    },
    onMsg(msg) {
        console.log('收到消息', msg.scene, msg.type, msg);
        this.pushMsg(msg);
    },
    onBroadcastMsg(msg) {
        console.log('收到广播消息', msg);
    },
    onBroadcastMsgs(msgs) {
        console.log('收到广播消息列表', msgs);
    },
    pushMsg(msgs) {
        if (!Array.isArray(msgs)) { msgs = [msgs]; }
        var sessionId = msgs[0].sessionId;
        this.data.msgs = this.data.msgs || {};
        this.data.msgs[sessionId] = this.nim.mergeMsgs(this.data.msgs[sessionId], msgs);
    },

    onOfflineSysMsgs(sysMsgs) {
        console.log('收到离线系统通知', sysMsgs);
        this.pushSysMsgs(sysMsgs);
    },
    onSysMsg(sysMsg) {
        console.log('收到系统通知', sysMsg)
        this.pushSysMsgs(sysMsg);
    },
    onUpdateSysMsg(sysMsg) {
        this.pushSysMsgs(sysMsg);
    },
    pushSysMsgs(sysMsgs) {
        this.data.sysMsgs = this.nim.mergeSysMsgs(this.data.sysMsgs, sysMsgs);
        this.refreshSysMsgsUI();
    },
    onSysMsgUnread(obj) {
        console.log('收到系统通知未读数', obj);
        this.data.sysMsgUnread = obj;
        this.refreshSysMsgsUI();
    },
    onUpdateSysMsgUnread(obj) {
        console.log('系统通知未读数更新了', obj);
        this.data.sysMsgUnread = obj;
        this.refreshSysMsgsUI();
    },
    refreshSysMsgsUI() {
      //window.location.reload();
    },
    onOfflineCustomSysMsgs(sysMsgs) {
        console.log('收到离线自定义系统通知', sysMsgs);
    },
    onCustomSysMsg(sysMsg) {
        console.log('收到自定义系统通知', sysMsg);
    },

    onSyncDone() {
        console.log('同步完成',this.data);
    },    
    fun2(){
      var msg = nim.sendText({
        scene: 'p2p',
        to: 'account',
        text: 'hello',
        done: function sendMsgDone (error, msg) {
          // ...
        }
      })      

      // 委托通知示例
      var nim = NIM.getInstance({
        // ... 此处省略其他配置
        onmsg: function (msg) {
          // 此处为委托消息事件，消息发送成功后，成功消息也在此处处理
        }
      })
      // 回调通知示例
      var msg = nim.sendText({
        scene: 'p2p',
        to: 'account',
        text: 'hello',
        done: function sendMsgDone (error, msg) {
          // 此处为回调消息事件，仅仅通知开发者，消息是否发送成功
        }
      })  

    },
  },
}
</script>
<style lang="scss">

</style>


