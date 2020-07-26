<template>
  <div class="projects">
    <div class="projects-card">
        <div class="projects-card1">社交电商</div>
        <a class="projects-card2" href="https://one.netmi.com.cn/">https://one.netmi.com.cn/</a>
        <div class="projects-card3">公司级原型电商及其对应后台。包含b2b2c,s2b2c,o2o等主流电商模式。使用kbone混合开发，统一了H5商城与微信小程序商城代码。活动页面统一使用H5，包含与APP端的通信能力。整合了网易云信（或融云）IM功能。</div>
        <div class="projects-card4">kbone，vue，微信小程序，IM</div>
    </div>
    <div class="projects-card">
        <div class="projects-card1">零售跳动官网</div>
        <a class="projects-card2" href="https://www.redance.com.cn/">https://www.redance.com.cn/</a>
        <div class="projects-card3">公司官网，采用seo优化方案，屏幕自适应方案</div>
        <div class="projects-card4">nuxt，vue，postcss</div>
    </div>
    <div class="projects-card">
        <div class="projects-card1">电商后台管理</div>
        <div class="projects-card3">公司级原型电商的后台管理系统，包含分销，营销，交易等主要模块。包含动态路由权限配置的身份处理方案。</div>
        <div class="projects-card4">vue-element-admin</div>
    </div>
    <div class="projects-card">
        <div class="projects-card1">优格中国</div>
        <a class="projects-card2" href="https://www.yougechina.cn/h5/youge/dist/#/index">https://www.yougechina.cn/h5/youge/dist/#/index</a>
        <div class="projects-card3">包含区域分销功能的电器类电商</div>
    </div>    
    <div class="projects-card">
        <div class="projects-card1">菏菜一号</div>
        <a class="projects-card2" href="https://hlyhao-api.abidmall.com/netmi-shop-h5/dist/#/index">https://hlyhao-api.abidmall.com/netmi-shop-h5/dist/#/index</a>
        <div class="projects-card3">买鸡送蛋的无接触农产品配送商城</div>
    </div>  
    <div class="projects-card">
        <div class="projects-card1">红人星球</div>
        <a class="projects-card2" href="https://api.101redplanet.com/101planet/dist/#/index">https://api.101redplanet.com/101planet/dist/#/index</a>
        <div class="projects-card3">分销会员制商城</div>
    </div>   
    <div class="projects-card">
        <div class="projects-card1">岚贝商城</div>
        <a class="projects-card2" href="http://home.lanbeikj.com/netmi-shop-h5/dist/#/index">http://home.lanbeikj.com/netmi-shop-h5/dist/#/index</a>
        <div class="projects-card3">分销会员制商城</div>
    </div> 
    <div class="projects-card">
        <div class="projects-card1">农拍网</div>
        <a class="projects-card2" href="https://tmall.abidmall.com/netmi-shop-h5/dist/#/index">https://tmall.abidmall.com/netmi-shop-h5/dist/#/index</a>
        <div class="projects-card3">分销会员制商城</div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{

    }
  },
  created(){

  },
  methods:{
    
  },
}
</script>
<style lang="scss">
.projects{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .projects-card{
        width: 80vw;
        padding: 16px;
        border-radius:10px;
        border: 1px solid black;
        margin: 15px 0;
        .projects-card1{
            font-weight: bold;
        }
        .projects-card2{
            color: blue;
            word-break: break-all;
        }
        .projects-card3{
            word-break: break-all;
        }
        .projects-card4{
            font-size: 12px;
            color: #666;
        }
    }
}
</style>
