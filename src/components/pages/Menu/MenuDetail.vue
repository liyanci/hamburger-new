<template>
	<div class="Menu">
			<router-view></router-view>
	</div>

</template>

<script>
	import Vue from 'vue'
	import Header from '../../commons/Header' //引入组件	
	import pageFooter from '../../commons/pageFooter'
	export default {
		name: "MenuDetail",
		components: {
			pageFooter
		},

		//		props:['show'],
		data() {
			return {
				menulist: []
			}
		},
		methods: {
			goPage1(path,index) {
				this.$emit('open');
			},

			getFoodlist() {
//				console.log(this)
				this.$axios.get('/static/json/menu.json', {
						params: {id: "id"}
					})
					.then((res) => {
						console.log(res)
//						this.menulist = this.menulist.concat(res.allmenu)
						this.menulist = res.allmenu
					})
					.catch((err) => {
						console.log(err)
					})
			}
		},
		mounted() {

		},
		created() {
			this.getFoodlist()
		}
	}
</script>

<style lang="less" scoped>
	@import '../../../styles/main.less';

</style>