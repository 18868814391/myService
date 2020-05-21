<template>
<div class="allCon">
    <canvas id="canvas22"></canvas>
        <div class="album">
            <div class="altit">致syn</div>
                <audio class="altit2" id="music" loop="loop" autoplay="autoplay" controls="controls">
                    <source src="https://www.shenyifan.top/apis/syf/music/文学者の恋文.mp3" type="audio/mpeg">
                </audio>
            <div class="lockOn" v-if="lock">
                <div class="lockOn-B">
                    <div class="lockOn-Bs" @click="sele('A')" :class="code.indexOf('A')!=-1?'redB':''">A</div>
                    <div class="lockOn-Bs" @click="sele('S')" :class="code.indexOf('S')!=-1?'redB':''">S</div>
                    <div class="lockOn-Bs" @click="sele('D')" :class="code.indexOf('D')!=-1?'redB':''">D</div>
                    <div class="lockOn-Bs" @click="sele('E')" :class="code.indexOf('E')!=-1?'redB':''">E</div>
                    <div class="lockOn-Bs" @click="sele('Y')" :class="code.indexOf('Y')!=-1?'redB':''">Y</div>
                    <div class="lockOn-Bs" @click="sele('J')" :class="code.indexOf('J')!=-1?'redB':''">J</div>
                    <div class="lockOn-Bs" @click="sele('N')" :class="code.indexOf('N')!=-1?'redB':''">N</div>
                    <div class="lockOn-Bs" @click="sele('M')" :class="code.indexOf('M')!=-1?'redB':''">M</div>
                    <div class="lockOn-Bs" @click="sele('K')" :class="code.indexOf('K')!=-1?'redB':''">K</div>
                </div>
            </div>
        <div id="react">
            <div class="out_frount">
                <div class="out_pic bgm1"></div>
                <!-- <img src="../../img/album/timg (5).jpg" class="out_pic"> -->
            </div>
            <div class="out_back">
                <div class="out_pic bgm2"></div>
                <!-- <img src="../../img/album/timg (6).jpg" class="out_pic"> -->
            </div>
            <div class="out_left">
                <!-- <div class="out_pic bgm3"></div> -->
                <img src="../../img/syn/im3.jpg" class="out_pic">
            </div>
            <div class="out_right">
                <!-- <div class="out_pic bgm4"></div> -->
                <img src="../../img/syn/im4.jpg" class="out_pic">
            </div>
            <div class="out_top">
                <!-- <div class="out_pic bgm5"></div> -->
                <img src="../../img/syn/im5.jpg" class="out_pic">
            </div>
            <div class="out_bottom">
                <!-- <div class="out_pic bgm6"></div> -->
                <img src="../../img/syn/im6.jpg" class="out_pic">
            </div>
            <span class="in_frount">
                <div class="in_pic bgm7"></div>
                <!-- <img src="../../img/syn/im7.jpg" class="in_pic"> -->
            </span>
            <span class="in_back">
                <div class="in_pic bgm8"></div>
                <!-- <img src="../../img/album/timg (12).jpg" class="in_pic"> -->
            </span>
            <span class="in_left">
                <div class="in_pic bgm9"></div>
                <!-- <img src="../../img/album/timg (13).jpg" class="in_pic"> -->
            </span>
            <span class="in_right">
                <div class="in_pic bgm10"></div>
                <!-- <img src="../../img/album/timg (14).jpg" class="in_pic"> -->
            </span>
            <span class="in_top">
                <div class="in_pic bgm11"></div>
                <!-- <img src="../../img/album/timg (15).jpg" class="in_pic"> -->
            </span>
            <span class="in_bottom">
                <div class="in_pic bgm12"></div>
                <!-- <img src="../../img/album/timg (16).jpg" class="in_pic"> -->
            </span>
        </div>
        </div>
</div>


