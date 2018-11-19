<template>
	<div class="pageFooter">
		<div class="word">
			<p class="txt1"><span>使用条款 |</span><span> 隐私权生命 |</span><span> 加入我们 |</span><span> 联系我们</span></p>
			<p class="txt2"><a>版权所有</a><a>© 2010-2016 汉堡王公司 © 2010-2016 Burger King Corporation.  All rights reserved.</a></p>
		</div>
		<a @click="goTop" class="goTop"></a>
	</div>
</template>

<script>
	export default{
		name:'pageFooter',
		components:{},
		data(){
			return{
				name:'我是pageFooter'
			}
		},
		methods:{
			goTop(){
//				document.documentElement.scrollTop = document.body.scrollTop = 0;
				var timer=setInterval(function(){
           			var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
           			var ispeed=Math.floor(-scrollTop/8);
           			if(scrollTop==0){
               			clearInterval(timer);
           			}
           			document.documentElement.scrollTop=document.body.scrollTop=scrollTop+ispeed;
       			},30)
			}
		}
		
	}
</script>

<style lang="less" scoped>
@import '../../styles/main.less';
.pageFooter{
	.h(190);
	background:#2d2d2d;
	.w(375);
	.margin(0,0,95,0);
	position:relative;
	.goTop{
		display:block;
		position:absolute;
		left:50%;
		margin-left:-3.85rem;
		bottom:0;
		.w(284);
		.h(64);
		background:url('/static/images/gototop.png');
		background-size:cover;
	}
	.word{
		span{
			.fs(12);
			-webkit-transform-origin-x: 0;
    		-webkit-transform: scale(0.90);
			color:#fff;
			
		}
		a{
			display:block;
			.fs(12);
			-webkit-transform-origin-x: 0;
    		-webkit-transform: scale(0.90);
			color:#fff;
		}
	}
}
</style>