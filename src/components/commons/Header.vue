<template>
	<div class="Header" >
		<div class="head">
			<router-link to='/' id="top-logo"><span class="logo"></span></router-link>
			<a id="top-menu" @click="toggle" >
					<span ></span>
			</a>
			<NavList :show='isShow' @close='closeSlider'></NavList>
		</div>
	</div>
</template>

<script>
	import NavList from './NavList.vue'
	export default{
		name:'Header',
		components:{NavList},
		data(){
			return{
				isShow:false
			}
		},
		methods:{
			closeSlider(){
				this.isShow=false
			},
			toggle(){
				this.isShow=!this.isShow;
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
	.h(54.6);
	.w(375);
	background:#fff;
	z-index:999;
	position:fixed;
}
.head{
	position:fixed;
	.top(8.5);
	left:0;
	right:0;
	width: 100%;
	.h(54.6);
	background:@bg-color;
	#top-logo{
		z-index: 3;
		.w(60);
		.h(60);
		position:absolute;
		.top(-5);
		.left(15);
		display: inline-block;
		.logo{
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

</style>