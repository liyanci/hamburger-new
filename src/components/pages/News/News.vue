<template>
	<div class="News">
		<div class="newsTop">
			<p>新闻中心</p>
		</div>
		<ul>
			<li v-for="(item,index) in list" v-if="index>=snum&&index<bnum" @click="goDetail(item.path)">
				<div class="left">
					<p>{{item.name}}</p><span>{{item.time}}</span>
				</div>
				<div class="right">
					<img :src="item.imageUrl"/>
				</div>
			</li>
		</ul>
		<div class="pages">
			<button @click="back">上一页</button><span id="infoSize">4</span>条记录<span id="pageNum"><span id="current-page">1</span>/<span id="allpage">1</span></span>页<button @click="go">下一页</button>
		</div>
		<pageFooter></pageFooter>
	</div>
</template>

<script>
	import $ from 'jquery'
	import Vue from 'vue'
	import pageFooter from '../../commons/pageFooter'
	export default {
		name: 'News',
		components: {pageFooter},
		data() {
			return {
				list:[],
				bnum:4,
				snum:0
			}
		},
		methods:{
			go(){
				this.bnum=this.bnum+4
				this.snum=this.snum+4
				if(this.bnum>8){
					this.bnum=8
					this.snum=4
				}
			},
			back(){
				this.bnum=this.bnum-4
				this.snum=this.snum-4
				if(this.snum<0||this.bnum<4){
					this.snum=0
					this.bnum=4
				}
			},
			getAbout() {
				this.$axios.get('/static/json/news.json', {
						params: {}
					})
					.then((res) => {
//						console.log(res.data)
						this.list = res.data
						var infoSize=this.list.length;
						$('#infoSize').html(infoSize);
						var allpage=infoSize/4
						$('#allpage').html(allpage);
						var currentPge=this.bnum/4;
						if(currentPge<1){
							currentPge=1
						};
//						console.log(currentPge)
						$('#current-page').html(currentPge);
					})
					.catch((err) => {
						console.log(err)
					})
				},
			goDetail(path){
				this.$router.push({ path:path, params: {}})
			}
		},
		created() {
			this.getAbout()
		},
		updated(){
			this.getAbout()
		}
		
		
		
	}
</script>
<style lang="less" scoped>
	@import '../../../styles/main.less';
	.News{
		.padding(63,0,0,0);
		.w(375);
		box-sizing:border-box;
			.newsTop{
				.h(37.5);
				.w(375);
				background:#2d2d2d;
				p{
					.h(37.5);
					.lh(37.5);
					.fs(20);
					color:#fff;
				}
			}
			ul{
				.padding(0,0,50,0);
				li{
					box-sizing:border-box;
					.padding(29,13,9,25);
					.w(364);
					.h(87);
					display:flex;
					.left{
						height:100%;
						flex: 7;
						text-align:left;
						p{
							.fs(12);
							color:#333;
							text-align:left;
						}
						span{
							display:block;
							.fs(12);
							color:#999;
							text-align:left;
							.margin(5,0,0,0);
						}
					}
					.right{
						flex:3;
						img{
							.w(100);
							.h(60);
						}
					}
				}
				
			}
		.pages{
			.fs(14);
			.margin(0,0,20,0);
			button{
				background: #fff;
				.margin(0,5,0,5);
				border:1px solid #ccc;
			}
		}
	}
</style>