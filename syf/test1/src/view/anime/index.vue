<template>
  <div class="anime-page">
    <div class="anime-page-box" v-for="(item,index) in animeList" :key="index" @click="GoWatch(item.id)">
      <img class="anime-page-box-img" :src="item.img" alt="">
      <div class="anime-page-box-tit">{{item.id}}</div>
    </div>
  </div>
</template>
<script>
import {getAnime} from '@/api';
export default {
  data(){
    return{
      animeList:[],
    }
  },
  created(){
    const self=this;
    getAnime({
      id:'',
    }).then((d)=>{
      let ddd=d.data.data
      console.log(ddd)      
      ddd.forEach(function(v,i,a){
        let obj={id:'',img:''};
        obj.id=v;
        obj.img='http://118.31.62.251/syf/video/'+v+'.jpg';
        self.animeList.push(obj)
      })
      console.log(self.animeList);
    }).catch(()=>{

    })
  },
  mounted(){

  },
  methods:{
    GoWatch(d){
      this.$router.push({ path: '/animeDetail',query:{id:d}});   
    },
  }
}
</script>
<style lang="scss">
.anime-page{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  .anime-page-box{
    width:150px;
    height:230px;
    background: lavender;
    .anime-page-box-img{
      width: 150px;
      height: 200px;
    }
    .anime-page-box-tit{
      width: 150px;
      height: 28px;
      text-align: center;
    }
  }
}
</style>


