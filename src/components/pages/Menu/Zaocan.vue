<template>
	<div class="Hanbao">
		<h3><img src="/static/images/zaoc/cate-3.png"/></h3>
		<div class="box">
			<!--<img src="../../../images/line-y.png"/>-->
			<ul class="box1">
				<li v-for="(item1,index) in hlist1" :key="index">
					<a >
						<img :src="item1.imgurl" />
						<span>{{item1.name}}</span>
						<strong>{{item1.titlt}}</strong>
					</a>
				</li>
			</ul>

			<ul class="box2">
				<li v-for="(item2,index) in hlist2" :key="index">
					<a>
						<img :src="item2.imgurl" />
						<span>{{item2.name}}</span>
						<strong>{{item2.titlt}}</strong>
					</a>
				</li>
			</ul>
			
			<ul class="box3">
				<li v-for="(item3,index) in hlist3" :key="index">
					<a >
						<img :src="item3.imgurl" />
						<span>{{item3.name}}</span>
						<strong>{{item3.titlt}}</strong>
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
		name: "Zaocan",
		components: {
			pageFooter
		},
		data() {
			return {
				hlist1: [],
				hlist2: [],
				hlist3: []
			}
		},
		methods: {
			getZaoclist() {
				console.log(this)
				this.$axios.get('/static/json/zaocan.json', {
						params: {}
					})
					.then((res) => {
						console.log(res)
					
						this.hlist1 = res.foods1
//						console.log(this.hlist1)
						this.hlist2 = res.foods2
						this.hlist3 = res.foods3
					})
					.catch((err) => {
						console.log(err)
					})
			}
		},
		mounted() {

		},
		created() {
			this.getZaoclist()
		}
	}
	
</script>

<style lang="less" scoped>
	@import '../../../styles/main.less';
	.Hanbao{
		.padding(0,0,0,0);
		position:relative;
		h3{
			.w(200);
			.h(50);
			/*text-algin:center;*/
			.margin(30,0,20,0);
			position:absolute;
			top:-2.1rem;
			left:3.5rem;
			img{
	            display:block;
				.w(120);
				.h(45);
			}
		}
		
		.box{
			overflow:hidden;
			.h(2800);
			.w(375);
			margin-top:135px;
			.box1{
				.h(1500);
				.w(355);
				.margin(24,10,24,10);
				/*.padding(30,0,0,0);*/
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
	           		
	              	a{
		              	display:block;
		              	.h(198);
		               	.w(166);
		               	img{
		               		.h(100);
		               		.w(170);
		                	}
		                span{
		               		font-size: 0.48rem;
						    font-weight: bold;
						    /*line-height: 150%;*/
						    display: block;
						    .padding(0,10,0,10);
						    color: #050505;
						    font-family: "STXihei";
		                	}
		                strong{
						    display: block;
		               		color: #050505;
		               		font-size: 0.3rem;
		               		/*.fs(16);*/
		               		text-transform: uppercase;
	    					font-family: "BlockBECondensed";
	    					font-weight: bold;
		                	}
	              	}
	               
			    }
			    
			    
			}
			/*2*/
			.box2{
				.h(750);
				.w(355);
				.margin(24,10,24,10);
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
	               .padding(5,5,5,5);
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
		               		.h(100);
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
		               		/*.fs(16);*/
		               		font-family: "BlockBECondensed";
	    					font-weight: bold;
		                	}
	              	}
	               
			    }
			       
			}
			/*3*/
			.box3{
				.h(500);
				.w(355);
				.margin(24,10,24,10);
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
	               .padding(5,5,5,5);
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
		               		.h(100);
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
			
	}	
	
</style>