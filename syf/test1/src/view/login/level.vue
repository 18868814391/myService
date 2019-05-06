<template>
  <div class="levelPage">
    <!-- <div class="test-head">权限获取只能进行一次，进认真作答哦~ ~</div> -->
    <br>

    <div class="test-con">
      <div class="test-con-ques">
        天王盖地虎
      </div>
      <div class="test-con-tit">
        <van-field class="input-item" v-model="myname" placeholder="请输入下一句" />
      </div>
      <van-button class="butt-item" type="primary" @click="submit">提交</van-button>
    </div>
  

  </div>
</template>
<script>
import {Icon, Toast,Dialog,Button,Field  } from 'vant';
import { levelGet } from '@/api';
import Cookies from 'js-cookie'
export default {
  components: {
    [Icon.name]: Icon,
    [Toast.name]: Toast,
    [Dialog.name]: Dialog,
    [Button.name]: Button,
    [Field.name]: Field,
  },    
  data(){
    return{
      adm:'',
      myname:'',
    }
  },
  created(){
    this.adm=Cookies.get('admin')
  },
  methods:{
    submit(){
      const self=this;
      Toast.loading({
        mask: true,
        message: '提交中...'
      });      
      levelGet({
        adm:self.adm,
        myname:self.myname,
      }).then((d)=>{
        console.log(d.data)
        if(d.data.errcode==0){
          Toast(d.data.errmsg)
          window.history.go(-1);
        }else{
          Toast(d.data.errmsg)
        }
      }).catch((d)=>{
        Toast(d.data.errmsg)
      })
    }
  }
}
</script>
<style lang="scss">
.levelPage{
  .test-head{
    text-align: center;
  }
  .test-con{
    .test-con-ques{

    }
    .test-con-tit{
      width: 100%;
      display: flex;
      flex-direction:column;
      align-items: center;
      margin-top:20px;
      justify-content: space-between;  
    }
  }
}
</style>


