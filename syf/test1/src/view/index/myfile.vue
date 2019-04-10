<template>
  <div class="myFilePage">
    <div v-for="(item,index) in tit" :key="index">
      {{item}}
      <button @click="load(index)">下载</button>
    </div>
  </div>
</template>
<script>
import { getFile } from '@/api';
export default {
  data(){
    return{
      tit:'',
      loc:'',
    }
  },
  created(){
    const self=this;
    getFile({

    }).then((d)=>{
      console.log(d)
      self.tit=d.data.data.fileName;
      self.loc=d.data.data.fileLocatiom;
    }).catch((d)=>{

    })
  },
  methods:{
    load(d){
      window.location.href=this.loc[d];
    }
  },
}
</script>
<style lang="scss">
.myFilePage{

}
</style>


