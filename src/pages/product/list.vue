<template>
<div class="product-container-list">
	<h2>product list</h2>
  <ul>
    <li
      v-for='(o, i) in list'
      class='item'
      @click='toDetail(o)'>
      <p>{{`id: ${o.product_id}, name: ${o.name}`}}</p>
    </li>
  </ul>
</div>
</template>
<script>
import { product } from '@api/'
export default {
  created() {
    this.fetch()
  },
  data() {
    return {
      list: []
    }
  },
  methods: {
    toDetail(product) {
      this.$router.push({ path: `/product/${product.product_id}` })
    },
    fetch() {
      this.showLoading()
      product.seckill().then(data => {
        this.hideLoading()
        if (data.flag) {
          this.list = data.data.products
        }
      })
    }
  }
}
</script>
<style scoped>
  .item{
    background: #c0c0c0;
    padding: 10px;
    margin-bottom: 5px;
  }
</style>
