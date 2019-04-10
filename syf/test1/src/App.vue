<template>
  <div id="app" class="app-page">
    <div class="app-head">
      <div @click="goLogin">login</div>
      <div @click="goRegister">register</div>      
    </div>

      <!-- <keep-alive >
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive> -->
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return{

    }
  },
  created(){

  },
  methods:{
    goLogin(){
      this.$router.push({path: '/login'});  
    },
    goRegister(){
      this.$router.push({path: '/register'});        
    },
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

