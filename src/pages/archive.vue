<template>
	<div class="page-archive">
		<h2>archive page</h2>
		<button @click='onback'>back</button>
		<div class="title">{{detail.name}}</div>
	</div>
</template>
<script>
import axios from 'axios'
import toolbarMixin from '@/mixins/toolbar'
export default {
	mixins:[toolbarMixin],
	created() {
		let id = this.$route.params.id
		this.fetchDetail(id)
		//console.info(this.$route.params.id)
	},
	data() {
		return {
			detail: {}
		}
	},
	methods: {
		onback() {
			this.$router.go(-1)
		},
		fetchDetail(pid) {
			axios.get('/api/index.php?route=interface/product/detail&productId='+pid)
			.then(res => {
				let data = res.data
				if (data.flag) {
					console.info(data.data)
					this.detail = data.data.product
				}
			})
		}
	}
}
</script>