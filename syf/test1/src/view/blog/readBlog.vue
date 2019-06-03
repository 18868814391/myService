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

      // self.richText=self.richText.replace(new RegExp(' ','g'),"+");
      console.log(self.richText)
      // var patt =/src(\S*)=">/;
      // var patt =/(?<=url\(").+(?="\))/;
      // console.log(self.richText.match(patt));
      // self.richText=self.richText.replace(/\ +/g, "");
      // self.richText=self.richText.replace(/[ ]/g, "");
      // self.richText=self.richText.replace(/[\r\n]/g, ""); //去掉回车换行
      // console.log(self.richText)
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
  .BlogrichTxt{
    img{
      width: 100%;
    }
  }
}
</style>