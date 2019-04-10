<template>
  <div class="Myread3">
    <h2>{{con.title}}</h2>
    <div v-html="con.content"></div>
  </div>
</template>
<script>
import { getMircleDetail } from '@/api';
export default {
  data(){
    return{
      chapterTitle:'',
      paragraphTitle:'',
      con:'',
    }
  },
  created(){
    const self=this;
    this.chapterTitle=this.$route.query.chapterTitle;
    this.paragraphTitle=this.$route.query.paragraphTitle;
    getMircleDetail({
      'chapterTitle':self.chapterTitle,
      'paragraphTitle':self.paragraphTitle,
    }).then((d)=>{
      self.con=d.data.data
    }).catch(()=>{

    })    
  },
  methods:{

  }
}
</script>
<style lang="scss">
.Myread3{

}
</style>
