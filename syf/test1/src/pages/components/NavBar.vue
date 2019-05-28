<template>
  <div class="session-nav g-header">
    <div><router-link :to="{ name: 'session' }">最近会话</router-link></div>
    <div><router-link :to="{ name: 'contacts' }">通讯录</router-link></div>
    <div><router-link :to="{ name: 'room' }">直播间</router-link></div>
    <div><router-link :to="{ name: 'general' }">设置</router-link></div>
  </div>
</template>

<script>

// import { Tab, TabItem, Loading, ViewBox, XHeader } from 'vux'
import { Tab, Tabs } from 'vant';
export default {
  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
  }, 
  data () {
    return {
    }
  },
  computed: {
    route () {
      return this.$store.getters.route
    }
  },
  methods: {
    changePage (page) {
      console.log()
    }
  }
}
</script>
<style lang="scss">
  .session-nav{
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
</style>
