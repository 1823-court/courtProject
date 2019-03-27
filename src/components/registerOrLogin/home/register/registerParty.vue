<template>
	<div class="drag">
		<div class="header">
			<div>
				<div class="button" @click="goBack()">back</div>
				<div class="title">{{title}}</div>
			</div>
			<div class="register_input">
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>姓&nbsp;&nbsp;名：</span>&nbsp;&nbsp;&nbsp;&nbsp;<input type="text"  placeholder="请输入你的姓名"  class="name-style" ><br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>用户名：</span>&nbsp;&nbsp;&nbsp;<input type="text"  placeholder="请输入用户名"  class="name-style" maxlength="20"/><br>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>身份证号：</span>&nbsp;&nbsp;&nbsp;<input type="text"  placeholder="请输入用户名"  class="name-style" maxlength="20"/><br>
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>手机号：</span>&nbsp;&nbsp; <input type="text"  placeholder="请输入你的手机号"  class="phone-number-style"/><br>
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>验证码：</span> &nbsp;&nbsp;&nbsp;&nbsp;<input type="text"  placeholder="请输入你的验证码"  class="phone-number-style"/><br>
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>密码：</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text"  placeholder="请输入密码"  class="name-style" ><br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>确认密码：</span><input type="text"  placeholder="请输入确认密码"  class="name-style" ><br>

		<input type="submit" value ="注册" class="register"/><br>
		<!-- <Radio v-model="single">Radio</Radio> -->
		<router-link tag="a" to="/registerAgreement">同意用户注册协议</router-link>


	</div>

		</div>
	</div>
</template>

<script>
	
	export default{
		data(){
			return {
				title:'当事人注册',
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
@import '../../../../common/css/index.less';

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
			input{
				.w(200);
				.h(30);
				margin-top: 20px;
			}
			.register{
				margin-top: 100px;
				border: none;
				.w(320);
				.h(45);
				background: #fff;
				font-size: 16px;
			}
			
		}
		
		
	}
</style>

