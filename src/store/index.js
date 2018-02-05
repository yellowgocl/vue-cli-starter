import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions' //注入全局actions

//区分模块，所有action和mutation在对应的模块内自行实现
import toolbar from './modules/toolbar'
import auth from './modules/auth'
import common from './modules/common'

//注册vuex
Vue.use(Vuex)

//debug标记
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  //注入模块
  modules: {
    auth,
    common,
    toolbar
  },
  strict: debug
})
