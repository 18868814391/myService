<template>
  <div class="register-page">
    <div class="rebox">
      <van-field class="login-inp" v-model="admin" placeholder="请输入账户" />
      <van-field class="login-inp" v-model="code" placeholder="请输入登陆密码" type="password"/>
    </div>
    <van-button class="login-inp" type="primary" @click="submit">提交</van-button>
  </div>
</template>
<script>
import { Icon, Toast,Dialog,Field } from 'vant';
import { loginIN } from '@/api';
import md5 from 'js-md5'
import Cookies from 'js-cookie'
// Vue.use(Dialog);
export default {
  components: {
    [Icon.name]: Icon,
    [Toast.name]: Toast,
    [Dialog.name]: Dialog,
    [Field.name]: Field,
  },  
  data(){
    return{
      admin:'',
      code:'',
    }
  },
  created(){
    if(Cookies.get('Thename')){
      this.$router.push({ path: '/index' });
    }
  },
  methods:{
    submit(){
      const self=this;
      loginIN({
        admin:self.admin,
        code:md5(self.code),
      }).then((d)=>{
        console.log(d.data)
        if(d.data.errcode==0){
          let Thename=d.data.data.Thename
          Cookies.set('admin', self.admin,{expires:60})
          Cookies.set('Thename', d.data.data.Thename,{expires:60})
          self.$store.commit('SET_ADMIN',d.data.data.adm);
          self.$store.commit('SET_NAME', d.data.data.Thename);          
          Toast(`${Thename}，欢迎`)
          window.location.reload();      
        }else{
          Toast(d.data.errmsg)
        }
      }).catch((d)=>{
        Toast(d.data.errmsg)
      })
    }
  },
}
</script>
<style lang="scss">
.register-page{
  .rebox{
    
  }
  .login-inp{
    margin-top:10px; 
  }
}
</style>


