<template>
	<div class="Header" >
		<div class="head">
			<router-link to='/' id="top-logo" @close='closeSlider'><span class="logo"></span></router-link>
			<a id="top-menu" @click="toggle" >
					<span></span>
			</a>
			<NavList v-show='isShow' @close='closeSlider' @openMask='openM'></NavList>
		</div>
		<div class="mask"  v-show="isTrue" @click="closeMask" >
			<div class="box">
				<h2>汉堡王加盟管理</h2>
				<p>官方微信</p>
				<img src="/static/images/ewm1.png"/>
			</div>
		</div>
	</div>
</template>
<script>
	import NavList from './NavList.vue'
	import $ from 'jquery'
	export default{
		name:'Header',
		components:{NavList},
		data(){
			return{
				isShow:false,
				isTrue:false
			}
		},
		methods:{
//			open(){
//				this.isTrue=true
//			},
			closeMask(){
				this.isTrue=false
			},
			closeSlider(){
				this.isShow=false
				$('#top-menu').attr("style","background:#fff")
				$('#top-menu span').attr("style","border-top: 7px solid @bg-color")
				$('#top-menu span').attr("style","border-bottom: 7px solid @bg-color")
			},
			openM(){
				this.isTrue=true
//				console.log(222)
			},
			toggle(){
				this.isShow=!this.isShow;
				if(this.isShow==true){
					$('#top-menu').attr("style","background:url('/static/images/close.png') no-repeat -0.37rem -0.2rem ")
					$('#top-menu span').attr("style","background:#fff")
					$('#top-menu span').attr("style","border:none")
				}
				else{
					$('#top-menu').attr("style","background:#fff")
					$('#top-menu span').attr("style","border-top: 7px solid @bg-color")
					$('#top-menu span').attr("style","border-bottom: 7px solid @bg-color")
				}
//				var box=document.getElementsByClassName('Header')[0];
//				console.log(box);
//				if(box.className=='high'){
//					box.removeAttribute('high');
//				}
//				box.classList.add('high');
			}
		},
	}
</script>

<style lang="less" scoped>
@import '../../styles/main.less';
.Header{
	.top(0);
	.h(54.6);
	.w(375);
	background:#fff;
	z-index:999;
	position:fixed;
}
.head{
	position:fixed;
	z-index:1;
	.top(8.5);
	left:0;
	right:0;
	width: 100%;
	.h(54.6);
	background:@bg-color;
	#top-logo{
		z-index:101;
		.w(60);
		.h(60);
		position:absolute;
		.top(-5);
		.left(15);
		display: inline-block;
		.logo{
			position: relative;
			display: inline-block;
			border-radius: 60%;
			.w(60);
			.h(60);
			border: 3px solid @bg-color;
			background-image:url('http://bkchina.cn/website/mobile/images/logo.png');
			background-size: 66px 66px;
			background-repeat: no-repeat;
		}
	}
	#top-menu{
			.w(38);
			.h(38);
			background: #fff;
			position:absolute;
			.top(8);
			.right(15);
			
			span{
				display: inline-block;
				.margin(0,0,5,0);
				.w(39);
				.h(7.5);
				border-top: 7px solid @bg-color;
				border-bottom: 7px solid @bg-color;
			}
		
		
	}
}
.mask{
		position:fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index:1000000;
		background:rgba(0,0,0,.5);
		.box{
			.w(300);
			.h(300);
			position: absolute;
			left: 50%;
			top: 50%;
			.margin(-150,0,0,-150);
			h2{
				.fs(24);
				color: #fff;
				font-weight: bold;
				
			}
			p{
				.fs(16);
				color: #fff;
				font-weight: bold;
				.margin(10,0,10,0)
			}
			img{
				.w(150);
				.h(150);
			}
		}
	}
</style>