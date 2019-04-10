<template>
  <div class="mircleMenu">
    <div v-for="(item,index) in titleData" :key="index" class="mircleMenu-t1">
      {{item}}
      <div v-for="(ite,ind) in conData[index]" :key="ind" class="mircleMenu-t2" @click="goMircle(item,ite)">
        {{ite}}
      </div>
    </div>
  </div>
</template>
<script>
import { getheavyNovel } from '@/api';
export default {
  data(){
    return{
      conList:'',
      titleData:[],
      conData:[],
    }
  },
  created(){
    const self=this;
    getheavyNovel({

    }).then((d)=>{
      self.con=d.data.data
      console.log('mircle',self.con)
      Object.keys(self.con).forEach(function(key){
        console.log(key,self.con[key]);
        self.titleData.push(key);
        self.conData.push(self.con[key]);
      });
      console.log(self.titleData)
      console.log(self.conData)
    }).catch(()=>{

    })
  },
  methods:{
    goMircle(d,t){
      this.$router.push({ path: '/readPage3',query:{chapterTitle:d,paragraphTitle:t} });       
    }
  }
}
</script>
<style lang="scss">
.mircleMenu{
  &-t1{
    font-size: 20px;
  }
  &-t2{
    font-size: 14px;
  }
}
</style>
