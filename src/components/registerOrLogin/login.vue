<template>
	<div class="drag">
		<div class="header">
			<div>
				<div class="button" @click="goBack()">back</div>
				<div class="title">{{title}}</div>
			</div>
			<div class="register_input">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>用户名：</span>&nbsp;&nbsp;&nbsp;<input type="text"  placeholder="请输入用户名"  class="username" maxlength="20"/><br>
<input name="Fruit" type="radio" value="" />当事人
<input name="Fruit" type="radio" value="" />法官<br>
	   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>密码：</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text"  placeholder="请输入密码"  class="password" ><br>
    <router-link tag="a" to="/forgetPassword">忘记了密码</router-link>
		<input type="submit" value ="登录" class="register"/><br>
		<!-- <Radio v-model="single">Radio</Radio> -->
		

	</div>

		</div>
	</div>
</template>

<script>
	
	export default{
		data(){
			return {
				title:'登录',
				single: false
			}
		},
		methods:{
			goBack(){
				this.$router.go(-1);
			}
		}
	}
</script>

<style lang="less" scoped="">
@import '../../common/css/index.less';

	.drag{
		position: fixed;
		top:0;
		bottom: 0;
		.w(375);
		background: #F0F0F2;
		font-size: 16px;
		.header{
			.w(375);
			.h(50);
			background: #AF6131;
			color: #fff;
			.l_h(50);
			text-align: center;
			.button{
				position: absolute;
				left:20px;
				
			}
		}
		.select{
			border: none;
			background: #fff;
			
			.w(375);
			.h(50);
		}
	

		.register_input{
			color: black;
			.Court{
				display: inline-block;
			}
			.username,.password{
				.w(200);
				.h(30);
				margin-top: 20px;
			}
			.register{
				margin-top: 100px;
				border: none;
				.w(320);
				.h(45);
				background: #AF6131;
				font-size: 16px;
				color: #fff;
			}
			
		}
		
		
	}
</style>

