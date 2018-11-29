<template>
	<div class="Yinliao">
		<h3><img src="/static/images/yinl/cate-6.png"/></h3>
		<div class="box">
			<!--<img src="../../../images/line-y.png"/>-->
			<ul>
				<li v-for="(item,index) in tlist" :key="index">
					<a>
						<img :src="item.imgurl" />
						<span>{{item.name}}</span>
						<strong>{{item.titlt}}</strong>
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
		name: "Yinliao",
		components: {
		pageFooter
		},
		data() {
			return {
				tlist: []
			}
		},
		methods: {
			getTlist() {
				console.log(this)
				this.$axios.get('/static/json/yinliao.json', {
						params: {}
					})
					.then((res) => {
						console.log(res)
					
						this.tlist = res.foods
					})
					.catch((err) => {
						console.log(err)
					})
			}
		},
		mounted() {

		},
		created() {
			this.getTlist()
		}
	}
	
</script>

<style lang="less" scoped>
	@import '../../../styles/main.less';
	.Yinliao{
		.padding(0,0,0,0);
		position:relative;
		h3{
			.w(200);
			.h(50);
			/*text-algin:center;*/
			.margin(20,0,20,0);
			position:absolute;
			top:-1.8rem;
			left:3.5rem;
			img{
	            display:block;
				.w(120);
				.h(40);
			}
		}
		.box{
			overflow:hidden;
			.h(680);
			.w(355);
			.margin(126,10,24,10);
			background: #fff;
			box-sizing:border-box;
			background:url("../../../images/line-y.png");
			background-position:top center;
			background-repeat:repeat-y;
            background-size: auto 50%;
			    li{
			       float:left;
	               .h(240);
	               .w(168);
	               .padding(35,5,5,5);
	               box-sizing:border-box;
	                background: url("../../../images/line-x.png");
				    background-position: bottom center;
				    background-repeat: repeat-x;
				    background-size: 50% 0.13333rem;
	              	a{
		              	display:block;
		              	.h(198);
		               	.w(166);
		               	img{
		               		.h(90);
		               		.w(170);
		                	}
		                span{
		               		font-size: 0.48rem;
						    font-weight: bold;
						    display: block;
						    .padding(0,10,0,10);
						    color: #050505;
						    font-family: "STXihei";
		                	}
		                strong{
						    display: block;
		                	text-transform: uppercase;
		               	    color: #050505;
		               		font-size: 0.3rem;
	    					font-family: "BlockBECondensed";
	    					font-weight: bold;		                	
	                	}
	              	}
	               
			    }
			}
		}
			
		
	
</style>