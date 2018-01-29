<template>
<div class="product-container-detail">
	<h2>product detail</h2>
  <div>
    <select
      v-model='activeCurrency'
      @change='onchangeCurrency'>
      <option :value='v' v-for='(v, i) in currencyList'>{{v}}</option>
    </select>
  </div>
  <img :src="detail.image">
  <div><p>{{detail.name}}</p></div>
  <div>
    <p>price: {{detail.price}}</p>
    <p>local price: {{detail.price | currency(true)}}</p>
  </div>
</div>
</template>
<script>
import { product } from '@api/'
import Utils from '@utils'
import { reduce } from 'lodash'
const currency = Utils.currency
export default {
  data() {
    return {
      detail: {},
      activeCurrency: '',
      currencyList: reduce(currency.list, (r, v, k) => {
        r[k] = v.key
        return r
      }, [])
    }
  },
  watch: {
    activeCurrency(nv, ov) {
      this.setCurrency(nv, true)
    }
  },
  created() {
    this.fetch()
    this.activeCurrency = this.currency.key
  },
  methods: {
    onchangeCurrency(e) {
      console.info(e)
    },
    fetch() {
      this.showLoading()
      product.fetch(this.$route.params.id).then(data => {
        this.hideLoading()
        if (data.flag) {
          this.detail = data.data.product
        }
      })
    }
  }
}
</script>
<style scoped></style>
