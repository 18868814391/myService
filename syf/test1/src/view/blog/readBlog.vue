<template>
  <div class="Myread">
    <h2>{{con.title}}</h2>
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
.Myread{

}
</style>