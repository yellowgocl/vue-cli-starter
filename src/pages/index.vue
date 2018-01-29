<template>
	<div class="page-index">
		<h2>index page</h2>
    <div>
		  <router-link :to='{ path: "/account", meta: { redirect: "/acount/profile" } }'>profile</router-link>
      <button v-if='isLogin' @click='signout'>logout</button>
    </div>
    <div>
      <router-link :to='{ path: "/product/list/sec" }'>to product list</router-link>
    </div>
	</div>
</template>
<script>
export default {
  methods: {
    async signout() {
      this.showLoading()
      const { flag } = await this.logout()
      this.hideLoading()
    }
  }
}
</script>
