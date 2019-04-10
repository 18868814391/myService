<template>
  <div class="read-page">
    <div v-for="(item,index) in list" :key="index" @click="goRead(item.id)">
      {{item.title}}
    </div>
    <div @click="goRead2">
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

}
</style>


