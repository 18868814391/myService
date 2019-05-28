<template>
  <div class="g-inherit m-main p-session">
    <van-cell-group class="u-list">
      <van-cell class="session-cell" title="消息中心" @click.native="enterSysMsgs">
        <img class="session-icon" slot="icon" :src="noticeIcon">
        <span v-show="sysMsgUnread >0" class="session-noRead">{{sysMsgUnread}}</span>
      </van-cell>
      <van-cell class="session-cell" title="我的手机" @click.native="enterMyChat">
        <img class="session-icon" slot="icon" :src="myPhoneIcon">
      </van-cell>
      <van-cell
        v-for="(session, index) in sessionlist"
         class="session-cell"
        :title="session.name"
        :label="session.lastMsgShow"
        :key="session.id"
        :sessionId="session.id"
        v-touch:swipeleft="showDelBtn"
        v-touch:swiperight="hideDelBtn"
        @click.native="enterChat(session)" >
        <img class="session-icon" slot="icon" :src="session.avatar">
        <span class='u-session-time'>
          {{session.updateTimeShow}}
        </span>
        <span v-show="session.unread > 0" class="session-noRead">{{session.unread}}</span>
        <span
          class="u-tag-del"
          :class="{active: delSessionId===session.id}"
          @click="deleteSession"
          ></span>
      </van-cell>
    </van-cell-group>
    <div class="backIndex" @click="backIndex">
      回到首页
    </div>
  </div>
</template>

<script>
import util from '../utils'
import config from '../configs'
import { Cell, CellGroup } from 'vant';

export default {
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
  },   
  data () {
    return {
      delSessionId: null,
      stopBubble: false,
      noticeIcon: config.noticeIcon,
      myPhoneIcon: config.myPhoneIcon,
      myGroupIcon: config.defaultGroupIcon,
      myAdvancedIcon: config.defaultAdvancedIcon
    }
  },
  created(){
    this.$store.dispatch('connect')
    this.$store.dispatch('updateRefreshState')    
    // this.$store.dispatch('connect')
  // - 初始化聊天代码见：src/store/actions/initNimSDK.js
  // - 初始化聊天室代码见：src/store/actions/initChatroomSDK.js
  },
  computed: {
    sysMsgUnread () {
      let temp = this.$store.state.sysMsgUnread
      let sysMsgUnread = temp.addFriend || 0
      sysMsgUnread += temp.team || 0
      let customSysMsgUnread = this.$store.state.customSysMsgUnread
      return sysMsgUnread + customSysMsgUnread
    },
    userInfos () {
      return this.$store.state.userInfos
    },
    myInfo () {
      return this.$store.state.myInfo
    },
    myPhoneId () {
      return `${this.$store.state.userUID}`
    },
    sessionlist () {
      let sessionlist = this.$store.state.sessionlist.filter(item => {
        item.name = ''
        item.avatar = ''
        if (item.scene === 'p2p') {
          let userInfo = null
          if (item.to !== this.myPhoneId) {
            userInfo = this.userInfos[item.to]
          } else {
            // userInfo = this.myInfo
            // userInfo.alias = '我的手机'
            // userInfo.avatar = `${config.myPhoneIcon}`
            return false
          }
          if (userInfo) {
            item.name = util.getFriendAlias(userInfo)
            item.avatar = userInfo.avatar
          }
        } else if (item.scene === 'team') {
          let teamInfo = null
          teamInfo = this.$store.state.teamlist.find(team => {
            return team.teamId === item.to
          })
          if (teamInfo) {
            item.name = teamInfo.name
            item.avatar = teamInfo.avatar || (teamInfo.type === 'normal' ? this.myGroupIcon : this.myAdvancedIcon)
          } else {
            item.name = `群${item.to}`
            item.avatar = item.avatar || this.myGroupIcon
          }
        }
        let lastMsg = item.lastMsg || {}
        if (lastMsg.type === 'text') {
          item.lastMsgShow = lastMsg.text || ''
        } else if (lastMsg.type === 'custom') {
          item.lastMsgShow = util.parseCustomMsg(lastMsg)
        } else if (lastMsg.scene === 'team' && lastMsg.type === 'notification') {
          item.lastMsgShow = util.generateTeamSysmMsg(lastMsg)
        } else if (util.mapMsgType(lastMsg)) {
          item.lastMsgShow = `[${util.mapMsgType(lastMsg)}]`
        } else {
          item.lastMsgShow = ''
        }
        if (item.updateTime) {
          item.updateTimeShow = util.formatDate(item.updateTime, true)
        }
        return item
      })
      return sessionlist
    }
  },
  methods: {
    enterSysMsgs () {
      if (this.hideDelBtn())
        return
      location.href = '#/sysmsgs'
    },
    backIndex(){
      this.$router.push({ path: '/index' });  
    },
    enterChat (session) {
      if (this.hideDelBtn())
        return
      if (session && session.id)
        location.href = `#/chat/${session.id}`
    },
    enterMyChat () {
      // 我的手机页面
      location.href = `#/chat/p2p-${this.myPhoneId}`
    },
    deleteSession () {
      if (this.delSessionId !== null) {
        this.$store.dispatch('deleteSession', this.delSessionId)
      }
    },
    showDelBtn (vNode) {
      if (vNode && vNode.data && vNode.data.attrs) {
        this.delSessionId = vNode.data.attrs.sessionId
        this.stopBubble = true
        setTimeout(() => {
          this.stopBubble = false
        }, 20)
      }
    },
    hideDelBtn () {
      if (this.delSessionId !== null && !this.stopBubble) {
        // 用于判断是否前置状态是显示删除按钮
        this.delSessionId = null
        return true
      }
      return false
    }
  }
}
</script>
<style lang="scss">
  .session-icon{
    width: 30px;
    height: 30px;
    margin-right:5px; 
  }
  .session-cell{
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    position: relative;
  }
  .session-noRead{
    display: inline-block;
    background-color: #f00;
    color: #fff;
    height: 16px;
    font-size: 12px;
    min-width: 16px;
    text-align: center;
    line-height: 16px;
    border-radius:8px;
    padding:0 3px;
  }
  .backIndex{
    width: 45px;
    height: 45px;
    background: lavender;
    position: fixed;
    bottom:50px;
    right: 50px;
    border-radius:50%;
    font-size: 12px;
    padding: 5px;
    box-sizing: border-box;
    text-align: center;
  }
</style>

