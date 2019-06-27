<template>
  <div class="chat-page">
    <div class="chat-page-head">当前在线人数{{num}}</div>
    <div class="chat-page-body" id="msg_box">
      <div v-for="(item,ind) in histortist" :key="ind" class="chatMsg">
        <div class="chatMsg-t1" v-if="item.adm!=admin">{{item.Thename}}说：</div>
        <div class="chatMsg-t2" v-if="item.adm!=admin">{{item.updataTime}}</div>
        <div class="chatMsg-t3" v-if="item.adm!=admin">{{item.content}}</div>

        <div class="chatMsg-t1 al gb" v-if="item.adm==admin">{{item.Thename}}说：</div>
        <div class="chatMsg-t2 al gb" v-if="item.adm==admin">{{item.updataTime}}</div>
        <div class="chatMsg-t3 al gb" v-if="item.adm==admin">{{item.content}}</div>
      </div>
      <div>————历史纪录————</div>
      <div v-for="(item,index) in chatList" :key="index" class="chatMsg">
        <div class="chatMsg-t1" v-if="item.adm!=admin">{{item.Thename}}说：</div>
        <div class="chatMsg-t2" v-if="item.adm!=admin">{{item.updataTime}}</div>
        <div class="chatMsg-t3" v-if="item.adm!=admin">{{item.content}}</div>

        <div class="chatMsg-t1 al gb" v-if="item.adm==admin">{{item.Thename}}说：</div>
        <div class="chatMsg-t2 al gb" v-if="item.adm==admin">{{item.updataTime}}</div>
        <div class="chatMsg-t3 al gb" v-if="item.adm==admin">{{item.content}}</div>
      </div>
    </div>
    <div class="chat-page-bottom">
      <textarea type="text" name="" id="" v-model="con"></textarea>
      <div class="sendop">
        <div class="sendop-b1" @click="show=!show">表情</div>
        <button @click="send">发送</button>          
      </div>
    </div>

    <van-popup v-model="show" position="bottom">
      <div class="emojBox">
        <div v-for="(item,inde) in emoji" :key="inde" class="emojBox-items" @click="selEmoj(item)">
          {{item}}
        </div>
      </div>
    </van-popup>

  </div>
</template>
<script>
import {Toast,Popup } from 'vant';
import {yiiSocketIn,yiiSocketmsg} from '@/api';
import { getThename,getadmin} from '@/utils/auth'
import moment from 'moment'
export default {
  components: {
    [Toast.name]: Toast,
    [Popup.name]: Popup,

  },   
  data(){
    return{
      show:false,
      emoji:['w(ﾟДﾟ)w','ヽ(✿ﾟ▽ﾟ)ノ','(๑•̀ㅂ•́)و✧','(⊙﹏⊙)','┗|｀O′|┛','φ(≧ω≦*)♪','凸(艹皿艹 )','╰(*°▽°*)╯','（´Д`）','(#`O′)','(＠_＠;)','(ー`´ー)'],
      num:'',//当前直播间人数
      histortist:[],//历史信息，5条
      chatList:[],
      admin:getadmin(),
      Thename:getThename(),       
      con:'',
      ws:null,
      hub:'',//数据暂存,过长的数据socket会截断返回
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
      // self.hub=self.hub+e.data

      if(JSON.parse(e.data).content){
        self.chatList.push(JSON.parse(e.data));
        self.$nextTick(function(){
          var msg_box = document.getElementById('msg_box');
          msg_box.scrollTop = msg_box.scrollHeight;
        })
      }else{
        self.num=e.data;
      }


    };
    this.ws.onerror = function(){
      console.log("error");
    };
    setTimeout(function(){
      let ddd=moment().format('MMMM Do YYYY, h:mm:ss a'); 
      let obj={
          adm:getadmin()?getadmin():'某匿名用户',
          Thename:getThename(),
          content:getadmin()+'加入了聊天室',
          'updataTime':ddd,
        }
      self.ws.send(JSON.stringify(obj));
    },2000)
  },
  methods:{
    send(){
      if(!this.con){
        Toast('请输入点什么')
        return false;
      }
      const self=this;
      let ddd=moment().format('MMMM Do YYYY, h:mm:ss a'); 
      let obj={
        adm:getadmin()?getadmin():'某匿名用户',
        Thename:getThename(),
        content:String(self.con),
        'updataTime':ddd,
      }
      yiiSocketIn({
        'admin':getadmin()?getadmin():'某匿名用户',
        'content':self.con,
        'Thename':getThename(),
        'updataTime':ddd,
      }).then((d)=>{

      }).catch((d)=>{

      })
      this.ws.send(JSON.stringify(obj));
      this.con='';
    },
    getlatest(){
      const self=this;
      yiiSocketmsg({
      }).then((d)=>{
        console.log(d);
        self.histortist=d.data.errmsg;
        self.histortist.reverse()
        console.log(self.histortist)
      }).catch((d)=>{

      })
    },
    selEmoj(d){
      this.con=this.con+d;
      this.show=false;
    },
  },
}
</script>
<style lang="scss">
.chat-page{
  width: 100%;
  height: 100vh;
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .chat-page-head{
    width: 100%;
    height: 50px;
    text-align: center;
    line-height: 50px;
    background: lightblue;
  }
  .chat-page-bottom{
    width: 100%;
    height: 100px;
    background: lightblue;
    display: flex;
    align-items: center;
    padding: 5px;
    box-sizing: border-box;
    textarea{
      height: 90px;
      width: 50%;
      margin-right:10px; 
    }
    .sendop{
      height: 90px;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      .sendop-b1{
        height: 40px;
        width: 100%;
        text-align: center;
        line-height: 40px;
        background: lightpink;
      }
      button{
        height: 40px;
        width: 100%;
      }      
    }

  }
  .chat-page-body{
    width: 100%;
    padding: 0 15px;
    box-sizing: border-box;
    flex: 1;
    overflow-y: auto;
  }
  .chatMsg{
    width: 100%;
    background: lavender;
    margin: 5px 0;
    .chatMsg-t1{
      font-size: 15px;
      font-weight: 600;
    }
    .chatMsg-t2{
      font-weight:100;
      font-size: 10px;
      color: #999;
    }
    .chatMsg-t3{

    }
  }
  .al{
    text-align: right;
  }
  .gb{
    background: lightgreen;
  }
  .emojBox{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .emojBox-items{
      width: 22%;
      height: 20px;
      text-align: center;
      overflow: hidden;
      margin:20px 0;
      background: lavender;
    }
  }
}
</style>


