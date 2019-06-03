<template>
  <div class='g-inherit m-article p-teamlist m-article2'>
    <div class="teamList-head">
      <van-icon name="arrow-left" color="#0091e4" @click="onClickBack" />
      <span>{{teamType=='advanced'?'高级群':'讨论组'}}</span>
      <div></div>
    </div>
    <div class="m-list">
      <van-cell-group>
        <van-cell v-for='team in teamList' :key='team.teamId' :title='team.name' is-link to='`/chat/team-${team.teamId}`'>
          <span class="icon icon-team-advanced" slot="icon"></span>
        </van-cell>
      </van-cell-group>
    </div>
    <div class='empty-hint' v-if='!teamList || teamList.length<1'>暂无内容</div>
  </div>
</template>

<script>
import { Cell, CellGroup,Dialog,Button,Icon } from 'vant';
export default {
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]:CellGroup,
    [Dialog.name]:Dialog,
    [Button.name]:Button,
    [Icon.name]:Icon,
  },  
  mounted () {
    this.$nextTick(() => {
      this.teamType = this.$route.params.teamType
    })
  },
  data () {
    return {
      teamType: 'normal' // normal or advanced
    }
  },
  computed: {
    teamList: function () {
      return this.$store.state.teamlist && this.$store.state.teamlist.filter(team => {
        return team.type === this.teamType && team.validToCurrentUser
      })
    },
    pageTitle: function () {
      return this.teamType === 'advanced' ? '高级群' : '讨论组'
    }
  },
  methods: {
    onClickBack () {
      window.history.go(-1)
    },
  }
}
</script>

<style lang="scss" scoped>
.m-article2{
  padding-top:0!important; 
}
  .p-teamlist {
    .empty-hint{
      position: absolute;
      left: 0;
      right: 0;
      margin: auto;
      text-align: center;
    }
    .teamList-head{
      width: 100%;
      height: 50px;
      background: #e5f4ff;
      color: #0091e4;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 16px;
      box-sizing: border-box;
      position: relative;
      z-index: 9999;
    }
  }
</style>

