<template>
  <div class="chat-page">
    <div class="chat-page-body">
      <div v-for="(item,index) in chatList" :key="index">
        <div>{{item.Thename}}</div>
        <div>{{item.content}}</div>
      </div>
    </div>
    <div class="chat-page-bottom">
      <input type="text" name="" id="" v-model="con">
      <button @click="send">发送</button>      
    </div>
  </div>
</template>
<script>
import {yiiSocketIn,yiiSocketmsg} from '@/api';
import { getThename,getadmin} from '@/utils/auth'
import moment from 'moment'
export default {
  data(){
    return{
      histortist:[],//历史信息，5条
      chatList:[],
      admin:getadmin(),
      Thename:getThename(),       
      con:'',
      ws:null,
    }
  },
  created(){
    const self=this;
    self.getlatest();
    this.ws=new WebSocket("ws://118.31.62.251:4000");
    this.ws.onopen = function(){
      console.log("握手成功");
    };
    this.ws.onmessage = function(e){
      console.log("message:" + e.data);
      self.chatList.push(JSON.parse(e.data));
    };
    this.ws.onerror = function(){
      console.log("error");
    }   
  },
  methods:{
    send(){
      const self=this;
      let ddd=moment().format('MMMM Do YYYY, h:mm:ss a'); 
      let obj={
        adm:getadmin(),
        Thename:getThename(),
        content:self.con,
      }
      yiiSocketIn({
        'admin':getadmin(),
        'content':self.con,
        'Thename':getThename(),
        'updataTime':ddd,
      }).then((d)=>{

      }).catch((d)=>{

      })
      this.ws.send(JSON.stringify(obj));

    },
    getlatest(){
      yiiSocketmsg({

      }).then((d)=>{

      }).catch((d)=>{

      })
    },
  },
}
</script>
<style lang="scss">
.chat-page{
  width: 100%;
  height: 100vh;
  position: relative;
  padding-bottom:100px;
  box-sizing: border-box;
  .chat-page-bottom{
    width: 100%;
    height: 100px;
    background: lavender;
    position: absolute;
    bottom: 0;
  }

}
</style>


