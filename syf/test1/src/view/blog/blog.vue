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
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
  .blp-item{
    padding: 5px;
    box-sizing: border-box;
    border-radius:5px; 
    font-size: 20px;
    line-height: 35px;
    color: #1D1E1F;
    margin-top:10px;
    box-shadow: 0 2px 2px 2px rgba(49, 49, 49, 0.2);
  }
}
</style>


