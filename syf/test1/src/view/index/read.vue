<template>
  <div class="read-page">
    <div v-for="(item,index) in list" :key="index" @click="goRead(item.id)" class="novelItem" v-if="index==0">
      <img src="../../img/lapulasi.png" alt="">
      {{item.title}}
    </div>
    <div v-for="(item,index) in list" :key="index" @click="goRead(item.id)" class="novelItem" v-if="index==1">
      <img src="../../img/seven.png" alt="">
      {{item.title}}
    </div>
    <div v-for="(item,index) in list" :key="index" @click="goRead(item.id)" class="novelItem" v-if="index==2">
      <img src="../../img/theone.png" alt="">
      {{item.title}}
    </div>
    <div v-for="(item,index) in list" :key="index" @click="goRead(item.id)" class="novelItem" v-if="index==3">
      <img src="../../img/treedrogon.png" alt="">
      {{item.title}}
    </div>
    <div @click="goRead2" class="novelItem">
      <img src="../../img/mircle11.png" alt="">
      有关奇迹的设定
    </div>
  </div>
</template>
<script>
import { lightNovelList } from '@/api';
export default {
  data(){
    return{
      list:'',
    }
  },
  created(){
    const self=this;
    lightNovelList({

    }).then((d)=>{
      self.list=d.data.data
      console.log(self.list)      
    }).catch(()=>{

    })
  },
  methods:{
    goRead(d){
      this.$router.push({ path: '/readPage',query:{id:d} }); 
    },
    goRead2(){
      this.$router.push({ path: '/readPage2'}); 
    },
  }
}
</script>
<style lang="scss">
.read-page{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  .novelItem{
    width: 100px;
    font-size: 12px;
    margin-top:15px; 
    img{
      width: 100px;
      height:150px;
      border: 1px solid #ccc;
    }
  }
}
</style>


