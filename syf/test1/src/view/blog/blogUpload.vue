<template>
    <div class="uploadPage">
      <div>富文本上传</div>
      <van-field v-model="novelName" placeholder="名字" />
      <quill-editor
        v-model="content" 
        ref="myQuillEditor" 
        :options="editorOption" 
        @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
        @change="onEditorChange($event)">
      </quill-editor>
      <button @click="uploadRich">上传富文本</button>
    </div>
</template> 
<script>
import { Icon, Toast,Dialog,Field,Progress,Popup } from 'vant';
import { quillEditor } from 'vue-quill-editor'
import { BlogRichTxt } from '@/api';
import moment from 'moment'
export default {
  components: {
    [Icon.name]: Icon,
    [Toast.name]: Toast,
    [Dialog.name]: Dialog,
    [Field.name]: Field,
    [Progress.name]: Progress,
    [Popup.name]: Popup,
  },  
  data(){
    return {
        show:false,
        content:null,
        editorOption:{},
        novelName:'',
        chapterTitle:'',
        paragraphTitle:'',
        size:'',
        pro:0,
        kb:0,
        timeObj:'',
        loding:false,
      }
    },
  methods:{    
    onEditorBlur(){//失去焦点事件

    },
    onEditorFocus(){//获得焦点事件

    },
    onEditorChange(){//内容改变事件
      console.log(this.content);
    },
    uploadRich(){
      const self=this;
      let ddd=moment().format('MMMM Do YYYY, h:mm:ss a');     
      if(!self.novelName){
        Toast('请输入名字')
      }else if(!self.content){
        Toast('请输入内容')
      }else{
        BlogRichTxt({
          'title':self.novelName,
          'content':self.content,
          'updataTime':ddd,
          'state':'',
        }).then((d)=>{
          console.log(d)
        }).catch(()=>{

        })        
      }
    }
  }  
}
</script>
<style lang="scss">
.uploadPage{
  .progress{
    width: 300px;
    height: 50px;
    padding-top:20px;
    box-sizing: border-box;
  }
}
</style>



