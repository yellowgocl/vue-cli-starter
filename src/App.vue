<template>
  <!--总起路由后所有页面，包括首页由router/index 来定义 -->
  <div id="app">
    <!-- 全局toolbar组件，使用store/modules/toolbar来操作 -->
    <toolbar ></toolbar>
    <transition
      :name="transitionName">
      <router-view class='view'></router-view>
    </transition>
    <transition
      name='fade'>
      <!-- 全局loading 使用store/modules/common的isLoading来操作 -->
      <loading v-if='isLoading'></loading>
    </transition>
  </div>
</template>

<script>
import toolbar from '@components/commom/toolbar'
import loading from '@components/commom/loading'
import { mapGetters } from 'vuex'
export default {
  data(){
    return {
      transitionName: 'slide-left'
    }
  },
  computed: {
    ...mapGetters({
      isLoading: 'common/isLoading'
    })
  },
  watch: {
    //这里只演示watch的基本用法，监听路由对象的改变来定义切换动画，但watch可以用来做其他更多的事情，详细参考vue官网文档
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  },
  components: { toolbar, loading },//注册组件
  name: 'app',
  created() {
    //hello
    console.info('app start up')
  }
}
</script>

<style scoped>
/*这是一堆混乱的css，不过特别注明一下scoped是让当前css区块拥有作用域*/
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.view {
  position: absolute;
  transition: all .5s cubic-bezier(.55,0,.1,1);
}
.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(30px, 0);
  transform: translate(30px, 0);
}
.slide-left-leave-active, .slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-30px, 0);
  transform: translate(-30px, 0);
}
</style>
