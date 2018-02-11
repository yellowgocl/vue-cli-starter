import Vue from 'vue'
import store from '@store/'
import Router from 'vue-router'
import animetest from '@/pages/animetest'

import Index from '../pages/'
import ErrorPage from '../pages/error'
import AccountRoute from './account'
import ProductRoute from './product'

Vue.use(Router)

const router = {
  mode: 'history',//html5 history模式
  routes: [
    {
      //首页
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path:'/animetest',
      name:'animetest',
      component:animetest
    },
    {
      //自定义错误页
      path:'*',
      name:'error',
      component:ErrorPage
    },
    AccountRoute,//用户模块
    ProductRoute//产品模块
  ]
}
//定义全局路由对象
const module = new Router(router)
module.beforeEach((to, from, next) => {
  const isLogin = store.state.auth.isLogin
  if (to.name === 'account-login' && isLogin) {
    //如果目标路由地址是登录页并且用户授权状态为已登入的话，直接忽略目标地址并把路由地址改成首页，即已授权状态下尝试进入/account/login都会重定向到首页
    console.info('u r already authenticated, will be auto redirect to index page')
    next({
      path: '/'
    })
    return
  }
  if (to.name === 'product-index' || (to.name === 'product-detail' && !to.params.id)) {
    //如果是跳转到产品详情页但params.id没有值，则包装一个错误信息并重定向到自定义错误页
    const errorContent = JSON.stringify({ message: 'product id could not be empty', statusCode: 901 })
    next({ path: '*', replace: true, query: { error: errorContent } })
    return
  }
  if (to.matched.some(record => record.meta.requiredAuth)) {
    //如果目标路由地址配置的元数据参数requiredAuth为true的话，即代表该目标页面需要授权验证，先检测用户授权状态，如果为false则重定向到/account/login页，否则默认执行
    if (!isLogin) {
      next({
        path: '/account/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})
module.onError((e) => {

})
export default module
