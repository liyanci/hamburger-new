<template>
	<div class="Menu">
		<div class="contain">
			<ul>
				<li @click="goPage1(item.path,index)" v-for="(item,index) in menulist" :key="index">
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
		name: "Menu",
		components: {
			pageFooter
		},

		//		props:['show'],
		data() {
			return {
				menulist: []
			}
		},
		methods: {
			goPage1(path,index) {
				this.$emit('open');
//				this.$router.push({
//					path:path,
//					params: {id:index
//					}
//				})
				this.$router.replace('menu-datail'+path)
			},

			getFoodlist() {
//				console.log(this)
				this.$axios.get('/static/json/menu.json', {
						params: {id: "id"}
					})
					.then((res) => {
						console.log(res)
//						this.menulist = this.menulist.concat(res.allmenu)
						this.menulist = res.allmenu
					})
					.catch((err) => {
						console.log(err)
					})
			}
		},
		mounted() {

		},
		created() {
			this.getFoodlist()
		}
	}
</script>

<style lang="less" scoped>
	@import '../../../styles/main.less';
	.Menu {
		.padding(60, 0, 0, 0);
		position:relative;
		.contain {
			.h(765);
			.w(355);
			.margin(0, 10, 24, 10);
			background: #fff;
			box-sizing:border-box;
			background: url("../../../images/line-y.png");
			background-position: top center;
			background-repeat: repeat-y;
			background-size: auto 50%;
			ul {
				.padding(0,0,0,5);
				box-sizing: border-box;
				/*.h(780);
				.w(355);
				.margin(24,
				10,
				24,
				10);
				background: #fff;
				box-sizing: border-box;*/
				li {
					float: left;
					.h(240);
					.w(168);
					.padding(35,
					5,
					5,
					5);
					box-sizing: border-box;
					
					background: url("../../../images/line-x.png");
					background-position: top center;
					background-repeat: repeat-x;
					background-size: 50% 0.13333rem;
					a {
						display: block;
						.h(198);
						.w(166);
						img {
							.h(146);
							.w(166);
						}
						span {
							font-size: 0.48rem;
							font-weight: bold;
							/*line-height: 150%;*/
							display: block;
							.padding(0,
							10,
							0,
							10);
							color: #8c542a;
						}
						strong {
							display: block;
							.h(16);
							.w(170);
							.lh(16);
							color: #8c542a;
							/*font-size: 0.4rem;*/
							.fs(16);
							font-family: "BlockBECondensed";
							/*.padding(0,10,0,10);*/
						}
					}
				}
			}
		}
	}
</style>