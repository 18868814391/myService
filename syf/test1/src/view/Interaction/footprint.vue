<template>
  <div class="foot-page">
    <div class="foot-page-list" v-for="(item,index) in footList" :key="index">
      <div class="foot-page-list-head">
        <span class="foot-page-list-head-t1" @click="seleOne(item)">
          <span style="color:blue">{{item.Thename}}</span>说：
        </span>
        <span class="foot-page-list-head-t2">{{item.updataTime}}</span>
      </div>
      <div class="foot-page-list-con">
        <div>{{item.content}}</div>
      </div>
    </div>
    <div class="inp-box">
      <textarea v-model="content" class="inp-box-txt"></textarea>
      <div class="inp-box-buttons">
        <button @click="confirm">提交</button>
      </div>
    </div>
  </div>
</template>
<script>
import {sendFoot,getFoot} from '@/api';
import moment from 'moment'
export default {
  data(){
    return{
      footList:[],
      content:'',
      admin:'',
      Thename:'',
      start_page:0,
      pages:10,
      talkName:'',
      talkTo:'',
      belong:'',
    }
  },
  created(){
    const self=this;
    this.admin=this.$store.state.user.admin;
    this.Thename=this.$store.state.user.Thename;
    console.log(this.admin,this.Thename);
    getFoot({
      start_page:self.start_page,
      pages:self.pages,
    }).then((d)=>{
      self.footList=d.data.data;
    }).catch((d)=>{

    })
  },
  methods:{
    seleOne(d){
      this.talkName=d.Thename;
      this.talkTo=d.admin;
      this.belong=d.id;
      this.content='你对'+this.talkName+'说：'+'  '+this.content
    },
    confirm(){
      const self=this;
      let ddd=moment().format('MMMM Do YYYY, h:mm:ss a');
      let stArr=self.content.split('说：');
      self.content=stArr[1];
      sendFoot({
        admin:self.admin,
        Thename:self.Thename,
        content:self.content,
        time:ddd,
        talkTo:self.talkTo,
        belong:self.belong,
      }).then((d)=>{

      }).catch((d)=>{

      })
    },
  },
}
</script>
<style lang="scss">
.foot-page{
  padding-bottom:150px;
  .foot-page-list{
    width: 100%;
    min-height: 50px;
    box-sizing: border-box;
    margin-bottom:15px; 
    .foot-page-list-head{
      width: 100%;
      height: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: lemonchiffon;
      .foot-page-list-head-t1{
        font-size: 14px;
      }
      .foot-page-list-head-t2{
        font-size: 10px;
        color: #666;
      }
    }
    .foot-page-list-con{
      width: 100%;
      min-height: 40px;
      background: lightblue;
      padding: 0 10px;
      box-sizing: border-box;
    }
  }
  .inp-box{
    width: 100%;
    height: 100px;
    padding: 15px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    background: lavender;
    position: fixed;
    bottom:0;
    .inp-box-txt{
      width: 80%;
      height: 70px;
      background: white;
    }
  }
  .inp-box-buttons{
    flex: 1;
    height: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
}
</style>


