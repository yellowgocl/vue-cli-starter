<template>
	<div>
		
		<div class='block' @click='onchangeheadheight'>
		
		</div>
	</div>
	
</template>
<style scoped>
.block{
	background: yellow;
	width: 100px;
	height: 100px;


}
</style>
<script>
import anime from 'animejs'
import toolbar from '@components/commom/toolbar'

export default {
	components: { toolbar },
	data() {
		return {
			headHeight: 100
		}
	},
	methods: {
		onchangeheadheight(e) {
			console.info(this.$route)
			this.headHeight = 50 + Math.random() * 50
		}
	},
	created(){
		/*anime({
		  targets: 'div',
		  translateX: [
		    { value: 200, duration: 1200 },
		    { value: 0, duration: 800 }
		  ],
		  rotate: '1turn',
		  backgroundColor: '#FFF',
		  duration: 2000,
		  loop: true
		})*/
	}
}
</script>