import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'
import getters from './getters'

Vue.use(Vuex)

import mutations from './mutations'
import actions from './actions'
import state from './state'

const store = new Vuex.Store({
  modules: {
    app,
    user
  },
  getters,
  // 内存数据状态，UI可通过this.$store.state.* 获得数据
  state,
  // 唯一拥有更改内存数据的接口，不可进行异步操作
  mutations,
  // 与mutation通讯，ui层写入内存数据的接口，可异步操作
  actions,
  plugins: []  
})

export default store
