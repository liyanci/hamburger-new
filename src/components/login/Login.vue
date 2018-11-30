<template>
	<div class="Login">
		<h3>登录</h3>
		<div class="uslogin">
			<!--<ul>
			<!--<router-link tag='li' active-class='active' v-for="(item,index) in list" :key="index">{{item}}</router-link>-->
			<!--<li :class="sel===item?'h1':''"  @click="setItem(item)" v-for="(item,index) in list" :key="index">{{item}}</li>
		</ul>-->
			<input v-model="us" type="text" name="phone" id="phone" class="putong" value="" placeholder="手机/邮箱"/>
			<input v-model="ps" type="password" name="" id="mima" class="putong" value="" placeholder="密码" />
			<div class="forget">
				<span class="forgetword">忘记密码</span>
				<router-link to='/reg'>
				<span class="userRgin" @click="reg()">用户注册</span>
				</router-link>
			</div>
			<button class="Login1" @click="Login()">登&nbsp;&nbsp; 录</button>
		</div>
		
	</div>
</template>

<script>
	export default{
		name:'Login',
		components:{},
		data(){
			return {
//				name:'login',
				title:'login',
				us:'',
				ps:''
				}
		},
		methods:{
			reg(){
			this.$router.replace('reg')
		},
//		setItem(item){
//			this.sel=item;
//		},
		Login(){
			var storage=window.localStorage;
			var json=storage.getItem("datas");
//			console.log(json);
            var jsonObj=JSON.parse(json);
            console.log(jsonObj);
            if(this.us===jsonObj.us&&this.ps===jsonObj.ps){
            	console.log('ok')
            	this.$store.commit('changeLogin',true); 
            	window.localStorage.setItem('login',true);
//          	this.$router.go(-1)
				this.$router.replace('/home');
            }else{
            	alert('请输入正确的信息');
            }
//			
		}
		}
		
	}
</script>
	
<style lang="less" scoped>
@import '../../styles/main.less';
	.Login{
		.margin(60,0,0,0);
		.h(600);
		h3{
			.lh(70);
			.fs(20);
			.h(70);
			.w(375);
			color:#ed7800;
			text-align:center;
		}
		
		.uslogin{
			.h(500);
		
			.putong{
				.h(44);
				.w(330);
				border:1px solid #E5E5E5 ;
				display: inline-block;
				/*margin-bottom: 20px;*/
				.margin(0,0,20,0);
				}
			.log{
				text-align: center;
				
			}
			/*ul{
			display:inline;
			text-align:center;
			display:flex;
			.w(258);
			.fs(12);
			.h(40);
			.lh(40);*/
			/*.ml(20);*/
				/*border:1px solid blue;*/
				/*.mt(10)*/
				/*li{
					
					/*border:1px solid red;*/
					/*flex:1;*/
					/*.w(129);*/
					/*.h(40);
					.lh(40);
					float: left;
					text-align:center;
				}
				.h1{
					background: #482a2a;
					color: white;
				}
			}*/
			input::-webkit-input-placeholder{
		            color:#DDE2ED;
		    }
		    input{
		    	.padding(0,0,0,10);
		      	.fs(14);
		    }
		    .Login1{
				.h(44);
				.w(330);
		      	background-color: #ed7800;
		      	border-radius: 5px;
		      	color: #fff;
		      	.fs(16);
		      	
		      }
		     
		    .forget{
		      	/*padding: 50px 30px;*/
		      	.padding(50,30,50,30);
		      	span{
			      	.fs(13);
			      	color: #ed7800;
			      	display: inline-block;
		     	}
			    .forgetword{
			      	float: left;
			    }
			    .userRgin{
			      	float: right;
			    }
		    }
		      
		}      
	}
		input[type=text]:focus, input[type=password]:focus {
    		border: 2px solid #ed7800;
		}
</style>