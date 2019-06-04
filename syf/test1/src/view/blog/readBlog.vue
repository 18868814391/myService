<template>
  <div class="MyBread">
    <h2 class="MB-tit">{{con.title}}</h2>
    <div class="MB-time">
      由用户{{con.adm}}在
      {{con.updatatime}}上传
    </div>
    <div class="ql-editor BlogrichTxt" v-html="richText"></div>
  </div>
</template>
<script>
import { blogDetail } from '@/api';
import { quillEditor } from 'vue-quill-editor'
export default {
  data(){
    return{
      id:'',
      con:'',
      richText:'',
    }
  },
  created(){
    const self=this;
    this.id=this.$route.query.id;
    blogDetail({
      'id':self.id
    }).then((d)=>{
      self.con=d.data.data;
      self.richText=self.con.content;
      console.log(self.richText);
      self.goTop();
    }).catch(()=>{

    })
  },
  methods:{
    goTop() {
      document.documentElement.scrollTop=0
      document.body.scrollTop=0
    },
  }
}
</script>
<style lang="scss">
.MyBread{
  .MB-tit{
    text-indent: 10px;
  }
  .MB-time{
    text-indent: 10px;
    color: #999999;
    font-size: 12px;
    margin-bottom:10px; 
  }
  .BlogrichTxt{
    img{
      width: 100%;
    }
  }
}
</style>