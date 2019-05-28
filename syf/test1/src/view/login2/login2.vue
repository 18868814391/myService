<template>
  <div class="login2-page">
    <div class="login2-page-t1">网易云信  DEMO</div>
    <button class="login2-page-t2" @click="yunlogin">模拟登陆</button>
  </div>
</template>
<script>
import Cookies from 'js-cookie'
export default {
  data(){
    return{

    }
  },
  created(){

  },
  methods:{
    yunlogin(){
      Cookies.set('uid', 'pptvvx2',{expires:60})
      Cookies.set('sdktoken', '153719072fddad21235b126d4f0436dc',{expires:60})
      this.$router.push({ path: '/session' });   
    }
  }
}
</script>
<style lang="scss">
.login2-page{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .login2-page-t1{
    margin-top:30%; 
  }
  .login2-page-t2{
    margin-top:10%; 
  }
}
</style>


