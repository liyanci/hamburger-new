<template>
	<div class="Footer">
		<router-link to='/coupons'><img src="/static/images/menu-1.png"/><span>当季优惠</span></router-link>
		<router-link to='/menu'><img src="/static/images/menu-2.png"/><span>发现菜单</span></router-link>
		<router-link to='/login'><img src="/static/images/menu-3.png"/><span>会员有礼</span></router-link>
	</div>
</template>

<!--<router-link to='/' id="top-logo"><span class="logo"></span></router-link>-->

<script>
	import Vue from 'vue'
	export default{
		name:'Footer',
		components:{},
		data(){
			return{
				name:'我是footer',
				path:"/menu"
				
			}
		}
		
	}
</script>

<style lang="less" scoped>
@import '../../styles/main.less';
.Footer{
	position:fixed;
	.bottom(0);
	left:0;
	right:0;
	width: 100%;
	.h(63.5);
	background:#313131;
	display:flex;
	/*justify-content:space-between;*/
	.padding(15,40,0,20);
	a{
		/*flex:1;*/
		margin-left:40px;
		display:flex;
		flex-direction:column;
		align-items:center;
		img{
			.w(43);
			.h(33);
		}
		span{
			display:inline-block;
			.w(55);
			.fs(12);
			color:#fff;
		}
	}
}
</style>