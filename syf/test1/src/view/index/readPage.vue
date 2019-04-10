<template>
  <div class="Myread">
    <h2>{{con.title}}</h2>
    <div v-html="con.content"></div>
  </div>
</template>
<script>
import { getlightNovel } from '@/api';
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

}
</style>


