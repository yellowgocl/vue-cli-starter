import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import toolbar from './modules/toolbar'
import auth from './modules/auth'
import common from './modules/common'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  modules: {
    auth,
    common,
    toolbar
  },
  strict: debug
})
