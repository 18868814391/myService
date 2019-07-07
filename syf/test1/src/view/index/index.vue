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
    <navTBox :taber='"菜鸟博客"' :rout="'blog'" :sum='7' :ind='1'></navTBox>
    <br/>
    <navTBox :taber='"blog upload"' :rout="'blogUpload'" :sum='7' :ind='2'></navTBox>
    <br/>
    <navTBox :taber='"网易im接入demo"' :rout="'session'" :sum='7' :ind='3'></navTBox>
    <br/>
    <!-- <div @click="goMap">高德地图接入demo</div> -->
    <navTBox :taber='"novel"' :rout="'read'" :sum='7' :ind='4'></navTBox>
    <br/>
    <navTBox :taber='"Music"' :rout="'music'" :sum='7' :ind='5'></navTBox>
    <br/>
    <!-- <div @click="goMAD">MAD</div> -->
  
    <!-- <div @click="goAnime">Anime</div> -->

    <!-- <div @click="goUpload">上传页面</div> -->
    <navTBox :taber='"公共文件夹"' :rout="'myfile'" :sum='7' :ind='6'></navTBox>
    <br/>
    <!-- <div @click="gofootprint">留言板</div> -->
    <navTBox :taber='"关于本站"' :rout="'aboutMe'" :sum='7' :ind='7'></navTBox>

   </div> 

    <jumpBox class="jumpBox" v-if="!cavenFlag"></jumpBox>
  </div>
</template>
<script>
import { Toast} from 'vant';
import { getThename,getadmin} from '@/utils/auth'
import jumpBox from '@/components/jumpBox.vue'
import navTBox from '@/components/navTBox.vue'
export default {
  components: {
    [Toast.name]: Toast, 
    [jumpBox.name]: jumpBox,
    [navTBox.name]: navTBox,
  },   
  data(){
    return{
      admin:getadmin(),
      Thename:getThename(), 
      cavenFlag:false,
      position: { x: 0, y: 0 },
      nx: '', ny: '', dx: '', dy: '', xPum: '', yPum: '',x:'',y:'',            
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
    const self=this;
    if(!(sessionStorage.getItem('noClovers'))){
      const s = document.createElement('script');
      s.type = 'text/javascript';
      s.src = 'http://118.31.62.251/apis/syf/staticJS/clover.js';
      document.body.appendChild(s);
    }

    L2Dwidget.init({
      pluginRootPath: "../../../public/live2dw/",
      pluginJsPath: "lib/",
      pluginModelPath: "live2d-widget-model-wanko/assets/",
      tagMode: false,
      debug: false,
      model: { jsonPath: "/live2dw/live2d-widget-model-wanko/assets/wanko.model.json" },
      display: { position: "right", width: 120, height: 120 },
      mobile: { show: true },
      log: false
    })

    setTimeout(function(){
      let moveDiv = document.querySelector(".live2d-widget-container");
      console.log(moveDiv)
      self.w = document.documentElement.clientWidth || document.body.clientWidth;
      self.h = document.documentElement.clientHeight || document.body.clientHeight;
      self.x = moveDiv.offsetWidth;
      self.y = moveDiv.offsetHeight;
      moveDiv.addEventListener('touchstart', self.down, { passive: false })
      moveDiv.addEventListener('touchmove', self.move, { passive: false })
    },2000)
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
    goMAD(){
      this.$router.push({ path: '/mad' });      
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
      this.$router.push({ path: '/chatRoom' });   
    },
    down(){
      let moveDiv = document.querySelector(".live2d-widget-container");
      var touch;
      if(event.touches){
         touch = event.touches[0];
      }else {
        touch = event;
      }
      this.position.x = touch.clientX;
      this.position.y = touch.clientY;
      this.dx = moveDiv.offsetLeft; //左偏移量
      this.dy = moveDiv.offsetTop; //上移量
    },
    move(){
      let moveDiv = document.querySelector(".live2d-widget-container")
      var touch ;
      if(event.touches){
        touch = event.touches[0];
      }else {
        touch = event;
      }
      //组织默认事件，防止body滑动
      event.preventDefault();
      this.nx = touch.clientX - this.position.x;
      this.ny = touch.clientY - this.position.y;
      this.xPum = this.dx+this.nx;
      this.yPum = this.dy+this.ny;
      //边界判断
      this.xPum = this.xPum>0?this.xPum:0;
      this.yPum = this.yPum>0?this.yPum:0;
      this.xPum = this.xPum>this.w-this.x?this.w-this.x:this.xPum;
      this.yPum = this.yPum>this.h-this.y?this.h-this.y:this.yPum;

      moveDiv.style.left = this.xPum+"px";
      moveDiv.style.top = this.yPum +"px";
    },
  }
}
</script>
<style lang="scss">
.live2d-widget-container{
  pointer-events: auto!important;
  z-index: 100!important;
}
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
    padding-bottom:100px;   
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
  .textBox{
    // font-size:15px; 
    // height:50px;
    // position: relative;
    // background: lawngreen;   
  }
  .textBox::before{
    content: '';
    height: 8px; width:100%; background: #000; opacity: .2; border-radius: 50%;
    position: absolute;
    top:60px;
    // animation: shadow .5s linear infinite;
  }
  .textBox{
    border-radius: 5px;
    background: #fff;
    // animation: rotate .5s linear infinite;
    position: relative;
    min-width: 50px;
    height:50px;
    text-align: center;
    line-height: 50px;
  }
  @keyframes shadow {
    0%, 100% {transform: scaleX(1);}
    50% {transform: scaleX(1.2);}
  }

  @keyframes rotate {
    0% {
    transform: translateY(0) ;
  }
    25% {
        transform: translateY(10px);
    }
    50% {
        transform: translateY(20px) scale(1.1, 0.9);
       
    }
    75% {
        ransform: translateY(10px) ;
    }
    100% {
        transform: translateY(0) ;
    }
  }  
}
</style>


