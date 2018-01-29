<template>
  <div>
    <h2 class='error'><span class='title'>status code: </span>{{this.error.statusCode}}</h2>
    <h2 class='error'><span class='title'>message: </span>{{this.error.message}}</h2>
  </div>
</template>
<script>
export default {
  data() {
    return {
      error: { message: 'page not found', statusCode: 404 }
    }
  },
  created() {
    if (this.$route.query.error) {
      this.error = JSON.parse(this.$route.query.error)
    }
  }
}
</script>
<style scoped>
  .error{
    color: red;
  }
  .title{
    color: grey;
  }
</style>
