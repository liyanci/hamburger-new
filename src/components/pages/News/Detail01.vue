<template>
	<div class="detail01">
		<div class="newsTop">
			<p>新闻中心</p><span class="back"><返回</span>
		</div>
		<div class="contain">
			<h1>有意加大在华投资 汉堡王中国董事会主席来中国看市场</h1>
			<p>2018年06月12日</p>
			<div class="contain-bottom">
				<p>2018年5月，汉堡王中国董事会主席可汗（Korhan Kurdoglu）先生抵达中国并展开了一场为期三天的拜访活动。在这次的行程中，可汗（Korhan Kurdoglu）先生先后与中国政界、商界和新兴互联网产业代表接触、会谈，并表达了看好中国市场发展，将进一步加大在华投资的意愿。</p>
				<p><img src="/static/images/detai01.jpg"/></p>
				<p>国家市场监督管理总局国际合作司副司长韩建平接见汉堡王中国董事会主席一行</p>
				<p>在为期3天的行程中，可汗先生分别拜访了国家市场监督管理总局国际合作司副司长韩建平、中国国际贸易促进委员会发展研究部副部长徐梁，黄浦区区委常委、副区长陈卓夫，上海国际商会陈建荣会长、饿了么首席运营官康嘉等，并就企业发展和品牌提升等话题进行深度探讨。</p>
				<p><img src="/static/images/detai02.jpg"/></p>
				<p></p>
			</div>
		</div>
		<pageFooter></pageFooter>
	</div>
</template>
<script>
	import Vue from 'vue'
	import pageFooter from '../../commons/pageFooter'
	export default {
		name: 'detail01',
		components: {pageFooter},
		data() {
			return {
				list:[],
			}
		},
		methods:{getAbout() {
				this.$axios.get('/static/json/news.json', {
						params: {
						}
					})
					.then((res) => {
						console.log(res.data)
						this.list = res.data[0]
						
					})
					.catch((err) => {
						console.log(err)
					})
				},
			goDetail(){
				
			}
		},
		created() {
			this.getAbout()
		}
		
		
	}
</script>
<style lang="less" scoped>
	@import '../../../styles/main.less';
	.detail01{
		.padding(63,0,0,0);
		.w(375);
		box-sizing:border-box;
			.newsTop{
				.h(37.5);
				.w(375);
				postion:relative;
				background:#2d2d2d;
				p{
					.h(37.5);
					.lh(37.5);
					.fs(20);
					color:#fff;
				}
				span{
					display: block;
					float: right;
					.h(37.5);
					.lh(37.5);
					.fs(18);
					color:#fff;
					position:absolute;
					.top(63);
					.right(10);
				}
			}
		
	
	}
</style>