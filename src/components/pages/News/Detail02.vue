<template>
	<div class="detail02">
		<div class="newsTop">
			<p>新闻中心</p>
		</div>
		
		<pageFooter></pageFooter>
	</div>
</template>

<script>
	import Vue from 'vue'
	import pageFooter from '../../commons/pageFooter'
	export default {
		name: 'detail02',
		components: {pageFooter},
		data() {
			return {
				list:[],
			}
		},
		methods:{getAbout() {
				this.$axios.get('/static/json/news.json', {
						params: {
						}
					})
					.then((res) => {
						console.log(res.data)
						this.list = res.data
					})
					.catch((err) => {
						console.log(err)
					})
				},
			goDetail(){
				
			}
		},
		created() {
			this.getAbout()
		}
		
		
	}
</script>
<style lang="less" scoped>
	@import '../../../styles/main.less';
	.News{
		.padding(63,0,0,0);
		.w(375);
		box-sizing:border-box;
			.newsTop{
				.h(37.5);
				.w(375);
				background:#2d2d2d;
				p{
					.h(37.5);
					.lh(37.5);
					.fs(20);
					color:#fff;
				}
			}
		
	
	}
</style>