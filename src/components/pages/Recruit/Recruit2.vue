<template>
	<div class="News" @touchmove="gopage('/Recruit3')">
		<audio src="http://source.cloudin9.com/hcm/media/burgerking/new.mp3" autoplay loop></audio>
		<div class="contain">
			<div class="animated slideInLeft text1">
				我就是你一直
			</div>
			<div class="animated flipInX delay-1s text2">
				寻找阳光和活力
			</div>
			<div class="animated slideInRight delay-2s text3">
				我就是你想要的
			</div>
			<div class="animated slideInLeft delay-3s text4">
				<span>志同道合<br />年轻有爱</span>
			</div>
			
		</div>
		<div class="animated slideInRight delay-4s zp-img">
				<img src="/static/images/zhaopin2-1.png"/>
		</div>
		<div class="animated slideInLeft delay-5s zp-img2">
			<img src="/static/images/zhaopin2-2.png"/>
		</div>
		<div class="animated tada delay-5s huangguan ">
			<img src="/static/images/huanguan.png"/>
		</div>
		<i class="fa fa-chevron-up" @click="gopage('/Recruit3')" aria-hidden="true"></i>
	</div>
</template>

<script>
	import Vue from 'vue'
	import pageFooter from '../../commons/pageFooter'
	export default {
		name: 'Recruit',
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
			.h(270);
			.w(400);
			text-align:left;
			.margin(0,0,0,40);
			.text1{
				.margin(10,0,10,0);
				color:#fff;
				text-align:left;
				.fs(20);
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
				.fs(20);
				color:#fff;
				font-weight:bold;
			}
			.text4{
				
				.margin(10,0,10,0);
				.fs(20);
				color:#fff;
				font-weight:bold;
				span{
					.fs(28);
					
				}
			}
			
		}
		.zp-img{
			.w(150);
			float:right;
			text-align:left;
			.padding(0,0,30,0);
				img{
					.w(112);
					.h(226);
				}
			}
		.zp-img2{
			.w(230);
			position: absolute;
			.top(270);
			.right(100);
			img{
				.w(134);
				
			}
		}
			
			.huangguan{
				/*transform: rotate(20deg);*/
				position: absolute;
				.top(40);
				.left(230);
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