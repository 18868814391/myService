<template>
    <div class="uploadPage">
      <van-popup v-model="show" :close-on-click-overlay="false">
        <div class="progress">
          <van-progress :percentage="pro" />
        </div>
      </van-popup>
      <div>文件上传</div>
      <input class="file" name="file" type="file"  @change="update"/>
      <br/><br/><hr/><br/><br/>
      <div>富文本上传</div>
      <van-field v-model="novelName" placeholder="名字" />
      <van-field v-model="chapterTitle" placeholder="大章节名（选填）" />
      <van-field v-model="paragraphTitle" placeholder="小章节名（选填）" />
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
import { UploadTxt,UploadRichTxt } from '@/api';
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
    update(e){
      const self=this;    
      let file = e.target.files[0];
      self.size=file.size/1024;
      if(self.size>=50000){
        alert('上传文件不能操过50M')
        return false;
      }else if(self.size==0){
        alert('请勿上传空文件')
        return false;
      }
      this.show=true;
      self.loding=true;
      let param = new FormData(); //创建form对象
      param.append('file',file);//通过append向form对象添加数据
      console.log(param.get('file')); //FormData私有类对象，访问不到，可以通过get判断值是否传进去
      let config = {
        headers:{'Content-Type':'multipart/form-data'}
      }; //添加请求头
      self.timeObj=setInterval(function(){
        self.kb=self.kb+10.2;
        self.pro=parseInt((self.kb/self.size)*100)
        if((self.kb>=self.size)||(!self.loding)){
          self.show=false
          clearInterval(self.timeObj)
        }
      },100)
      UploadTxt(
        param
      ).then((d)=>{
        self.loding=false;
        Toast.clear();
        console.log(d)
        alert(`备注：尚未对重名文件处理！文件已上传，文件名：${d.data.data.fileName}，大小：${d.data.data.Size}，位置：${d.data.data.Stored_in}`)
      }).catch(()=>{

      })
    },     
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
        UploadRichTxt({
          'title':self.novelName,
          'content':self.content,
          'chapterTitle':self.chapterTitle,
          'paragraphTitle':self.paragraphTitle,
          'updataTime':ddd,
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
