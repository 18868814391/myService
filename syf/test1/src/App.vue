<template>
  <div id="app" class="app-page">
    <div class="app-head" v-if="!admin">
      <div @click="goLogin">login</div>
      <div @click="goRegister">register</div>      
    </div>
    <div class="app-head" v-if="admin">
       欢迎你啊！{{Thename}}<span @click="golevel">更多权限</span>
    </div>

      <!-- <keep-alive >
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive> -->
      <router-view></router-view>
  </div>
</template>

<script>
import { getThename,getadmin} from '@/utils/auth'
export default {
  name: 'app',
  data(){
    return{
      admin:getadmin(),
      Thename:getThename(),
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
<style lang="less">
body {
  font-size: 14px;
  background-color: #f2f2f2;
  -webkit-font-smoothing: antialiased;
  width: 100%;
  height: 100%;
}
.app-page{
  width: 100%;
  height: 100%;
  background: #f2f2f2;
  .app-head{
    width: 100%;
    height: 50px;
    background:linear-gradient(305deg,rgba(75,142,254,1) 0%,rgba(46,192,254,1) 100%);
    display: flex;
    align-items: center;
    justify-content: space-around;
    box-sizing: border-box;
    overflow: hidden;
    color: white;
  }  
}
</style>