</template>
<script>
export default {
  data(){
      return{
          lock:true,
          code:'',
      }
  },
  created(){

  },
  methods:{
      sele(d){
          this.code=this.code+d
          if(this.code.length==3){
              if(this.code=='SYN'){
                  this.lock=false;
                  this.code='';
              }else{
                  this.code='';                  
              }
              
          }
          console.log(this.code)
      },
  },
  mounted(){
var width=window.innerWidth;//获取系统显示宽度;
		var height=window.innerHeight;//获取系统显示高度;
    var canvas=document.querySelector("#canvas22");
    console.log(canvas)
		var context=canvas.getContext("2d");
		var snowArray=[];//声明一个数组，用于存放创建出来的雪花对象；
 
		canvas.width=width;//设置画布的宽度为系统显示宽度;
		canvas.height=height;//设置画布的高度为系统显示高度;
 
		cartoon();          //调用动画;
		
		/**
		 * 定义雪花类;
		 */
		class Snowflake{
			constructor(){
				this.init();//构造函数，调用定义好的init()方法;
			}
			init(){
				this.position={   //雪花对象的位置;
					x:Math.random()*width,//x坐标随机;
					y:Math.random()*height,//y坐标随机;
				}
				this.speed=Math.random()*10;//雪花下落速度为0-10以内的随机数;
				this.r=Math.random()*6;//雪花的半径为0-6以内的随机数;
				this.transparency=Math.random();//设置雪花的透明度为随机;
				this.color={
					r1:Math.random()*255,//雪花颜色随机;
					g:Math.random()*255,
					b:Math.random()*255,
				}
			}
			draw(){//雪花绘制方法;
				this.position.y++;//y坐标每次递增1像素;
				this.transparency-=0.01;//透明度每次递减0.01;
				if(this.transparency<=0){//透明度小于0，即雪花消失，重新绘制雪花;
					this.init();
				}
				context.beginPath();//开始一个新的图形绘制;
				context.fillStyle="rgba("+this.color.r1+","+this.color.g+","+this.color.b+","+this.transparency+")";//根据类模型绘制圆形雪花;
				context.arc(this.position.x,this.position.y,this.r,0,Math.PI*2);//填充雪花的颜色;
				context.fill();
			}	
		}
 
		for(var i=0;i<1000;i++){
			var snow=new Snowflake();//实例化1000个雪花对象;
			snowArray.push(snow);//将雪花对象添加到数组中;
		}
		// var length=snowArray.length;
 
		/**
		 * 定义动画效果;
		 * @return {[type]} [description]
		 */
		function cartoon(){
			context.clearRect(0,0,width,height);//动画完成一次进行清屏操作;
			for(var j=0;j<snowArray.length;j++){
				snowArray[j].draw();//将实例化好的每个雪花对象在画布上画出来;
			}
			requestAnimationFrame(cartoon);//递归调用动画效果;
		}
  },
}
</script>
<style lang="scss">
.allCon{
    canvas{
        background-color:white ;
        width: 100vw;
        height: 100vh;
        overflow: hidden;
        position: fixed;
        top: 0;
        left: 0;
    }
    .album{
    width: 100vw;
    height: 100vh;
    position: relative;
    z-index: 888;
    #react{
        width: 200px;
        height:200px;
        margin: 200px auto;
        transform-style:preserve-3d;
        animation:rotate 20s infinite;
        animation-timing-function: linear;
    }
    #react div{
        position:absolute;
        transition: all .4s;
    }
    div .out_pic{
        width:200px;
        height:200px;
        opacity:0.9;
        background-size:cover;
        background-position:center center;  
    }
    div .in_pic{
        width:100px;
        height:100px;
        background-size:cover;
        background-position:center center;      
    }

    #react span{
        display:block;
        position:absolute;
        width:100px;
        height:100px;
        top:50px;
        left:50px;
    }
    @keyframes rotate{
        from{transform: rotateX(0deg) rotateY(0deg);}
        to{transform: rotateX(360deg) rotateY(360deg);}
    }
    .out_frount{
        transform:translateZ(100px);
    }
    .out_back{
        transform:translateZ(-100px);
    }
    .out_left{
        transform:rotateY(90deg) translateZ(100px);
    }
    .out_right{
        transform: rotateY(-90deg) translateZ(100px);
    }
    .out_top{
        transform:rotateX(90deg) translateZ(100px);
    }
    .out_bottom{
        transform: rotateX(-90deg) translateZ(100px);
    }
    .in_frount{
        transform:translateZ(50px);
    }
    .in_back{
        transform:translateZ(-50px);
    }
    .in_left{
        transform:rotateY(90deg) translateZ(50px);
    }
    .in_right{
        transform: rotateY(-90deg) translateZ(50px);
    }
    .in_top{
        transform:rotateX(90deg) translateZ(50px);
    }
    .in_bottom{
        transform: rotateX(-90deg) translateZ(50px);
    }
    #react:hover .out_frount{
        transform:translateZ(200px);
    }
    #react:hover .out_back{
        transform:translateZ(-200px);
    }
    #react:hover .out_left{
        transform:rotateY(90deg) translateZ(200px);
    }
    #react:hover .out_right{
        transform: rotateY(-90deg) translateZ(200px);
    }
    #react:hover .out_top{
        transform:rotateX(90deg) translateZ(200px);
    }
    #react:hover .out_bottom{
        transform: rotateX(-90deg) translateZ(200px);
    }
    .bgm1{
        background-image:url('../../img/syn/im1.jpg') 
    }
    .bgm2{
        background-image:url('../../img/syn/im2.jpg') 
    }
    .bgm3{
        background-image:url('../../img/syn/im3.jpg') 
    }
    .bgm4{
        background-image:url('../../img/syn/im4.jpg') 
    }
    .bgm5{
        background-image:url('../../img/syn/im5.jpg') 
    }
    .bgm6{
        background-image:url('../../img/syn/im6.jpg') 
    }
    .bgm7{
        background-image:url('../../img/syn/im7.jpg') 
    }
    .bgm8{
        background-image:url('../../img/syn/im8.jpg') 
    }
    .bgm9{
        background-image:url('../../img/syn/im9.jpg') 
    }
    .bgm10{
        background-image:url('../../img/syn/im10.jpg') 
    }
    .bgm11{
        background-image:url('../../img/syn/im11.jpg') 
    }
    .bgm12{
        background-image:url('../../img/syn/im12.jpg') 
    }
    .altit{
        position: fixed;
        top: 5px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 20px;

    }
    .altit2{
        position: fixed;
        top: 50px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 20px;    
    }
        .lockOn{
            width: 100vw;
            height: 100vh;
            background: black;
            z-index: 999;
            position: fixed;
            top:0;
            left: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            .lockOn-B{
                width: 300px;
                height: 300px;
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                .lockOn-Bs{
                    width: 95px;
                    height: 95px;
                    box-sizing: border-box;
                    background: white;
                    border-radius:50%;
                    text-align: center;
                    line-height: 95px;
                    font-size: 30px;
                    font-weight: bold;
                    color: black; 
                }
                .redB{
                    background: rgba(126, 233, 236, 0.5)
                }
            }
        }
    }    
}

</style>


