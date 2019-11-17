<template>
  <div class="album">
<div id="react">
    <div class="out_frount">
        <img src="../../img/album/timg (5).jpg" class="out_pic">
    </div>
    <div class="out_back">
        <img src="../../img/album/timg (6).jpg" class="out_pic">
    </div>
    <div class="out_left">
        <img src="../../img/album/timg (7).jpg" class="out_pic">
    </div>
    <div class="out_right">
        <img src="../../img/album/timg (8).jpg" class="out_pic">
    </div>
    <div class="out_top">
        <img src="../../img/album/timg (9).jpg" class="out_pic">
    </div>
    <div class="out_bottom">
        <img src="../../img/album/timg (10).jpg" class="out_pic">
    </div>
    <span class="in_frount">
        <img src="../../img/album/timg (11).jpg" class="in_pic">
    </span>
    <span class="in_back">
        <img src="../../img/album/timg (12).jpg" class="in_pic">
    </span>
    <span class="in_left">
        <img src="../../img/album/timg (13).jpg" class="in_pic">
    </span>
    <span class="in_right">
        <img src="../../img/album/timg (14).jpg" class="in_pic">
    </span>
    <span class="in_top">
        <img src="../../img/album/timg (15).jpg" class="in_pic">
    </span>
    <span class="in_bottom">
        <img src="../../img/album/timg (16).jpg" class="in_pic">
    </span>
</div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss">
.album{
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
}
div .in_pic{
    width:100px;
    height:100px;
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
}
</style>


