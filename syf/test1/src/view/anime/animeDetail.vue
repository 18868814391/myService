<template>
  <div class="animeDetail">
    <video-player  class="video-player-box"
                  ref="videoPlayer"
                  :options="playerOptions"
                  :playsinline="true"
                  >
    </video-player>
    <div v-if="list[0]" class="animeDetail-tip">
      &nbsp;&nbsp;&nbsp;↑↑↑↑如果手机浏览器给你省流量，请手动点击播放。还有，带宽就100K，要多等会儿的。
    </div>
    <div class="ans-box" v-if="list[0]">
      <div class="ans-box-item" v-for="(item,index) in list" :key="index" @click="sele(item)">
        {{item.substring(0,item.indexOf("."))}}
      </div>
    </div>
    <div v-if="!list[0]">暂无内容</div>
  </div>
</template>
<script>
import 'video.js/dist/video-js.css'
import { videoPlayer } from 'vue-video-player'
import {getAnime} from '@/api';
export default {
  components: {
    videoPlayer
  },
  data(){
    return{
      id:'',
      list:[],
        playerOptions: {
          autoplay:true,
          muted: false,
          loop: false,
          preload: 'auto',
          language: 'zh-CN',
          aspectRatio: '16:9',
          fluid: true,
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [{
            type: "video/mp4",
            src: ""
          }],
          poster: "",
          controlBar: {
            timeDivider: true,
            durationDisplay: true,
            remainingTimeDisplay: false,
            fullscreenToggle: true  //全屏按钮
          }          
        }
    }
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player
    }
  },  
  created(){
    const self=this;
    this.id=this.$route.query.id;
    console.log(this.id);
    getAnime({
      id:self.id,
    }).then((d)=>{
      console.log(d.data.data);
      self.list=d.data.data;
      self.list.sort();
      self.sele(self.list[0]);
    }).catch((d)=>{
 
    })
  },
  methods:{
    //http://118.31.62.251:8081
    sele(d){
      this.playerOptions.sources[0].src='/apis/syf/video/'+this.id+'/'+d;
      console.log(this.playerOptions.sources[0].src)
    }
  }  
}
</script>
<style lang="scss">
.animeDetail{
  .animeDetail-tip{
    font-size: 12px;
  }
  .ans-box{
    width: 100%;
    padding: 15px;
    box-sizing:border-box;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .ans-box-item{
      width:100px;
      height: 30px;
      box-shadow: 0 2px 2px 2px rgba(49, 49, 49, 0.2);
      text-align: center;
      line-height: 30px;
      border-radius:3px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin:10px 0; 
    }
  }
  .video-player-box{
    width: 100%;
  }  
}

</style>


