<template>
  <div id="app" class="app-page">
    <div class="app-head" v-if="!admin">
      <div @click="goLogin">login</div>
      <div @click="goRegister">register</div>      
    </div>
    <div class="app-head" v-if="admin">
       欢迎你啊！{{Thename}}&nbsp;&nbsp;&nbsp;&nbsp;<span @click="golevel">更多权限</span>
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
*{
  margin: 0;
  padding: 0;
}
.app-page{
  .app-head{
    width: 100%;
    height: 50px;
    background: lavender;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }  
}
</style>

