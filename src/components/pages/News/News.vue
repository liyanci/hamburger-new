<template>
	<div class="News">
		<div class="newsTop">
			<p>新闻中心</p>
		</div>
		<ul>
			<li v-for="(item,index) in list" @click="goDetail(item.path)">
				<div class="left">
					<p>{{item.name}}</p><span>{{item.time}}</span>
				</div>
				<div class="right">
					<img :src="item.imageUrl"/>
				</div>
			</li>
		</ul>
		<pageFooter></pageFooter>
	</div>
</template>

<script>
	import Vue from 'vue'
	import pageFooter from '../../commons/pageFooter'
	export default {
		name: 'News',
		components: {pageFooter},
		data() {
			return {
				list:[]
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
			goDetail(path){
				this.$router.push({ path:path, params: { userId: 123 }})
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
			ul{
				.h(700);
				li{
					box-sizing:border-box;
					.padding(29,13,9,25);
					.w(364);
					.h(87);
					display:flex;
					.left{
						height:100%;
						flex: 7;
						text-align:left;
						p{
							.fs(12);
							color:#333;
							text-align:left;
						}
						span{
							display:block;
							.fs(12);
							color:#999;
							text-align:left;
							.margin(5,0,0,0);
						}
					}
					.right{
						flex:3;
						img{
							.w(100);
							.h(60);
						}
					}
				}
				
			}
	
	}
</style>