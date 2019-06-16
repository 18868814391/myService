<template>
  <div class="test1-page">
    <canvas id="testCanvas" width="550" height="500"></canvas>
  </div>
</template>
<script>
export default {
  data(){
    return{

    }
  },
  mounted(){
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = 'http://118.31.62.251/apis/syf/staticJS/clover.js';
    document.body.appendChild(s);
  },
  methods:{

  },
}
</script>
<style lang="scss">
.test1-page{

}
</style>

