<template>
	<div class='page-category'>
		<h2>category page</h2>
		<ul>
			<li v-for="(item, index) in items">
				<a @click="onclick(item, index, $event)">name: {{item.name}}, id: {{item.product_id}}</a>
			</li>
		</ul>
		<button @click='loadmore'>loadmore {{itemsCount}}</button>
	</div>
</template>
<script>
import axios from 'axios'
export default {
	created() {
		//let ins = axios.create()
		//'post', 'get', 'put', 'delete'
	},
	data() {
		return {
			items: null
		}
	},
	computed: {
		itemsCount() {
			return this.items ? this.items.length : 0
		}
	},
	methods: {
		onclick(item, index, event) {
			this.$router.push(`/archive/${item.product_id}`)
		},
		onresolve(res) {
			console.info(res.data)
		},
		loadmore() {
			//'/api/index.php?route=interface/product/detail'
			axios.get('/api/index.php?route=interface/search/product/seckill')
			.then((res) => {
				let data = res.data
				if (data.flag) {
					if (this.items === null || this.items === undefined) {
						this.items =  data.data.products
					} else {
						this.items.concat(data.data.products)
					}
					//this.items = this.items ? this.items.concat(data.data.products) : data.data.products
				}
			})
		}
	}
}
</script>
<style scoped>
	li { background: #cdcdcd; margin-bottom: 10px; padding: 5px; }
	a {
		color: black;
	}
</style>
