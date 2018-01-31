# vue-cli starter

> vue cli starter example project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:3010
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## Directory Tree
    src
    ├── App.vue                     应用入口
    ├── api                         数据api
    │   ├── auth.js                   授权&用户模块
    │   ├── index.js                  总起文件
    │   └── product.js                产品模块
    ├── assets
    │   └── logo.png
    ├── components                  组件
    │   └── commom                    通用组件
    │       ├── loading.vue             全局loading
    │       └── toolbar.vue             顶部导航
    ├── filters                     过滤器
    │   ├── common.js                 通用模块
    │   ├── index.js                  总起文件
    │   └── user.js                   用户模块
    ├── main.js                     总入口
    ├── mixins                      混合器
    │   ├── common.js                 通用模块
    │   └── toolbar.js                顶部导航模块
    ├── pages                       页面
    │   ├── account                   用户模块
    │   │   ├── index.vue               用户模块首页容器
    │   │   ├── login.vue               登入页
    │   │   ├── profile.vue             信息页
    │   │   └── register.vue            注册页
    │   ├── animetest.vue
    │   ├── error.vue                 全局错误页
    │   ├── index.vue                 首页
    │   └── product                   产品模块
    │       ├── detail.vue              产品详情页
    │       ├── index.vue               产品模块首页容器
    │       └── list.vue                产品列表
    ├── router                      路由
    │   ├── account.js                用户模块
    │   ├── index.js                  总起文件
    │   └── product.js                产品模块
    ├── store                       全局状态管理
    │   ├── actions.js                全局actions
    │   ├── const.js                  全局常量定义
    │   ├── index.js                  总起文件
    │   ├── modules                   模块
    │   │   ├── auth.js                 用户模块
    │   │   ├── common.js               通用模块
    │   │   └── toolbar.js              顶部导航模块
    │   └── types                     状态类型
    │       ├── auth.js                 用户模块
    │       ├── common.js               通用模块
    │       ├── index.js                总起文件
    │       └── toolbar.js              顶部导航模块
    └── utils                       杂项
        ├── currency.js               汇率运算操作
        ├── index.js                  总起文件
        └── session.js                会话简易管理操作


For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
