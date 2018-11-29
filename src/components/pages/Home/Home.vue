<template>
	<div class="Home">
		<div class="banner">
			<div class="swiper-container">
				<!-- Additional required wrapper -->
				<div class="swiper-wrapper">
					<!-- Slides -->
					<div class="swiper-slide" v-for='(item ,index) in list ' :key='index'>
						<img :src="item.data.imageUrl" alt="">
					</div>
				</div>
				<!-- If we need pagination -->
				<div class="swiper-pagination"></div>
 

			</div>
		</div>
		<div class="contain">
			<div class="findWhere">
				<img src="http://bkchina.cn/website/mobile/images/main-map.jpg"/>
				<div class="map-search">
					<input type="text" name="" id="" value="" placeholder="请输入地址" class="find-city"/>
					<input type="button" name="" id="" value="" @click="goMap" class="map-search-btn"/>
				</div>
				
			</div>
			<div class="howMake" v-for='(item,index) in list2' :key='index'>
				<img :src="item" alt=""/>
				<a @click="godetail(index)">查看详情</a>
			</div>
			<div class="main-last">
				<img src="/static/images/main-4.jpg" alt="" />
				<div class="main-last-bottom">
						<div class="small-img">
							<a class="two-img"><img src="/static/images/weibo.png"/></a >
							<a class="two-img"><img src="/static/images/weixin.png"/></a>
						</div>
						<p>关注官方微博微信，有机会赢取好礼及了解更多优惠信息</p>
				</div>
			</div>
		</div>
		<pageFooter></pageFooter>
	</div>
</template>

<script>
	import Swiper from 'swiper';
	import Vue from 'vue'
	import pageFooter from '../../commons/pageFooter'
	export default {
		name: 'Home',
		components: {pageFooter},
		data() {
			return {
				list: [],
				list2:['/static/images/main-3.jpg','/static/images/huangguanbiaozhun2018wap222.jpg']
			}
		},
		methods: {
			godetail(index){
				if(index==0){
					this.$router.push({path:'/HowMake'})
				}
				else{
					this.$router.push({path:'/Biaozhun'})
				}
			},
			goMap(){
				this.$router.push({path:'/Map'})
			},
			getBanner() {
				console.log(this)
				this.$axios.get('/static/json/banner.json', {
						params: {
						}
					})
					.then((res) => {
						console.log(res.alldata[0].data.imageUrl)
						this.list = res.alldata
						console.log(this.list)
						Vue.nextTick(() => {
							var mySwiper = new Swiper('.swiper-container', {
								loop: true,
								autoplay: true
							});
						})
					})
					.catch((err) => {
						console.log(err)
					})
			}
		},
		mounted() {

		},
		created() {
			this.getBanner()
		},
		destroyed() {
			// this.mySwiper=null
			delete this.mySwiper
		}
	}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
	@import '../../../styles/main.less';
	@import '../../../../node_modules/swiper/dist/css/swiper.css';
	.Home {
		position:relative;
		.padding(60,0,0,0);
		.banner{
			.h(356);
			.swiper-slide {
				.w(375);
				.h(356);
				img {
					width: 100%;
					height: 100%;
				}
			}
		}
		.contain{
			margin: 0;
			.findWhere{
				.h(226.5);
				.w(375);
				position: relative;
				img{
					.h(226.5);
					.w(375);
				}
				.map-search{
					background: @bg-color;
					position: absolute;
					.top(130);
					left:50%;
					.h(28.5);
					.w(240);
					margin-left:-3.2rem;
					color:#666;
					border: 1px solid @ft-color;
					.find-city{
						box-sizing: border-box;
						.padding(0,0,0,5);
						float: left;
						background: #fff;
						.h(28.5);
						.w(213);
						.fs(16);
					}
					.find-city::-webkit-input-placeholder{
            color:@ft-color;
        	}
					.map-search-btn{
						.w(17.5);
						.h(21.4);
						background: url('http://bkchina.cn/website/mobile/images/main-search-btn.jpg');
						background-size: 100% auto;
						float:left;
						.margin(5,0,0,5);
					}
				}
			}
			.howMake{
				.w(375);
				.h(283.5);
				position: relative;
				img{
					.w(375);
					.h(283.5);
				}
				a{
					position: absolute;
					left: 50%;
					margin-left: -1.82rem;
					top:5.5rem;
					.w(136.5);
					.h(37.5);
					background: url('/static/images/mainbtn.png');
					background-size: cover;
					text-align: center;
					.lh(37.5);
					.fs(16);
					font-weight: bold;
					color: #fff;
				}
			}
			.main-last{
				position:relative;
				img{
					.w(375);
				}
				.main-last-bottom{
					position: absolute;
					.w(375);
					.top(165);
					.two-img{
						display: inline-block;
						.margin(0,25,0,25);
						img{
							.w(61);
							.h(72);
							
						}
					}
					p{
						.margin(10,0,0,0);
						.fs(12);
						color: #fff;
					}
				}
				
			}
		}
	}
	
	
</style>