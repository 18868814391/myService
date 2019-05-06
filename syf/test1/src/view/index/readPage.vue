<template>
  <div class="Myread">
    <h2 class="myr-h2">{{con.title}}</h2>
    <div class="ql-editor myr-con" v-html="con.content"></div>
  </div>
</template>
<script>
import { getlightNovel } from '@/api';
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
    getlightNovel({
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
.Myread{
  .myr-h2{
    text-align: center;
  }
  .myr-con{
    line-height: 50px;
    text-indent: 50px;
    font-size: 20px;
  }
}
</style>


