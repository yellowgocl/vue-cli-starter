<template>
  <div class="container">
    <slot name='content'>
      <img class='content' src="/static/images/loading.svg">
    </slot>
    <slot name='text'>
      <p class='text'>loading……</p>
    </slot>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'loading'
}
</script>
<style scoped>
.container{
  position: absolute;
  top: 0;
  z-index: 999;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.5);
  display:flex;
  align-items: center;
  justify-content:center;
}
.content{

}
</style>
