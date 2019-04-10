<template>
  <div class="register-page">
    <div class="rebox">
      <van-field v-model="admin" placeholder="请输入账户" />
      <van-field v-model="code" placeholder="请输入登陆密码" type="password"/>
    </div>
    <van-button type="primary" @click="submit">提交</van-button>
  </div>
</template>
<script>
import { Icon, Toast,Dialog,Field } from 'vant';
import { loginIN } from '@/api';
import md5 from 'js-md5'
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
          Toast(`${Thename}，欢迎`)
          self.$router.push({ path: '/index' });        
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
}
</style>


