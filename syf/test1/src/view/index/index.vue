<template>
  <div class="indexPage">

 
  <canvas id="testCanvas" width="550" height="500" @click="closeCaven" v-if="cavenFlag"></canvas>


  <div class="index-item" v-if="!cavenFlag">
    <div class="liuyanban" @click="gofootprint">
      <img src="../../img/liuyanban.png" alt="">
      <div class="liuyanban-t">留言板</div>    
    </div>
    <div class="liuyanban2" @click="gochatRoom">
      <img src="../../img/liuyanban.png" alt="">
      <div class="liuyanban-t">聊天室</div>    
    </div>
    <br/>
    <div @click="goBlog">
      菜鸟博客
    </div>
    <br/>
    <div @click="goBlogUpload">blog upload</div>
    <br/>
    <div @click="goIM">网易im接入demo</div>
    <p>---------------</p>
    <div @click="goMap">高德地图接入demo</div>
    <p>---------------</p>
    <div @click="goMusic">Music</div>
    <p>---------------</p>
    <div @click="goAnime">Anime</div>
    <p>---------------</p>
    <div @click="goRead">novel</div>
    <p>---------------</p>    
    <div @click="goUpload">上传页面</div>
    <p>---------------</p>
    <div @click="goCommon">公共文件夹</div>
    <p>---------------</p>
    <!-- <div @click="gofootprint">留言板</div> -->

    <div @click="aboutMe">关于本站</div>
    <p>---------------</p>
   </div> 

    <jumpBox class="jumpBox" v-if="!cavenFlag"></jumpBox>
  </div>
</template>
<script>
import { Toast} from 'vant';
import { getThename,getadmin} from '@/utils/auth'
import jumpBox from '@/components/jumpBox.vue'
export default {
  components: {
    [Toast.name]: Toast, 
    [jumpBox.name]: jumpBox,
  },   
  data(){
    return{
      admin:getadmin(),
      Thename:getThename(), 
      cavenFlag:false,     
    }
  },
  created(){
    if(localStorage.getItem("isReg")){
      localStorage.removeItem("isReg");
      window.location.reload();
    }
    if(!(sessionStorage.getItem('noClovers'))){
      this.cavenFlag=true;
    } 
  },
  mounted(){
    if(!(sessionStorage.getItem('noClovers'))){
      const s = document.createElement('script');
      s.type = 'text/javascript';
      s.src = 'http://118.31.62.251/apis/syf/staticJS/clover.js';
      document.body.appendChild(s);
    }
  },
  methods:{
    closeCaven(){
      this.cavenFlag=false;
      sessionStorage.setItem('noClovers','1');
    },
    goUpload(){
      this.$router.push({ path: '/upLoad' }); 
    },
    goRead(){
      this.$router.push({ path: '/read' }); 
    },
    goCommon(){
      this.$router.push({ path: '/myfile' });
    },
    goBlogUpload(){
      this.$router.push({ path: '/blogUpload' });
    },
    goBlog(){
      this.$router.push({ path: '/blog' });
    },
    goIM(){
      this.$router.push({ path: '/session' });
    },
    goMap(){
      this.$router.push({ path: '/map' });      
    },
    goMusic(){
      this.$router.push({ path: '/music' });      
    },
    goAnime(){
      this.$router.push({ path: '/anime' });       
    },
    gofootprint(){
      this.$router.push({ path: '/footprint' });       
    },
    aboutMe(){
      this.$router.push({ path: '/aboutMe' });          
    },
    gochatRoom(){
      Toast('别戳了，还没做好......')
    },
  }
}
</script>
<style lang="scss">
.indexPage{
  width:100%;
  box-sizing: border-box;
  overflow: hidden;
  canvas {
    background-color:#020;
  }  
  .index-item{
    display:flex;
    flex-direction: column;
    align-items: center;
    position: relative;    
  }
  .liuyanban2{
    width: 100px;
    position: absolute;
    top:0px;
    right:10px;
    height: 75px;
    img{
      width: 100px;
      position: absolute;
      top:0;
      left: 0;
    }
    .liuyanban-t{
      text-align: center;
      margin-top:40px; 
      position: relative;
      z-index: 10;
      color: white;
      font-size: 18px;
      font-weight: 600;
    }    
  }
  .liuyanban{
    width: 100px;
    position: absolute;
    top:0px;
    left:10px;
    height: 75px;
    img{
      width: 100px;
      position: absolute;
      top:0;
      left: 0;
    }
    .liuyanban-t{
      text-align: center;
      margin-top:40px; 
      position: relative;
      z-index: 10;
      color: white;
      font-size: 18px;
      font-weight: 600;
    }
  }
  .jumpBox{
    position: fixed;
    bottom: 0;
    left: 0;
  }
}
</style>


