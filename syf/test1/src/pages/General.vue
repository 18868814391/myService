<template>
  <div class="g-inherit m-main p-general" v-if="myInfo.account">
    <van-cell-group class="u-card">
      <van-cell :title="myInfo.nick" :inline-desc="'帐号: ' + myInfo.account">
        <img class="icon" slot="icon" width="20" :src="myInfo.avatar">
      </van-cell>
    </van-cell-group>
    <van-cell-group class="u-card">
      <van-cell title="昵称">{{myInfo.nick || ''}}</van-cell>
      <van-cell title="性别">{{myInfo.gender}}</van-cell>
      <van-cell title="生日">{{myInfo.birth}}</van-cell>
      <van-cell title="手机">{{myInfo.tel}}</van-cell>
      <van-cell title="邮箱">{{myInfo.email}}</van-cell>
      <van-cell title="签名">{{myInfo.sign}}</van-cell>
    </van-cell-group>
    <div>
      <van-button type="warn"  @click.native="logout">注销</van-button>
    </div>
  </div>
</template>

<script>
import { Cell, CellGroup,Dialog,Button } from 'vant';
export default {
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]:CellGroup,
    [Dialog.name]:Dialog,
    [Button.name]:Button,
  },
  computed: {
    myInfo () {
      return this.$store.state.myInfo
    }
  },
  created(){
    console.log(123,this.$store.state.myInfo)
  },
  methods: {
    logout () {
      let that = this
      Dialog.confirm({
        title: '提示',
        message: '确定要注销帐号？'
      }).then(() => {
        that.$store.dispatch('logout')
      }).catch(() => {
        // on cancel
      });      

    }
  }
}
</script>
