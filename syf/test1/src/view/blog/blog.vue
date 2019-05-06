<template>
  <div class="blog-page">
    <div class="blp-item" v-for="(item,index) in list" :key="index" @click="goRead(item.id)">
      {{item.title}}
    </div>
  </div>
</template>
<script>
import { BlogList } from '@/api';
export default {
  data(){
    return{
      list:'',
    }
  },
  created(){
    const self=this;
    BlogList({

    }).then((d)=>{
      self.list=d.data.data
      console.log(self.list)      
    }).catch(()=>{

    })
  },
  methods:{
    goRead(d){
      this.$router.push({ path: '/readBlog',query:{id:d} }); 
    },
  }
}
</script>
<style lang="scss">
.blog-page{
  .blp-item{
    font-size: 20px;
    line-height: 35px;
    color: #1D1E1F;
  }
}
</style>


