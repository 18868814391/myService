<template>
  <div class="chat-page">

    <input type="text" name="" id="" v-model="con">
    <button @click="send">发送</button>
  </div>
</template>
<script>
import { getThename,getadmin} from '@/utils/auth'
export default {
  data(){
    return{
      admin:getadmin(),
      Thename:getThename(),       
      con:'',
      ws:null,
    }
  },
  created(){
    this.ws=new WebSocket("ws://118.31.62.251:4000");
    this.ws.onopen = function(){
      console.log("握手成功");
    };
    this.ws.onmessage = function(e){
      console.log("message:" + e.data);
    };
    this.ws.onerror = function(){
      console.log("error");
    }   
  },
  methods:{
    send(){
      const self=this;
      let obj={
        adm:getadmin(),
        Thename:getThename(),
        content:self.con,
      }
      this.ws.send(JSON.stringify(obj));
    },
  },
}
</script>
<style lang="scss">
.chat-page{

}
</style>


