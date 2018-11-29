
<template>
	<div id="allmap">
		<div class="left">
			<div id="container1" class="container"></div>
		</div>
		
	</div>
</template>
<!--<script src="http://api.map.baidu.com/api?v=2.0&ak=A1LU7iHS0avqQwPLAxbhKn0UYSQCuRVH"></script>     
<script src="http://www.jq22.com/jquery/jquery-1.10.2.js"></script>-->

<script src="http://api.map.baidu.com/api?v=2.0&ak=A1LU7iHS0avqQwPLAxbhKn0UYSQCuRVH"></script>
<script src="http://www.jq22.com/jquery/jquery-1.10.2.js"></script>
<script src="js/jquery.baiduMap.min.js"></script>
<script type="text/javascript">
			new BaiduMap({
				id: "container1",
				title: {
					text: "北京故宫博物院",
					className: "title"
				},
				content: {
					className: "content",
					text: ["地址：北京市东城区东华门大街", "电话：(010)65131892"]
				},
				point: {
					lng: 116.412222,
					lat: 39.912345
				}
			});
		</script>
<script>
	import Vue from 'vue'
	import pageFooter from '../../commons/pageFooter'
	import jquery from '../../../../node_modules/jquery/dist/jquery.min.js'
	export default {
		name: 'Map',
		components: {},
		data(){
			return{
				
			}
		},
		methods:{
			
		}
	}
	
</script>
<style lang="less" scoped>
	@import '../../../styles/main.less';
	
</style>