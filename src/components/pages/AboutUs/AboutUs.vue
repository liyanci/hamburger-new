<template>
	<div class="AboutUs">
		<div class="about">
			<div class="aboutTop">
				<p>关于我们</p>
			</div>
			<div class="aboutBottom">
				<ul v-for="(item,index) in list" :key='index'>
					<li>
						<img :src="item.imageUrl"/>
						<h3 class="aboutB-name">{{item.name}}</h3>
						<p class="aboutB-text">{{item.text}}</p>
					</li>
				</ul>
			</div>
			
		</div>
		<pageFooter></pageFooter>
	</div>
</template>

<script>
	import Vue from 'vue'
	import pageFooter from '../../commons/pageFooter'
	export default {
		name: 'AboutUs',
		components: {pageFooter},
		data() {
			return {
				name:'关于我们',
				list:[]
			}
		},
		methods: {
			getAbout() {
				this.$axios.get('/static/json/about.json', {
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
			}
		},
		created() {
			this.getAbout()
		}
		
	}
</script>
<style lang="less" scoped>
	@import '../../../styles/main.less';
	.AboutUs{
		
		.padding(63,0,0,0);
		.w(375);
		box-sizing:border-box;
		.about{
			.aboutTop{
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
			.aboutBottom{
				.h(1600);
				background: url(/static/images/aboutbg.jpg);
				background-repeat:no-repeat;
				background-size:100% auto;
				background-position:center bottom;
				ul{
					.padding(0,20,0,20);
					li{
						.margin(20,0,0,0);
						img{
							.w(270);
						}
						h3{
							.fs(22);
						}
						p{
							.fs(14);
							.margin(10,0,0,0);
							text-align:left;
						}
					}
				}
				
			}
		}
	}
	
	
</style>