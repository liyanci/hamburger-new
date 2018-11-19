<template>
	<div class="HowMake">
		<div class="howMake">
			
				<ul v-for="(item,index) in list" :key='index'>
					<li >
						<img :src="item.imageUrl"/>
						<h3 class="aboutB-name">{{item.name}}</h3>
						<p class="aboutB-text">{{item.text}}</p>
					</li>
				</ul>
			
		</div>
		<pageFooter></pageFooter>
	</div>
</template>

<script>
	import Vue from 'vue'
	import pageFooter from '../../commons/pageFooter'
	export default {
		name: 'HowMake',
		components: {pageFooter},
		data() {
			return {
				name:'皇堡是怎样炼成的',
				list:[]
			}
		},
		methods: {
			getAbout() {
				this.$axios.get('/static/json/howMake.json', {
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
	.howMake{
		.padding(50,10,0,10);
		ul{
			li{
				h3{
					.fs(18);
					.margin(10,0,0,0);
				}
				p{
					.fs(12);
					.w(340);
					margin:10px auto 30px;
					text-align:left;
				}
				img{
					.w(355);
				}
			}
		}
	}
	
	
</style>