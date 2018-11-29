<template>
	<div class="News" @touchmove="gopage('/Recruit2')">
		<audio src="http://source.cloudin9.com/hcm/media/burgerking/new.mp3" autoplay loop></audio>
		<div class="contain">
			<div class="animated slideInLeft text1">
				不要犹豫
			</div>
			<div class="animated flipInX delay-1s text2">
				从餐厅服务员
			</div>
			<div class="animated slideInRight delay-2s text3">
				到运营督导
			</div>
			<div class="animated slideInLeft delay-3s text4">
				汉堡王给你无限可能
			</div>
			
		</div>
		<div class="animated slideInLeft delay-5s zp-img2">
			<img src="/static/images/zhaopin4-1.png"/>
		</div>
		<div class="animated slideInLeft delay-4s zp-img">
			<img src="/static/images/zhaopin4-2.png"/>
		</div>
		<div class="animated tada delay-4s huangguan ">
			<img src="/static/images/huanguan.png"/>
		</div>
		<i class="fa fa-chevron-up" @click="gopage('/Recruit')" aria-hidden="true"></i>
	</div>
</template>

<script>
	import Vue from 'vue'
	
	import pageFooter from '../../commons/pageFooter'
	export default {
		name: 'Recruit3',
		components: {},
		data() {
			return {
				list:[]
			}
		},
		methods:{
			gopage(path){
				this.$router.push({path:path})
			}
		},
		created() {
		}
		
		
	}
</script>
<style lang="less" scoped>
	@import '../../../styles/main.less';
	.News{
		.margin(60,0,0,0);
		.padding(25,0,0,20);
		background:url('/static/images/zhaopin-bg.jpg');
		background-size:100% 100%;
		position:relative;
		/*.w(360);*/
		overflow:hidden;
		.contain{
			transform: rotate(-10deg);
			.h(500);
			.w(400);
			text-align:left;
			.margin(0,0,0,40);
			.text1{
				.margin(10,0,10,0);
				color:#fff;
				text-align:left;
				.fs(28);
				font-weight:bold;
			}
			.text2{
				.margin(10,0,10,0);
				.fs(28);
				color:#fff;
				font-weight:bold;
				
			}
			.text3{
				.margin(10,0,10,0);
				.fs(28);
				color:#fff;
				font-weight:bold;
			}
			.text4{
				
				.margin(10,0,10,0);
				.fs(28);
				color:#fff;
				font-weight:bold;
				span{
					.fs(28);
					
				}
			}
			
		}
		.zp-img{
			position:absolute;
			.top(350);
			.left(10);
			.w(200);
				img{
					.w(150);
				}
			}
			.zp-img2{
				position: absolute;
				.top(230);
				.right(-20);
				.w(300);
				img{
					.w(100);
					
				}
			}
			
			.huangguan{
				/*transform: rotate(20deg);*/
				position: absolute;
				.top(100);
				.left(250);
				img{
					.w(60);
					
				}
			}
			.fa-chevron-up{
				position: fixed;
				.left(162.5);
				.bottom(80);
				color:#fff;
			}
	}
</style>