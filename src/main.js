/**
 * 入口文件，全局注册操作
 */
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

//注册混合器
import ToolbarMixin from '@mixins/toolbar'
import CommonMixin from '@mixins/common'
Vue.mixin(ToolbarMixin)
Vue.mixin(CommonMixin)
//注册混合器 end

//注册全局过滤器
import filters from './filters'
Object.keys(filters).forEach((k) => {
  Object.keys(filters[k]).forEach((ck) => {
    Vue.filter(ck, filters[k][ck])
  })
})
//注册全局过滤器 end

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
