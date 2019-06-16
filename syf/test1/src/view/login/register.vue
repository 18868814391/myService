<template>
  <div class="register-page">
    <div class="rebox2">
      <van-field class="input-item" v-model="admin" placeholder="请输入账户" />
      <van-field class="input-item" v-model="Thename" placeholder="请输入昵称" />
      <van-field class="input-item" v-model="code" placeholder="请输入登陆密码" type="password"/> 
      <van-button class="butt-item" type="primary" @click="submit">提交</van-button>
    </div>
  </div>
</template>
<script>
import { Icon, Toast,Dialog,Field } from 'vant';
import { register } from '@/api';
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
      Thename:'',
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
      Toast.loading({
        mask: true,
        message: '提交中...'
      });      
      register({
        admin:self.admin,
        Thename:self.Thename,
        code:md5(self.code),
      }).then((d)=>{
        console.log(d.data)
        if(d.data.errcode==0){
      //           self.$store.dispatch('SetMenuActive', { active: 4 })
      // self.$store.dispatch('getUserMsg', {
      //   "token": self.$store.state.user.token,
          Cookies.set('admin', self.admin,{expires:60})
          Cookies.set('Thename', self.Thename,{expires:60})
          self.$store.commit('SET_ADMIN',self.admin);
          self.$store.commit('SET_NAME', self.Thename);
          localStorage.setItem("isReg",'1');
          // alert(self.$store.state.user.admin)
          // alert(self.$store.state.user.Thename)
          Dialog.confirm({
            title: '提示',
            message: `${self.Thename}，欢迎，您的账户是${self.admin}。部分网站功能需要特定权限，是否现在就去获得权限？`
          }).then(() => {
            self.$router.push({ path: '/level' });
          }).catch(() => {
            window.location.reload();
          });

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
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;  
  .rebox2{
    width: 100%;
    padding: 16px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;    
    .input-item{
      margin-top:10px; 
    }
  }
  .butt-item{
    margin-top:10px; 
  }
}
</style>


