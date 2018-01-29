<template>
<div class="account-container-login">
	<h2>account login</h2>
  <button @click='signin'>马上授权</button>
</div>
</template>
<script>
export default {
  methods: {
    signin() {
      this.showLoading()
      this.login().then(data => {
        this.hideLoading()
        if (data.flag) {
          const { redirect } = this.$route.query
          this.$router.replace({
            path: redirect ? redirect : '/'
          })
        }
      })
    }
  }
}
</script>
<style scoped></style>
