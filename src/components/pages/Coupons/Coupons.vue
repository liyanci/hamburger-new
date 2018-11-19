<template>
	<div class="Coupons">
		<div class="contain">
			<h3><img src="../../../../static/images/coupons/line-x-1 .jpg"/></h3>
			<ul>
				<li v-for="(item,index) in clist" :key="index">
					<img :src="item"/>
					<a href="#">
						立即领取
					</a>
				</li>
			</ul>

		</div>
		<pageFooter></pageFooter>
	</div>

</template>

<script>
	import Vue from 'vue'
	import Header from '../../commons/Header' //引入组件	
	import pageFooter from '../../commons/pageFooter'
	export default {
		name: "Coupons",
		components: {
			pageFooter
		},

		//		props:['show'],
		data() {
			return {
				clist: [
				"/static/images/coupons/quan01.jpg",
				"/static/images/coupons/quan02.jpg",
				"/static/images/coupons/quan03.jpg",
				"/static/images/coupons/quan04.jpg",
				"/static/images/coupons/quan05.jpg",
				"/static/images/coupons/quan06.jpg",
				"/static/images/coupons/quan07.jpg",
				"/static/images/coupons/quan08.jpg",
				"/static/images/coupons/quan09.jpg",
				"/static/images/coupons/quan10.jpg",
				"/static/images/coupons/quan11.jpg",
				"/static/images/coupons/quan12.jpg",
				"/static/images/coupons/quan13.jpg",
				"/static/images/coupons/quan14.jpg",
				"/static/images/coupons/quanB06_s.jpg",
				"/static/images/coupons/quanB07_s.jpg"
				]
			}
		}
	}
</script>

<style lang="less" scoped>
	@import '../../../styles/main.less';
	.Coupons {
		.margin(60, 0, 0, 0);
		.contain {
			.h(1440);
			.w(375);
			background: #fff;
			box-sizing:border-box;
			.padding(28,0,0,0);
			h3{
				.margin(0,5,20,3);
				.h(16);
				.w(365);
				img{
					width: 100%;
					.h(6);
				}
			}
			ul {
				.h(1504);
				.w(365);
				.padding(0,5,0,5);
				box-sizing: border-box;
			
				li {
					.h(167);
					float: left;
				    width: 50%;
				    .padding(20,5,50,5);
				    box-sizing: border-box;
				    text-align: center;
				    position: relative;
					img{
						width: 100%;
    					margin-bottom: 0.30667rem;
    					text-align: center;
					}
					a{
						position: absolute;
						.bottom(-10);
						left: 28%;
						.w(73);
						.h(21);
						border: 1px solid #ef8820;
					    display: inline-block;
					    text-align: center;
					    line-height: 0.57333rem;
					    color: #ef8820;
					    font-size: 0.4rem;
						
					}
					
				}
			}
		}
	}
</style>