<template>
  <div class="chat-page">
    <input type="text" name="" id="" v-model="con">
    <button @click="send">发送</button>
  </div>
</template>
<script>
export default {
  data(){
    return{
      con:'',
    }
  },
  created(){
    var ws = new WebSocket("ws://localhost:4000");
    ws.onopen = function(){
      console.log("握手成功");
    };
    ws.onmessage = function(e){
      console.log("message:" + e.data);
    };
    ws.onerror = function(){
      console.log("error");
    }   
  },
  methods:{
    send(){
      const self=this;
      ws.send(self.con);
    },
  },
}
</script>
<style lang="scss">
.chat-page{

}
</style>


