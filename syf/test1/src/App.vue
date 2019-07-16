<template>
  <div id="app" class="app-page">
    <!-- 我的nav与路由 -->
    <div class="app-head" v-show="!admin&&(this.$store.state.user.showTabNav)">
      <!-- <div @click="goLogin">登陆</div>
      <div @click="goRegister">注册</div>       -->
    </div>
    <div class="app-head" v-show="admin&&(this.$store.state.user.showTabNav)" style="fontSize:14px;">
       欢迎你啊！
       <!-- {{Thename}} -->
       <!-- <span @click="golevel" style="fontSize:12px;">更多权限</span> -->
       <!-- <span style="fontSize:12px;" @click="logOut">退出</span> -->
    </div>
    <!-- <keep-alive>
      <router-view v-if="$route.meta.keepAlive" />
    </keep-alive> -->
    <transition name="fade" v-if="!$route.meta.keepAlive">        
        <router-view v-if="$route.meta.noAnima"></router-view>
    </transition>


      <keep-alive>  
        <transition name="fade" v-if="$route.meta.keepAlive"> 
            <router-view v-if="$route.meta.noAnima"></router-view>
        </transition>    
      </keep-alive> 


<!-- 网易云信的nav与路由 -->
      <nav-bar v-show="showNav"></nav-bar>
    <transition :name="transitionName">
      <router-view v-if="!$route.meta.noAnima"></router-view>
    </transition> 


    <div class="app-home" @click="$router.push('/index')" id="pic">
      <div><intrestTxt></intrestTxt></div>
    </div>      
  </div>
</template>

<script>
import { getThename,getadmin} from '@/utils/auth'
import intrestTxt from '@/components/intrestTxt.vue'
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
  components: {
    NavBar,
    [intrestTxt.name]:intrestTxt,
  },   
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
    const self=this;
    self.loadAsyncScript('http://118.31.62.251/apis/syf/staticJS/jquery-2.1.1.min.js',function(){
      self.loadAsyncScript('http://118.31.62.251/apis/syf/staticJS/jquery.gradientify.min.js',function(){
        $(document).ready(function() {
          $(".app-head").gradientify({
            gradients: [
              { start: [49,76,172], stop: [242,159,191] },
              { start: [255,103,69], stop: [240,154,241] },
              { start: [33,229,241], stop: [235,236,117] }
            ]
          });
        });
          $(document).ready(function() {
          $(".app-home").gradientify({
            gradients: [
              { start: [49,76,172], stop: [242,159,191] },
              { start: [255,103,69], stop: [240,154,241] },
              { start: [33,229,241], stop: [235,236,117] }
            ]
          });
        });        
      })
    })
    
      const s2 = document.createElement('script');
      s2.type = 'text/javascript';
      s2.src = 'http://118.31.62.251/apis/syf/staticJS/loveheart.js';
      document.body.appendChild(s2);


    let moveDiv = document.querySelector("#pic");
    this.w = document.documentElement.clientWidth || document.body.clientWidth;
    this.h = document.documentElement.clientHeight || document.body.clientHeight;
    this.x = moveDiv.offsetWidth;
    this.y = moveDiv.offsetHeight;
    moveDiv.addEventListener('touchstart', this.down, { passive: false })
    moveDiv.addEventListener('touchmove', this.move, { passive: false })
  },  
  methods:{
    loadAsyncScript(url, callback) {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        if (script.readyState) {
            // 兼容IE浏览器
            // 脚本加载完成事件
            script.onreadystatechange = function () {
                if (script.readyState === 'complete' || script.readyState === 'loaded') {
                    callback();
                }
            }
        } else {
            // Chrome, Safari, FireFox, Opera可执行
            // 脚本加载完成事件
            script.onload = function () {
                callback();
            }
        }
        script.src = url; //将src属性放在后面，保证监听函数能够起作用
        document.head.appendChild(script);
    },    
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
    },
    changeColor(){
      let r=Math.floor(Math.random()*255);
      let g=Math.floor(Math.random()*255);
      let b=Math.floor(Math.random()*255);
      let rgb=r.toString(16)+g.toString(16)+b.toString(16); 
      let r2=Math.floor(Math.random()*255);
      let g2=Math.floor(Math.random()*255);
      let b2=Math.floor(Math.random()*255);
      let rgb2=r2.toString(16)+g2.toString(16)+b2.toString(16);      
      document.body.style.backgroundImage=`linear-gradient( 135deg, #${rgb} 10%, #${rgb2} 100%)`;
      console.log(rgb)
    }      
  },
}
</script>
<style lang="scss">
@import './themes/theme.scss';
body{
  // transition: all 5s;
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
    background-image: linear-gradient( 135deg, rgb(49,76,172) 10%, rgb(242,159,191) 100%);
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
    bottom: 300px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    text-align: center;
    line-height: 40px;
    box-sizing: border-box;
    background-image: linear-gradient( 135deg, rgb(49,76,172) 10%, rgb(242,159,191) 100%);
    z-index: 999999;
    box-shadow: 0 2px 2px 2px rgba(49, 49, 49, 0.2);
    div {
      color: #fff;
      font-size: 8px;
    }
  }   
}
</style>

