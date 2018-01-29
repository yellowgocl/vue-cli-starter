<template>
	<div class="container" :style='[{height: height + "px"}]' id='toolbar'>
		<div class="left flex-1" @click='onPressLeft'>{{storeLeft}}</div>
		<div class="center flex-1" @click='onPressCenter'>{{storeCenter}}</div>
		<div class="right flex-1">{{storeRight}}</div>
	</div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
	name:'toolbar',
	props: {
		height: {
			type: Number,
      default: 50,
		}
	},
	computed: {
		...mapGetters({
			storeLeft: 'toolbar/left',
			storeCenter: 'toolbar/center',
			storeRight: 'toolbar/right'
		})
	},
	data() {
		return {
			flag: false
		}
	},
	created() {
		console.info(' head created')
	},
  methods: {
    onPressLeft(e) {
      if (this.$route.name !== 'index' && this.$route.name !== 'error') {
        this.$router.go(-1)
      } else {
        this.$router.push({
          path: '/',
          replace: true
        })
      }
    },
    onPressCenter(e) {
      this.$router.push({
        path: '/',
        replace: true
      })
    }
  }
}
</script>
<style scoped>
	.container{
		width: 100%;
		background: #f00;
		height: 44px;
		font-size: 2rem;
		color: #fff;
		display: flex;
	}
	.flex-1{
		flex: 1;
		margin-left: 10px;
		margin-right: 10px;
	}
	.left{
		background: red;
		color:#fff;
	}.
	.center{

	}
</style>
