<template>
  <div id="app" class="app-page">
    <!-- 我的nav与路由 -->
    <div class="app-head" v-if="!admin&&(this.$store.state.user.showTabNav)">
      <div @click="goLogin">登陆</div>
      <div @click="goRegister">注册</div>      
    </div>
    <div class="app-head" v-if="admin&&(this.$store.state.user.showTabNav)" style="fontSize:14px;">
       欢迎你啊！{{Thename}}
       <span @click="golevel" style="fontSize:12px;">更多权限</span>
       <span style="fontSize:12px;" @click="logOut">退出</span>
    </div>
    <transition name="fade">        
        <router-view v-if="$route.meta.noAnima"></router-view>
    </transition>

<!-- 网易云信的nav与路由 -->
      <nav-bar v-show="showNav"></nav-bar>
    <transition :name="transitionName">
      <router-view v-if="!$route.meta.noAnima"></router-view>
    </transition> 


    <div class="app-home" @click="$router.push('/index')" id="pic">
      <div>首页</div>
    </div>      
  </div>
</template>

<script>
import { getThename,getadmin} from '@/utils/auth'
import Loading from './pages/components/Loading'
import FullscreenImg from './pages/components/FullscreenImg'
import Vue from 'vue'
import NavBar from './pages/components/NavBar'
import cookie from './utils/cookie'
import Cookies from 'js-cookie'
import pageUtil from './utils/page'
const sessionHistory = window.sessionStorage
export default {
  name: 'app',
  data(){
    return{
      admin:getadmin(),
      Thename:getThename(),
      transitionName: 'forward',
      position: { x: 0, y: 0 },
      nx: '', ny: '', dx: '', dy: '', xPum: '', yPum: '',x:'',y:'',         
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
  mounted() {
    let moveDiv = document.querySelector("#pic");
    this.w = document.documentElement.clientWidth || document.body.clientWidth;
    this.h = document.documentElement.clientHeight || document.body.clientHeight;
    this.x = moveDiv.offsetWidth;
    this.y = moveDiv.offsetHeight;
    moveDiv.addEventListener('touchstart', this.down, { passive: false })
    moveDiv.addEventListener('touchmove', this.move, { passive: false })
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
    },
    logOut(){
      Cookies.set('admin', '',{expires:-1})
      Cookies.set('Thename', ''.Thename,{expires:-1})   
      window.location.reload();   
    },
    down(){
      let moveDiv = document.querySelector("#pic");
      var touch;
      if(event.touches){
         touch = event.touches[0];
      }else {
        touch = event;
      }
      this.position.x = touch.clientX;
      this.position.y = touch.clientY;
      this.dx = moveDiv.offsetLeft; //左偏移量
      this.dy = moveDiv.offsetTop; //上移量
    },
    move(){
      let moveDiv = document.querySelector("#pic")
      var touch ;
      if(event.touches){
        touch = event.touches[0];
      }else {
        touch = event;
      }
      //组织默认事件，防止body滑动
      event.preventDefault();
      this.nx = touch.clientX - this.position.x;
      this.ny = touch.clientY - this.position.y;
      this.xPum = this.dx+this.nx;
      this.yPum = this.dy+this.ny;
      //边界判断
      this.xPum = this.xPum>0?this.xPum:0;
      this.yPum = this.yPum>0?this.yPum:0;
      this.xPum = this.xPum>this.w-this.x?this.w-this.x:this.xPum;
      this.yPum = this.yPum>this.h-this.y?this.h-this.y:this.yPum;

      moveDiv.style.left = this.xPum+"px";
      moveDiv.style.top = this.yPum +"px";
    }      
  },
}
</script>
<style lang="scss">
@import './themes/theme.scss';
body{
  background: #f2f2f2;
}
.msg-text{
  color: red;
}
.app-page{
  width: 100%;   
  .app-head{
    width: 100%;
    height: 50px;
    background-image: linear-gradient( 135deg, #52E5E7 10%, #130CB7 100%);
    display: flex;
    align-items: center;
    justify-content: space-around;
    box-sizing: border-box;
    overflow: hidden;
    color: white;
  }
  .app-home {
    position: fixed;
    right: 28px;
    bottom: 111px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    text-align: center;
    line-height: 40px;
    box-sizing: border-box;
    background-image: linear-gradient( 135deg, #52E5E7 10%, #130CB7 100%);
    z-index: 999;
    box-shadow: 0 2px 2px 2px rgba(49, 49, 49, 0.2);
    div {
      color: #fff;
      font-size: 8px;
    }
  }   
}
</style>

