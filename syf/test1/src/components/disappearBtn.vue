<template>
  <div class="disappearBtn-page">
    <div class="divbtn cake" style="width:80px" @click="goRoute">
      <div id="btn" style="width:80px" ref="doom">{{title}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'disappearBtn',
  data(){
    return{

    }
  },
  props:{
    title: {
      type: String,
      default() {
        return '默认'
      }
    },
    rout: {
      type: String,
      default() {
        return 'b'
      }
    }, 
    idn: {
      type: String,
      default() {
        return ''
      }
    }, 
  },  
  mounted(){
    const self=this;
    this.$refs.doom.classList.add(`${self.idn}`);
    this.loadAsyncScript('https://118.31.62.251/apis/syf/staticJS/anime.min.js',function(){
      self.loadAsyncScript('https://118.31.62.251/apis/syf/staticJS/particles.js',function(){
          var particles = new Particles(`.${self.idn}`);
            $(`.${self.idn}`).click(function() {
                // Disintegrate the button into particles
                //启动粒子特效
                particles.disintegrate();
            
                // would do the opposite
                //设置四秒后恢复
                setTimeout(function() {
                    particles.integrate();
                }, 4000);
            }) 
      })
    })    
  },
  methods:{
    goRoute(){
      setTimeout(()=>{
        this.$router.push({ path: `/${this.rout}` }); 
      },2000)
    },
    loadAsyncScript(url, callback) {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        if (script.readyState) {
            // 兼容IE浏览器
            // 脚本加载完成事件
            script.onreadystatechange = function () {
                if (script.readyState === 'complete' || script.readyState === 'loaded') {
                    callback();
                }
            }
        } else {
            // Chrome, Safari, FireFox, Opera可执行
            // 脚本加载完成事件
            script.onload = function () {
                callback();
            }
        }
        script.src = url; //将src属性放在后面，保证监听函数能够起作用
        document.head.appendChild(script);
    }
  },
}
</script>
<style lang="scss">
.disappearBtn-page{
  #btn{
    text-align: center;
    height: 50px;
    line-height: 50px;
    border-radius:10px;
    background:rgba(44,193,254,1);
    color: white; 
	}
	.cake{
		animation:move 3s 0s infinite;-webkit-animation:move 3s 0s infinite;transform-origin:bottom;-webkit-transform-origin:bottom;
	}
@keyframes move
{
    0%, 65%{ 
      -webkit-transform:rotate(0deg);
      transform:rotate(0deg);
    }
    70% {  
      -webkit-transform:rotate(6deg);
      transform:rotate(6deg);
    }
    75% {  
      -webkit-transform:rotate(-6deg);
      transform:rotate(-6deg);
    }
    80% {  
      -webkit-transform:rotate(6deg);
      transform:rotate(6deg);
    }
    85% {  
      -webkit-transform:rotate(-6deg);
      transform:rotate(-6deg);
    }
    90% {  
      -webkit-transform:rotate(6deg);
      transform:rotate(6deg);
    }
    95% {  
      -webkit-transform:rotate(-6deg);
      transform:rotate(-6deg);
    }
    100% {  
      -webkit-transform:rotate(0deg);
      transform:rotate(0deg);
    }
}

@-webkit-keyframes move
{
    0%, 65%{ 
      -webkit-transform:rotate(0deg);
      transform:rotate(0deg);
    }
    70% {  
      -webkit-transform:rotate(6deg);
      transform:rotate(6deg);
    }
    75% {  
      -webkit-transform:rotate(-6deg);
      transform:rotate(-6deg);
    }
    80% {  
      -webkit-transform:rotate(6deg);
      transform:rotate(6deg);
    }
    85% {  
      -webkit-transform:rotate(-6deg);
      transform:rotate(-6deg);
    }
    90% {  
      -webkit-transform:rotate(6deg);
      transform:rotate(6deg);
    }
    95% {  
      -webkit-transform:rotate(-6deg);
      transform:rotate(-6deg);
    }
    100% {  
      -webkit-transform:rotate(0deg);
      transform:rotate(0deg);
    }
}	
/* Page Loader */
.js .loading::before {
	content: '';
	position: fixed;
	z-index: 100000;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: var(--color-bg);
}

