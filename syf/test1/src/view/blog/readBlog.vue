<template>
  <div class="MyBread">
    <h2 class="MB-tit">{{con.title}}</h2>
    <div class="MB-time">
      由用户{{con.adm}}在
      {{con.updatatime}}上传
    </div>
    <div class="ql-editor" v-html="con.content"></div>
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
    }
  },
  created(){
    const self=this;
    this.id=this.$route.query.id;
    blogDetail({
      'id':self.id
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
}
</style>