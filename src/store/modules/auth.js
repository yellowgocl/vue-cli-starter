import MutationTypes from '@/store/types'
import { auth } from '@api/'
import Utils from '@/utils/'
const { AuthMutationTypes } = MutationTypes

//const defaultUserInfo = { name: 'visitor', email: '' }
const state = {
  isLogin: Utils.session.getAuthenticated(),
  info: Utils.session.getUserInfo()
}
/**
 * getters
 * @type {Object}
 * auth/{*} 键名作用域区分
 */
const getters = {
  'auth/isLogin': (state) => {
    return state.isLogin
  },
  'auth/info': (state, getters, rootState) => {
    return state.info
  }
}

/**
 * actions
 * @type {Object}
 * auth/{*} 键名作用域区分
 */
const actions = {
  'auth/login': ({ commit }) => {
    //异步执行api的登入方法，成功后写入session并通知对应状态变更
    return auth.login().then((data) => {
      commit(AuthMutationTypes.IS_LOGIN, data.flag)
      commit(AuthMutationTypes.INFO, data.info)
      Utils.session.setAuthenticated(data.flag)
      Utils.session.setUserInfo(data.info)
      return data
    })
  },
  'auth/logout': ({ commit }) => {
    //异步执行api的登出方法，成功后写入session并通知对应状态变更
    return auth.logout().then(data => {
      commit(AuthMutationTypes.IS_LOGIN, false)
      commit(AuthMutationTypes.INFO, data.info)
      Utils.session.clearAuthenticated()
      Utils.session.setUserInfo(data.info)
      return data
    })
  }
}

/**
 * mutations 改变对应状态
 * @type {Object}
 */
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