.js .loading::after {
	content: '';
	position: fixed;
	z-index: 100000;
	top: 50%;
	left: 50%;
	width: 60px;
	height: 60px;
	margin: -30px 0 0 -30px;
	pointer-events: none;
	border-radius: 50%;
	opacity: 0.4;
	background: var(--color-link);
	animation: loaderAnim 0.7s linear infinite alternate forwards;
}

@keyframes loaderAnim {
	to {
		opacity: 1;
		transform: scale3d(0.5,0.5,1);
	}
}

a {
	text-decoration: none;
	color: var(--color-link);
	outline: none;
}

a:hover,
a:focus {
	color: var(--color-link-hover);
	outline: none;
}

.hidden {
	position: absolute;
	overflow: hidden;
	width: 0;
	height: 0;
	pointer-events: none;
}

/* Icons */
.icon {
	display: block;
	width: 2em;
	height: 2em;
	margin: 0 auto;
	fill: currentColor;
}

main {
	position: relative;
	margin: 0 auto;
}

/* Header */
.codrops-header {
	position: relative;
	z-index: 100;
	display: flex;
	flex-direction: row;
	align-items: center;
	width: 100%;
	padding: 10vw;
	background-image: linear-gradient(110deg,#1e089b,#4702a0);
	font-size: 75%;
}

.codrops-header__inner {
	display: flex;
	max-width: 500px;
	flex-direction: column;
	align-items: flex-start;
}

.codrops-header__title {
	font-size: 1.5rem;
	line-height: 1;
	font-weight: 600;
	margin: 0;
	padding: 0.5rem 0;
	font-family: 'IBM Plex Mono', monospace;
	font-weight: 500;
	background: linear-gradient(90deg, #f7c53d 0%,#9302a0 50%, #6dbaa3 100%);
    background-size: cover;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
}

.info {
	margin: 1rem 0;
	color: var(--color-info);
}

.github {
	display: block;
}

/* Top Navigation Style */
.codrops-links {
	position: relative;
	display: flex;
	justify-content: center;
	text-align: center;
	white-space: nowrap;
}

.codrops-icon {
	display: inline-block;
	margin: 0.15em;
	padding: 0.25em; 
}

.grid__item {
	position: relative;
	display: grid;
	grid-template-columns: 100%;
	grid-template-rows: 100%;
	align-items: center;
	justify-items: center;
	overflow: hidden;
	padding: 4rem 1.5rem;
	height: 100vw;
	width: 100vw;
	background: var(--color-item-bg);
}

.grid__item-title {
	font-size: 0.85rem;
	color: var(--color-item-title);
	align-self: flex-start;
	margin: 0;
}

.action {
	position: absolute;
	top: 0;
	right: 0;
	background: none;
	margin: 2rem;
	color: var(--color-action);
	border: 0;
	padding: 0;
	opacity: 0;
	pointer-events: none;
}

.action:focus {
	outline: none;
}

.particles {
	position: relative;
	grid-area: 1 / 1 / 2 / 2;
}

.particles-canvas {
	position: absolute;
	pointer-events: none;
	top: 50%;
	left: 50%;
	transform: translate3d(-50%,-50%,0);
}

.particles-wrapper {
	position: relative;
	display: inline-block;
    overflow: hidden;
}

.particles-button {
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	position: relative;
	border-radius: 5px;
	border-radius: var(--radius-button);
	background: var(--color-button-bg);
	color: var(--color-button-text);
	border: 0;
	border: var(--border-button);
	margin: 0;
	padding: 1.5rem 3rem;
	padding: var(--button-padding);
}

.particles-button:focus {
	outline: none;
}

.no-js .particles-button {
	grid-area: 1 / 1 / 2 / 2;
}

.theme-1 {
	--color-item-bg: linear-gradient(120deg, #a8edea 0%, #fed6e3 100%);
	--color-action: #121019;
	--color-button-bg: #121019;
	--color-button-text: #fff;
	--button-padding: 1.5rem 3rem;
	--radius-button: 5px;
	--border-button: 0;
}

.theme-2 {
	--color-item-bg: linear-gradient(120deg,#7f54e6,#3F51B5);
    --color-action: #f3f3f3;
    --color-button-bg: #f3f3f3;
	--color-button-text: #3c2e9e;
	--button-padding: 1.8rem 4rem;
	--radius-button: 5px;
	--border-button: 0;
}

.theme-3 {
	--color-item-bg: linear-gradient(120deg,#152bc3,#5366d8);
    --color-action: #0e19a2;
    --color-button-bg: #0e19a2;
    --color-button-text: #fff;
    --button-padding: 2rem 4rem;
    --radius-button: 0;
    --border-button: 0;
}

.theme-4 {
	--color-item-bg: linear-gradient(120deg,#ecef3a,#ec6b9b);
    --color-action: #e85577;
    --color-button-bg: #transparent;
    --color-button-text: #e85577;
    --button-padding: 1.5rem 3rem;
    --radius-button: 15px;
    --border-button: 4px solid #e85577;
}

.theme-5 {
	--color-item-bg: linear-gradient(120deg,#baedff,#07a2da);
	--color-action: #003ff1;
	--color-button-bg: #003ff1;
	--color-button-text: #fff;
	--button-padding: 1rem 2rem;
    --radius-button: 5px;
    --border-button: 0;
}

.theme-6 {
	--color-item-bg: linear-gradient(120deg,#9C27B0,#090772);
	--color-action: #f7d337;
	--color-button-bg: #f7d337;
	--color-button-text: #000000;
	--button-padding: 1.5rem 3rem;
	--radius-button: 40px;
	--border-button: 0;
}

.theme-7 {
	--color-item-bg: linear-gradient(-20deg, #f794a4 0%, #fdd6bd 100%);
    --color-action: #e2405b;
    --color-button-bg: #e2405b;
    --color-button-text: #e9e9e9;
    --button-padding: 1.8rem 4.5rem;
    --radius-button: 0;
    --border-button: 0;
}

.theme-8 {
	--color-item-bg: linear-gradient(120deg, #84fab0, #8fd3f4);
	--color-action: blue;
	--color-button-bg: linear-gradient(to top, #22b9d2 0%, #5389ec 100%);
	--color-button-text: #fff;
	--button-padding: 2rem 4rem;
	--radius-button: 10px;
	--border-button: 0;
}

.theme-9 {
	--color-item-bg: linear-gradient(120deg, #d299c2 0%, #fef9d7 100%);
    --color-action: #c13a3a;
    --color-button-bg: #c13a3a;
    --color-button-text: #ffffff;
    --button-padding: 1.5rem 3rem;
    --radius-button: 10px;
    --border-button: 0;
}

.theme-10 {
	--color-item-bg: linear-gradient(120deg, #fddb92 0%, #d1fdff 100%);
	--color-action: #b1b1b1;
	--color-button-bg: #b1b1b1;
	--color-button-text: #fff;
	--button-padding: 1.5rem 3rem;
	--radius-button: 0;
	--border-button: 0;
}

.theme-11 {
	--color-item-bg: linear-gradient(120deg, #fff1eb 0%, #ace0f9 100%);
    --color-action: #1b81ea;
    --color-button-bg: #fff;
    --color-button-text: #1b81ea;
    --button-padding: 2rem 4.5rem;
    --radius-button: 7px;
    --border-button: 0;
}

.theme-12 {
	--color-item-bg: linear-gradient(to right, #f78ca0 0%, #f9748f 19%, #fd868c 60%, #fe9a8b 100%);
    --color-action: #ff4d73;
    --color-button-bg: #ff4d73;
    --color-button-text: #fff;
    --button-padding: 1.5rem 7rem;
    --radius-button: 40px;
    --border-button: 0;
}

@media screen and (min-width: 50em) {
	.codrops-header {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: 0 auto;
		min-height: 100vh;
	}
	.codrops-header__title {
		font-size: 3rem;
	}
	.codrops-header::after {
		content: '↓向下滚动页面查看示例DEMO';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		text-align: center;
		margin-bottom: 1rem;
		/* color: var(--color-scroll); */
		color:#fff;
	}
	.github {
		position: absolute;
		top: 0;
		left: 0;
		margin: 2rem;
	}
	.grid {
		display: grid;
		grid-gap: 22px;
		grid-template-columns: repeat(2,calc(50vmax - 11px));
	}
	.grid__item {
		height: 50vmax;
		width: 100%;
		padding: 1.5rem;
	}
	.codrops-header {
		font-size: 100%;
		padding: 0 0 2rem 0;
		border: 22px solid black;
	}


}
}
</style>

