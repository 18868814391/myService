import { getThename,getadmin} from '@/utils/auth'

const user = {
  state: {
    Thename: getThename(),
    admin: getadmin(),
    showTabNav:true,
  },
  mutations: {
    SET_NAME: (state, Thename) => {
      state.Thename = Thename
    },
    SET_ADMIN: (state, admin) => {
      state.admin = admin
    },
    SET_showTabNav: (state, showTabNav) => {
      state.showTabNav = showTabNav
    },
  },

  actions: {
    SetThename({commit}, {Thename}) {
      commit('SET_NAME', Thename)
    },
    Setadmin({ commit }, { admin }) {
      commit('SET_ADMIN', admin)
    },
    SetTabNav({commit},{shownav}){
      commit('SET_showTabNav', shownav)
    } 
  }
}

export default user
