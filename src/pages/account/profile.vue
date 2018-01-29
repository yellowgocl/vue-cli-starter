<template>
	<div class="account-container-profile">
		<h2>account profile</h2>
    <h5>{{`name: ${userInfo.name}`}}</h5>
    <h5>{{`fullname: ${fullname}`}}</h5>
    <h5>{{`email: ${userInfo.email}`}}</h5>
    <h5 v-text='`encryp email: ${$options.filters.encrypEmail(userInfo.email)}`'></h5>
	</div>
</template>
<script>
import Vue from 'vue'
export default {
  computed: {
    fullname() {
      return Vue.filter('fullname')(this.userInfo.name)
    }
  }
}
</script>
<style scoped></style>
