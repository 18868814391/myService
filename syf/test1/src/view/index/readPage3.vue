<template>
  <div class="Myread3">
    <h2 class="myr-3">{{con.title}}</h2>
    <div class="ql-editor myr3-con" v-html="con.content"></div>
  </div>
</template>
<script>
import { getMircleDetail } from '@/api';
import { quillEditor } from 'vue-quill-editor'
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
  .myr-3{
    text-align: center;
  }
  .myr3-con{
    line-height: 50px;
    text-indent: 50px;
    font-size: 20px;    
  }
}
</style>
