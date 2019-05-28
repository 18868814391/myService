<template>
  <div id="app" class="app-page">
    <!-- <div class="app-head" v-if="!admin">
      <div @click="goLogin">login</div>
      <div @click="goRegister">register</div>      
    </div>
    <div class="app-head" v-if="admin">
       欢迎你啊！{{Thename}}<span @click="golevel">更多权限</span>
    </div> -->

      <!-- <keep-alive >
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive> -->
      <nav-bar v-show="showNav"></nav-bar>
    <transition :name="transitionName">
      <router-view></router-view>
    </transition>   
  </div>
</template>

<script>
import { getThename,getadmin} from '@/utils/auth'
import Loading from './pages/components/Loading'
import FullscreenImg from './pages/components/FullscreenImg'
import Vue from 'vue'
import NavBar from './pages/components/NavBar'
import cookie from './utils/cookie'
import pageUtil from './utils/page'
const sessionHistory = window.sessionStorage
export default {
  name: 'app',
  data(){
    return{
      admin:getadmin(),
      Thename:getThename(),
      transitionName: 'forward'
    }
  },
  watch: {
    // 更新页面所在位置，用于判断是前进页还是后退页
    '$route' (to, from) {
      if (to && from) {
        let toPath = to.path
        let fromPath = from.path
        let count = parseInt(sessionHistory.getItem('count'))
        // 如果是导航页或者没有初始记录
        if (Number.isNaN(count)) {
          count = 1
          this.transitionName = 'forward'
        } else {
          count += 1
          let fromCount = parseInt(sessionHistory.getItem(fromPath))
          let toCount = parseInt(sessionHistory.getItem(toPath))
          if (toCount < fromCount && fromCount < count && (!pageUtil.showNav(fromPath))) {
            this.transitionName = 'backward'
            count = toCount
          } else {
            this.transitionName = 'forward'
          }
          if (pageUtil.showNav(toPath)) {
            count = 1
          }
        }
        sessionHistory.setItem(toPath, count)
        sessionHistory.setItem('count', count)
      }
    }
  },
    updated () {
    // 提交sdk连接请求
    // this.$store.dispatch('connect')
    // this.$store.dispatch('updateRefreshState')
  },
  components: {
    NavBar,
  },
  computed: {
    // 是否显示导航条
    showNav () {
      return pageUtil.showNav(this.$route.path)
    }
  },   
  created(){
    this.admin=this.$store.state.user.admin
    this.Thename=this.$store.state.user.Thename
  },
  methods:{
    goLogin(){
      this.$router.push({path: '/login'});  
    },
    goRegister(){
      this.$router.push({path: '/register'});        
    },
    golevel(){
      this.$router.push({path: '/level'});        
    }
  },
}
</script>
<style lang="scss">
@import './themes/theme.scss';
// .msg-text{
//   color: red;
// }
// body {
//   font-size: 14px;
//   background-color: #f2f2f2;
//   -webkit-font-smoothing: antialiased;
//   width: 100%;
//   height: 100%;
// }
// .app-page{
//   width: 100%;
//   height: 100%;
//   background: #f2f2f2;
//   .app-head{
//     width: 100%;
//     height: 50px;
//     background:linear-gradient(305deg,rgba(75,142,254,1) 0%,rgba(46,192,254,1) 100%);
//     display: flex;
//     align-items: center;
//     justify-content: space-around;
//     box-sizing: border-box;
//     overflow: hidden;
//     color: white;
//   }  
// }
</style>

