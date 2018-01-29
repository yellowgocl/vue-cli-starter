import MutationTypes from '@/store/types'
import { auth } from '@api/'
import Utils from '@/utils/'
const { AuthMutationTypes } = MutationTypes

const defaultUserInfo = { name: 'visitor', email: '' }
const state = {
  isLogin: Utils.session.getAuthenticated(),
  info: Utils.session.getUserInfo()
}

const getters = {
  'auth/isLogin': (state) => {
    return state.isLogin
  },
  'auth/info': (state, getters, rootState) => {
    return state.info
  }
}

const actions = {
  'auth/login': ({ commit }) => {
    //u can use commit to call mutation with any types when u defined, commit(ToolbarMutationTypes.LEFT, { left: 'test left' })
    return auth.login().then((data) => {
      commit(AuthMutationTypes.IS_LOGIN, data.flag)
      commit(AuthMutationTypes.INFO, data.info)
      Utils.session.setAuthenticated(data.flag)
      Utils.session.setUserInfo(data.info)
      return data
    })
  },
  'auth/logout': ({ commit }) => {
    return auth.logout().then(data => {
      commit(AuthMutationTypes.IS_LOGIN, false)
      commit(AuthMutationTypes.INFO, data.info)
      Utils.session.clearAuthenticated()
      Utils.session.setUserInfo(data.info)
      return data
    })
  }
}
const mutations = {
  [AuthMutationTypes.IS_LOGIN](state, val) {
    state.isLogin = val
  },
  [AuthMutationTypes.INFO](state, val) {
    state.info = val
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
