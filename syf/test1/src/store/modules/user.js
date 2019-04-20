import { getThename,getadmin} from '@/utils/auth'

const user = {
  state: {
    Thename: getThename(),
    admin: getadmin(),
  },
  mutations: {
    SET_NAME: (state, Thename) => {
      state.Thename = Thename
    },
    SET_ADMIN: (state, admin) => {
      state.admin = admin
    },
  },

  actions: {
    SetThename({commit}, {Thename}) {
      commit('SET_NAME', Thename)
    },
    Setadmin({ commit }, { admin }) {
      commit('SET_ADMIN', admin)
    },      
  }
}

export default user
