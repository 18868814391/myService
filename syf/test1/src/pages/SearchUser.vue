<template>
  <div class="g-inherit m-article p-search-user">
    <div class="Chat-nav">
      <div @click="onClickBack">返回</div>
      <div class="SearchUserButtons">
        <div @click="seleButton(0)" class="SearchUserBi" :class="searchType==0?'seleB':''">搜索用户</div>
        <div @click="seleButton(1)" class="SearchUserBi" :class="searchType==1?'seleB':''">搜索群</div>
      </div>
      <div></div>
    </div>      
    <van-cell-group class="u-search">
        <van-search
          class="u-ipt-default"
          type="text"
          v-model="searchText"
          :placeholder="searchType===0?'请输入搜索内容':'请输入群号'"
          ref='searchInput'
          show-action
        />
    </van-cell-group>
    <div>
      <van-button size="large" type="primary" @click.native="searchUser">搜索</van-button>
    </div>
    <van-cell-group class="u-card u-list">
      <van-cell v-if='searchType === 0'
        v-for="(user, index) in searchList"
        class="u-list-item"
        :title="user.nick"
        :inline-desc="user.account"
        :key="user.account"
        :userId="index"
        is-link
        :to="user.link">
        <img class="icon" slot="icon" width="20" :src="user.avatar">
      </van-cell>
      <van-cell v-else
        v-for="team in searchList"
        class="u-list-item"
        :title="team.name" 
        :key="team.teamId"
        is-link
        :to="team.link">
        <img class="icon" slot="icon" width="20" :src="team.avatar">
      </van-cell>
    </van-cell-group>
    <div class="u-card">
      <h3>{{errMsg}}</h3>
    </div>
  </div>
</template>

<script>
import config from '../configs'
import { Cell, CellGroup,Button,Search } from 'vant';
export default {
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Button.name]:Button,
    [Search.name]:Search,
  },   
  mounted () {
    this.$nextTick(() => {
      this.searchType = parseInt(this.$route.params.searchType)
      this.$store.dispatch('resetSearchResult')
    })

    setTimeout(() => {
      // 立即focus会引起切页时白屏，故增加timeout
      this.$refs.searchInput.$refs.input.focus()
    }, 500);
  },
  data () {
    return {
      searchType: 0, // 用户 0 群 1
      searchText: '',
      searchList: [],
      errMsg: '',
      // 首次加载标志，因为mount和watch会有时序问题，首次加载不显示errMsg
      firstEntry: true,
    }
  },
  watch: {
    searchResult (val, oldVal) {
      if ((val.length === 0) && (!this.firstEntry)) {
        this.errMsg = '无记录'
      } else {
        this.errMsg = ''
      }
      this.searchList = val
    },
    searchType() {
      this.$refs.searchInput.$refs.input.focus()
    }
  },
  computed: {
    searchResult () {
      let result = []
      if (this.searchType === 1) {
        result = this.$store.state.searchedTeams.map(item => {
         item.avatar = item.avatar || config.defaultUserIcon
          item.link = `/teamcard/${item.teamId}`
          return item
        })
      } else if (this.searchType === 0) {
        result = this.$store.state.searchedUsers.map(item => {
          item.nick = item.nick || item.account
          item.link = `/namecard/${item.account}`
          item.avatar = item.avatar || config.defaultUserIcon
          return item
        })
      }
      return result
    }
  },
  methods: {
    onClickBack(){
      window.history.go(-1);
    },
    seleButton(d){
      this.searchType=d;
    },
    searchUser () {
      if (!this.searchText) {
        this.$toast('未输入内容')
        return
      }
      this.firstEntry = false
      if (this.searchType === 1) {
        if(!/^(\d){4,9}$/.test(this.searchText)){
          this.$toast('输入的群号非法')
          return
        }
        this.$store.dispatch('searchTeam', {
          teamId: this.searchText
        })
      } else if (this.searchType === 0) {
        if (this.searchText === this.$store.state.userUID) {
          this.searchList = []
          this.errMsg = '别看了，就是你自己！'
        } else {
          this.$store.dispatch('searchUsers', {
            accounts: [this.searchText]
          })
        }
      }
    }
  }
}
</script>
<style lang="scss">
.Chat-nav{
    position: absolute;
    top: 0;
    left: 0;
    margin: 0;
    width: 100%;
    height: 60px;
    overflow: hidden;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 15px;
    background: #e5f4ff;
    color: #0091e4;
}
.SearchUserButtons{
  width: 180px;
  height: 30px;
  border: 1px solid #04BE02;
  border-radius:15px;
  display: flex;
  align-items: center;
  background: white;
  overflow: hidden;
}
.SearchUserBi{
  width: 50%;
  height: 100%;
  text-align: center;
  line-height: 30px;
  color: #333;
}
.seleB{
  background: #0091e4;
  color: white;
}
</style>
