<template>
	<div class="detail01">
		<div class="newsTop">
			<p>新闻中心</p><span class="back" @click="back('/News')"><返回</span>
		</div>
		<div class="contain">
			<h1>汉堡王斩获“2017中国最具发展潜力雇主” 发展前景是吸引人才的核心</h1>
			<p class="time">2018年04月16日</p>
			<div class="contain-bottom">
				<p style="text-indent: 2em;">近日，中国人力资源领域最具影响力的智联招聘2017中国年度最佳雇主颁奖盛典暨人力资源国际管理论坛在杭州城中香格里拉酒店举行。包括汉堡王、周生生等30家企业荣登“最具发展潜力雇主”榜单。</p>
				<p style="text-indent: 2em;">“最具发展潜力雇主”评选主要针对员工规模在20人以上，或本年度招聘规模需求同比增长13%以上，或本年度营业收入在50万元以上的未来可期的企业群体。这些企业大多处于快速成长阶段，且未来前景看好。它们也像成熟的大企业一样，重视建设雇主品牌实现人才管理上的长足发展。针对这类成长型企业，组委会综合员工对雇主的印象，以及员工对工作环境、组织管理、薪酬福利、培训发展等方面的体验进行评估，评选出“最具发展潜力雇主”。</p>
				<p style="text-align: center;"><img src="/static/images/detail4-1.jpg" /></p>
				<p style="text-indent: 2em;">调研发现，最具发展潜力企业对于人才的重视程度更高，会“想方设法留住优秀人才”，随着传统的职业观念正在发生改变，员工已经意识到不断更新知识对未来职业发展的重要性，也期待雇主能够提供这样的学习机会。发展潜力公司迎合这一需求，积极做出反应，它们不仅通过培训满足员工的成长诉求，还通过灵活的组织管理让过员工可以从工作本身、领导、同事身上学到很多东西从而加强员工的认同。</p>
				<p style="text-indent: 2em;">随着智能技术的渗透，决定企业市场竞争力的要素已经由物质资本转变为人力资本。人才将是企业未来最为重要、最为稀缺的资源。吸引与留住人才，将是企业人才战略的主要内容。在这个过程中，了解并改进员工在雇佣过程中的体验，洞察员工的诉求，结合企业内外环境情况，从自身实际出发，制定自己的人才策略对企业经营战略的实现具有举足轻重的作用。</p>
				<p style="text-indent:2em">对此，汉堡王人力资源部负责人表示：随着企业的快速发展，汉堡王的员工表现出对企业的未来更有信心，而非聚焦在当下。大家更重视企业的发展前景，并期待企业通过加强管理来提高发展速度，从而获得个人的职位提升和社会尊重。“想方设法吸引与留住人才，将是汉堡王人才战略的主要内容。善于了解进员工在工作过程中的体验，洞察员工的诉求，从汉堡王自身实际出发，制定自己的人才培养策略，是我们努力的方向。”他说。</p>
				
				<p style="text-align: center;"><img src="/static/images/detail4-2.jpg" /></p>				
				<p style="text-indent: 2em;">2017年度最佳雇主评选于8月2日启动，由北京大学国家发展研究院教授、BiMBA商学院院长陈春花担任评委会主席，报名企业达17554家，较去年增幅80%，参与提名打分人数超过2430万人次，为去年的6倍，创历史新高。</p>
				<p style="text-indent: 2em;">“中国年度最佳雇主”评选是由智联招聘联合北京大学社会调查研究中心共同发起的一项最佳雇主调查活动。活动历经十一年，不仅选拔了大批中国雇主品牌建设的标杆企业，激励他们更加深入地推进雇主品牌建设；更重要的是推动雇主品牌的理念和经验得到了广泛应用，有效帮助了中国企业制定并实施雇主品牌战略。智联招聘作为中国领先的职业发展平台，一直致力于帮助求职者了解什么是真正的“好工作”、“好雇主”，同时有针对性的深入挖掘不同时代求职者的需求洞察，为企业制定雇主品牌战略提供数据支持，最终实现雇主和雇员的双赢。</p>
			</div>
		</div>
		<pageFooter></pageFooter>
	</div>
</template>
<script>
	import Vue from 'vue'
	import pageFooter from '../../commons/pageFooter'
	export default {
		name: 'Detail02',
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
				.padding(0,25,0,25);
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
			h2{
				.fs(16);
				font-weight:bold;
				text-align:left;
				.padding(0,20,20,20);
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