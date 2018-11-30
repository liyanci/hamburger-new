<template>
	<div class="Reg">
		<h2>注册</h2>
		<div>
			<input @blur="usconfirm()" v-model="us" type="text" name="phone" class="putong" value="" placeholder="手机号/邮箱"/>
			<!--<input type="text" name="yanzhengma" id="yanzhengma" class="putong" value="" placeholder="获取验证码" />-->
			<!--<input type="text" name="" value="" class="mingzi" placeholder="名"/>
			<input type="text" name="" value="" class="mingzi" placeholder="姓"/>-->
			<input v-model="ps" type="password" name="" class="putong" value="" placeholder="密码（8-20字符，包含数字、大小写字母）" />
			<input v-model="reps" type="password" name="" class="putong" value="" placeholder="确认密码" />
			<p>密码必须由8~20个字符组成，必须包含数字、大写字母和小写字母。不能包含特殊字符和空格。</p>
			<button @click="reg()" class="Reg1">注&nbsp;&nbsp; 册</button>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue'
	export default{
		name:'Reg',
		components:{},
		data(){
			return {
				title:'reg',
				us:'',
				ps:'',
				reps:'',
				isTrue:false
			}
		},
		methods:{
			usconfirm(){
//			console.log(this.us)
			var phone = this.us;
		    if(!(/^1[34578]\d{9}$/.test(phone))){ 
		    	this.isTrue=false;
		        alert("手机号码有误，请重填");  
		    }else{
		    	this.isTrue=true;
		    }
			console.log('usconfirm')
		},
		login(){
			this.$router.replace('login')
		},
		reg(){
			if(this.us!=''&&this.ps!=''&&this.ps===this.reps&&this.isTrue===true){
					var storage=window.localStorage;
					var datas={
		                us:this.us,
		                ps:this.ps,
		            };
		            var d=JSON.stringify(datas);
		            storage.setItem("datas",d);
				alert('注册成功')
				this.$router.replace('/login')
			}else{
				alert('注册失败')
			}
		}
	
		},
		
	}
</script>
	
<style lang="less" scoped>
@import '../../styles/main.less';
	.Reg{
		.padding(60,0,0,0);
		.h(600);
		h2{
		margin: 0 auto;
		.fs(20);
		color:#ed7800;
		.h(70);
		.lh(70);
		}
		.putong{
			margin: 0 auto;
			.h(44);
			.w(330);
			border:1px solid #E5E5E5 ;
			display: inline-block;
				/*margin-bottom: 20px;*/
			.margin(0,0,20,0);
		}
		p{
			.fs(12);
			.w(350);
			margin: 0 auto;
			display: inline-block;
		}
		input::-webkit-input-placeholder{
		    color:#DDE2ED;
		}
		input{
		    .padding(0,0,0,10);
		    .fs(14);
		    }
		.Reg1{
				.h(44);
				.w(330);
		      	background-color: #ed7800;
		      	border-radius: 5px;
		      	color: #fff;
		      	.fs(16);
		      	
		      }
		
	}
	

</style>