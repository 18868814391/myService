<template>
  <div class="blog-page">
    <div class="searchBox">
      <input type="text" placeholder="请输入关键字" v-model="keyword">
      <button @click="goSearch()">搜索</button>
      <button @click="goList()" v-if="flag">返回全部</button>
    </div>
    <div class="tabCon">
      <div class="tabCon-item" v-for="(ite,ind) in searchTab" :key="ind" @click="dSearch(ite)">
        {{ite}}&nbsp;({{tabSum[ite]}})
      </div>
    </div>
  <van-list
    v-model="loading"
    :finished="finished"
    :immediate-check="false"
    finished-text="不要划拉划拉啦，已经没有了"
    @load="onLoad"
  >    
      <div class="blp-item" v-for="(item,index) in list" :key="index" @click="goRead(item.id)">
        {{item.title}}
      </div>
  </van-list>    
  </div>
</template>
<script>
import { BlogList,yiiBlogSearch,yiiBlogTab} from '@/api';
import { Toast,List } from 'vant';
export default {
  components: {
    [Toast.name]: Toast,
    [List.name]: List,
  },   
  data(){
    return{
      flag:false,
      list:[],
      start_page:0,
      pages:25,
      loading:false,
      finished:false,
      firstEnter:false,
      keyword:'',
      toast:'',
      timer:'', 
      searchTab:['js','vue','php','yii','nginx','mysql','nuxt','linux','node','flutter','RN'],
      tabSum:'',   
    }
  },
  created(){
      const self=this;
      self.getTab();
      BlogList({
        start_page:self.start_page,
        pages:self.pages,
      }).then((d)=>{
        self.start_page++;
        self.loading=false;
        self.list=self.list.concat(d.data.data);
        console.log('拼接后的数组',self.list)
        if(self.list.length*1>=d.data.total_page*1){
          self.finished=true;
        }
        self.firstEnter=true;
      }).catch(()=>{

      })   
  },
  methods:{
    goRead(d){
      this.$router.push({ path: '/readBlog',query:{id:d} }); 
    },
    getTab(){
      const self=this;
      yiiBlogTab({
        tab:self.searchTab,
      }).then((d)=>{
        self.tabSum=d.data.data;
        console.log(self.tabSum)
      }).catch((d)=>{

      })
    },
    goList(){
      this.flag=false;
      this.finished=false;
      this.start_page=0;
      this.list=[];
      const self=this;
      BlogList({
        start_page:self.start_page,
        pages:self.pages,
      }).then((d)=>{
        self.start_page++;
        self.loading=false;
        self.list=self.list.concat(d.data.data);
        console.log('拼接后的数组',self.list)
        if(self.list.length*1>=d.data.total_page*1){
          self.finished=true;
        }
        self.firstEnter=true;
      }).catch(()=>{

      })       
    },
    dSearch(d){
      this.keyword=d;
      this.goSearch();
    },
    goSearch(){
      const self=this;
      if(!this.keyword){
        Toast('请输入内容')
        return false
      }
      const toast = Toast.loading({
        duration: 0,       // 持续展示 toast
        forbidClick: true, // 禁用背景点击
        loadingType: 'spinner',
        message: 'loading... 3 秒'
      });
      let second = 3;

      const timer = setInterval(() => {
        second--;
        if (second>=0) {
          toast.message = `loading... ${second} 秒`;
        } else if(second<0&&second>=-3){
          toast.message = `好吧，我的服务器是捡来的`;
        }else if(second<-3&&second>-6){
          toast.message = `或许是你的网络问题，我关掉了嗷`;
        }else if(second<=-6){
          Toast.clear();
          clearInterval(timer);          
        }
      }, 1000);    
      
      
      console.log(this.keyword);
      yiiBlogSearch({
        keyword:self.keyword,
      }).then((d)=>{
        clearInterval(timer);
        Toast.clear();
        if(d.data.errcode==0){
          self.flag=true;
          self.finished=true;
          self.list=d.data.data;
          self.start_page=0;
        }else{
          Toast(d.data.errmsg)
        }
      }).catch((d)=>{
        clearInterval(timer);
        Toast(d.data.errmsg)
      })
    },
    onLoad(){
      if(this.firstEnter){
        const self=this;
        BlogList({
          start_page:self.start_page,
          pages:self.pages,
        }).then((d)=>{
          self.start_page++;
          self.loading=false;
          self.list=self.list.concat(d.data.data);
          console.log('拼接后的数组',self.list)
          if(self.list.length*1>=d.data.total_page*1){
            self.finished=true;
          }
        }).catch(()=>{

        })
      }

    },
  }
}
</script>
<style lang="scss">
.blog-page{
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
  .searchBox{
    width: 100%;
    height: 50px;
    box-sizing: border-box;
    padding: 0 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    input{
      flex: 1;
      width: 120px;
    }
    button{
      min-width: 50px;
      font-size: 13px;
      white-space: nowrap;
      margin-left:10px; 
    }
  }
  .blp-item{
    padding: 5px;
    box-sizing: border-box;
    border-radius:5px; 
    font-size: 20px;
    line-height: 35px;
    color: #1D1E1F;
    margin-top:10px;
    box-shadow: 0 2px 2px 2px rgba(49, 49, 49, 0.2);
  }
  .tabCon{
    width: 100%;
    padding:0 15px;
    margin: 15px 0;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    .tabCon-item{
      color: rgb(102, 110, 184);
      font-size: 12px;
      padding: 3px;
      border: 1px solid lightblue;
      border-radius:3px; 
      margin:5px 20px 5px 0; 
    }
  }
}
</style>


