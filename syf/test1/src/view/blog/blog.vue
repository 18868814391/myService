<template>
  <div class="blog-page">
  <van-list
    v-model="loading"
    :finished="finished"
    :immediate-check="false"
    finished-text="不要划拉划拉啦，已经没有了"
    @load="onLoad"
  >    
      <div class="blp-item" v-for="(item,index) in list" :key="index" @click="goRead(item.id)">
        {{item.title}}
      </div>
  </van-list>    
  </div>
</template>
<script>
import { BlogList } from '@/api';
import { Toast,List } from 'vant';
export default {
  components: {
    [Toast.name]: Toast,
    [List.name]: List,
  },   
  data(){
    return{
      list:[],
      start_page:0,
      pages:25,
      loading:false,
      finished:false,
      firstEnter:false,
    }
  },
  created(){
      const self=this;
      BlogList({
        start_page:self.start_page,
        pages:self.pages,
      }).then((d)=>{
        self.start_page++;
        self.loading=false;
        self.list=self.list.concat(d.data.data);
        console.log('拼接后的数组',self.list)
        if(self.list.length*1>=d.data.total_page*1){
          self.finished=true;
        }
        self.firstEnter=true;
      }).catch(()=>{

      })   
  },
  methods:{
    goRead(d){
      this.$router.push({ path: '/readBlog',query:{id:d} }); 
    },
    onLoad(){
      if(this.firstEnter){
        const self=this;
        BlogList({
          start_page:self.start_page,
          pages:self.pages,
        }).then((d)=>{
          self.start_page++;
          self.loading=false;
          self.list=self.list.concat(d.data.data);
          console.log('拼接后的数组',self.list)
          if(self.list.length*1>=d.data.total_page*1){
            self.finished=true;
          }
        }).catch(()=>{

        })
      }

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


