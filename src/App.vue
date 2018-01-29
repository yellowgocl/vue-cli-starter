<template>
  <div id="app">
    <toolbar ></toolbar>
    <transition
      :name="transitionName">
      <router-view class='view'></router-view>
    </transition>
    <transition
      name='fade'>
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
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  },
  components: { toolbar, loading },
  name: 'app',
  created() {
    console.info('app start up')
  }
}
</script>

<style scoped>
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
