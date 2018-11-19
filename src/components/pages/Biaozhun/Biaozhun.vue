<template>
	<div class="Biaozhun">
		<ul >
			<li v-for="(item,index) in list" :key='index'>
				<img :src="item.imgUrl"/>
			</li>
		</ul>
		<pageFooter></pageFooter>
	</div>
</template>

<script>
	import Vue from 'vue'
	import pageFooter from '../../commons/pageFooter'
	export default {
		name: 'Biaozhun',
		components: {pageFooter},
		data() {
			return {
				list:[{imgUrl:'/static/images/biaozhun-1.png'},{imgUrl:'/static/images/biaozhun-2.png'},{imgUrl:'/static/images/biaozhun-3.png'},{imgUrl:'/static/images/biaozhun-4.png'},{imgUrl:'/static/images/biaozhun-5.png'}]
			}
		},
		methods: {
		
		},
		created() {
		}
		
	}
</script>
<style lang="less" scoped>
	@import '../../../styles/main.less';
	.Biaozhun{
		.padding(70,10,0,10);
		ul{
			li{
				.margin(20,0,10,0);
				img{
					.w(350);
					
				}
			}
		}
		
	}
	
	
</style>