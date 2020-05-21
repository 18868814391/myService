<template>
  <div class="test1-page">
    <canvas id="canvas22"></canvas>
  </div>
</template>
<script>
import Cookies from 'js-cookie'
import moment from 'moment'
import {yiiGetDood} from '@/api';
import { Toast,Popup } from 'vant';
import syftime from 'syftime'
  export default {
  components: {
		[Toast.name]: Toast,
		[Popup.name]: Popup,
  }, 		
    data () {
      return {

      }
    },
    created () {
      let stamp=syftime.TimeStamp('2018/12/27 18:30:00')
      console.log(stamp)
      let stamp2=syftime.TimeStamp('2019-12-27 10:12:33')
      let stamp3=stamp2-stamp
      console.log(syftime.TimeString(stamp3).timeData1);
      let stamp4=syftime.TimeEver('2019-9-12 02:01:00')
      console.log(stamp4)
      let stamp5=new Date().getTime()
      let stamp6=syftime.TimeStamp('2019-9-14 09:30:00')




    },
    mounted () {
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
    destroyed () {

    },
    computed: {

    },
    methods: {

    }
  }
</script>
<style lang="scss">
.test1-page{
  canvas{background-color:white ;background-size: 100% 100%;overflow: hidden;}
}
</style>

