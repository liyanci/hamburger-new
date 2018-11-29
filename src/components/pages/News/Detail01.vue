<template>
	<div class="detail01">
		<div class="newsTop">
			<p>新闻中心</p><span class="back" @click="back('/News')"><返回</span>
		</div>
		<div class="contain">
			<h1>有意加大在华投资 汉堡王中国董事会主席来中国看市场</h1>
			<p class="time">2018年06月12日</p>
			<div class="contain-bottom">
				<p style="text-indent: 2em;">2018年5月，汉堡王中国董事会主席可汗（Korhan Kurdoglu）先生抵达中国并展开了一场为期三天的拜访活动。在这次的行程中，可汗（Korhan Kurdoglu）先生先后与中国政界、商界和新兴互联网产业代表接触、会谈，并表达了看好中国市场发展，将进一步加大在华投资的意愿。</p>
				<p style="text-align: center;"><img src="/static/images/detai01.jpg" /></p>
				<p style="text-align: center;">国家市场监督管理总局国际合作司副司长韩建平接见汉堡王中国董事会主席一行</p>
				<p style="text-indent: 2em;">在为期3天的行程中，可汗先生分别拜访了国家市场监督管理总局国际合作司副司长韩建平、中国国际贸易促进委员会发展研究部副部长徐梁，黄浦区区委常委、副区长陈卓夫，上海国际商会陈建荣会长、饿了么首席运营官康嘉等，并就企业发展和品牌提升等话题进行深度探讨。</p>
				<p style="text-align: center;"><img src="/static/images/detai02.jpg" /></p>
				<p style="text-align: center;">汉堡王中国董事会主席可汗拜访中国国际贸易促进委员会 发展研究部副部长徐梁</p>
				<p style="text-indent: 2em;">据可汗（Korhan Kurdoglu）先生介绍，汉堡王创始于1954年美国迈阿密，60多年来在全球100多个国家及地区经营超过19000家门店。2005年，汉堡王正式进入中国，截止2018年已在中国140多个城市开设了900家餐厅。汉堡王在中国的快速发展让中国政界、商界和互联网企业的代表都颇为惊叹。</p>
				<p style="text-align: center;"><img src="/static/images/detai03.jpg"/></p>
				<p style="text-align: center;">汉堡王进入中国后，发展迅猛</p>
				<p style="text-indent: 2em;">陈卓夫表示，很高兴知晓汉堡王有进一步加大在中国市场投资的意愿。在“一带一路”和改革开放再出发的背景下，中方不但愿意吸引更多的企业来华投资，而且上海本土很多优秀的企业也愿意走出去。今年11月，首届中国国际进口博览会将在国家会展中心（上海）举办，他诚挚邀请可汗（Korhan Kurdoglu）先生届时到访黄埔，继续加深相互的了解，对各自在经济发展过程中获得的经验进行交流、相互借鉴。</p>
				<p style="text-indent: 2em;">杨健荣会长也对可汗（Korhan Kurdoglu）先生的来访表示欢迎。他说，土耳其是“一带一路”建设的重要沿线国家之一，他还向可汗（Korhan Kurdoglu）先生介绍了今年11月将在上海举办的首届中国国际进口博览会情况等，可汗（Korhan Kurdoglu）先生表示一定会积极参与。</p>
				<p style="text-align: center;"><img src="/static/images/detai04.jpg"/></p>
				<p style="text-align: center;">黄浦区区委常委、副区长陈卓夫与汉堡王中国董事会主席可汗亲切交谈</p>
			</div>
		</div>
		<pageFooter></pageFooter>
	</div>
</template>
<script>
	import Vue from 'vue'
	import pageFooter from '../../commons/pageFooter'
	export default {
		name: 'Detail01',
		components: {
			pageFooter
		},
		data() {
			return {
				list: [],
			}
		},
		methods: {
			back(path){
				this.$router.push({path:path,params: {}})
			},
			getAbout() {
				this.$axios.get('/static/json/news.json', {
						params: {}
					})
					.then((res) => {
						console.log(res.data)
						this.list = res.data[0]

					})
					.catch((err) => {
						console.log(err)
					})
			},
			goDetail() {

			}
		},
		created() {
			this.getAbout()
		}

	}
</script>
<style lang="less" scoped>
	@import '../../../styles/main.less';
	.detail01 {
		.padding(63, 0, 0, 0);
		.w(375);
		box-sizing: border-box;
		.newsTop {
			.h(37.5);
			.w(375);
			postion: relative;
			background: #2d2d2d;
			p {
				.h(37.5);
				.lh(37.5);
				.fs(20);
				color: #fff;
			}
			span {
				display: block;
				float: right;
				.h(37.5);
				.lh(37.5);
				.fs(18);
				color: #fff;
				position: absolute;
				.top(63);
				.right(10);
			}
		}
		.contain-bottom{
			p{
				.padding(0,20,0,20);
				.fs(16);
				text-align:left;
				img{
					.w(320);
					
				}
			}
			
		}
		.contain{
			h1{
				.fs(18);
				color:#333;
				font-weight:bold;
				text-align:left;
				.padding(20,20,10,20)
			}
			.time{
				.fs(12);
				color:#ccc;
				.margin(0,0,20,0);
			}
		}
		p{
			.margin(0,0,20,0)
		}
	}
</style>