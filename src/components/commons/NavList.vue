<template>
	<div class="navList">
		<!--<h1 class="animated slideInDown">Example</h1>-->
		<transition 
		  enter-active-class='animated slideInDown'
		  leave-active-class='animated fadeOut'
        >
        	<ul v-show="show">
        		<li @click="goPage(item.path)" v-for='(item,index) in list' :key='index'>{{item.title}}</li>        		
        	</ul>
       </transition>
	</div>
</template>

<script>
	export default{
		name:'NavList',
		components:{},
		props:['show'],
		data(){
			return{
				list:[
				{title:'菜单',path:'/menu',name:'small-menu'},
				{title:'优惠券',path:'/discount',name:'discount'},
				{title:'汉堡王餐厅',path:'/',name:'placemat'},
				{title:'关于汉堡王',path:'/AboutUs',name:'AboutUs'},
				{title:'皇堡是怎样炼成的',path:'/howMake',name:'howMake'},
//				{title:'招聘',path:'/recruit',name:'recruit'},
//				{title:'加盟汉堡王',path:'/join',name:'join'},
				{title:'新闻中心',path:'/News',name:'News'}
				]
			}
		},
		methods:{
			goPage(path){
				this.$emit('close');
				this.$router.push({path:path,params:{id:"heheh"}})
				console.log(this.$route);
			}
		}
	}
</script>

<style lang="less" scoped>
@import '../../styles/main.less';
.navList{
	position:absolute;
	.top(0);
	z-index:2;
	.margin(55,0,0,0);
	.w(375);
	ul{
		width: 100%;
		.h(468.5);
		background:#fff;
		z-index:100;
				li{
			.padding(0,0,0,15);
			.h(55);
			.lh(55);
			border-bottom:0.05rem solid #6f1924;
			color: @ft-color;
			font-weight:bold;
			.fs(26);
			text-align:left;
		}
	}
	
}
</style>