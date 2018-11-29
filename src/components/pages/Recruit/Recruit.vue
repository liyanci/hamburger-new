<template>
	
	<div class="News" @touchmove="gopage('/Recruit2')">
		<div class="contain" >
			<div class="animated slideInLeft text1">
				你够胆
			</div>
			<div class="animated flipInX delay-1s text2">
				我就够“未”
			</div>
			<div class="animated slideInRight delay-2s text3">
				你有梦想，我有平台
			</div>
			<div class="animated slideInLeft delay-3s text4">
				选择<span>汉堡王</span>，选择你的未来！
			</div>
			
		</div>
		<div class="animated slideInLeft delay-4s zp-img">
			<img src="/static/images/zhaopin01.png"/>
		</div>
		<div class="animated slideInRight zp-img2">
			<img src="/static/images/zhaopin-open.png"/>
		</div>
		<div class="animated tada delay-5s huangguan ">
			<img src="/static/images/huanguan.png"/>
		</div>
		<i class="fa fa-chevron-up" @click="gopage('/Recruit2')"  aria-hidden="true"></i>
		<audio src="http://source.cloudin9.com/hcm/media/burgerking/new.mp3" autoplay loop></audio>
	</div>
</template>

<script type="text/javascript">
	document.addEventListener('touchmove', function (event) {
	event.preventDefault();
	},  { passive: false });
</script>
<script>
	
	import Vue from 'vue'
	import pageFooter from '../../commons/pageFooter'
	export default {
		name: 'Recruit2',
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
			.h(230);
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
			text-align:left;
			.padding(0,0,10,0);
			.w(260);
				img{
					.w(247);
					.h(257);
				}
			}
			.zp-img2{
				position: absolute;
				.top(430);
				.right(5);
				img{
					.w(200);
					
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