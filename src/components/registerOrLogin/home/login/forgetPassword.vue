<template>
	<div class="drag">
		<div class="header">
			<div>
				<div class="button" @click="goBack()">back</div>
				<div class="title">{{title}}</div>
			</div>
			<div class="register_input">
				<input type="text" placeholder="请输入你的手机号" class="phoneNumber" /><br>
				<input type="text" placeholder="请输入你的验证码" class="verificationCode" />&nbsp;&nbsp;&nbsp;&nbsp;<button class="btnclick">获取验证码</button><br>
				<input type="password" placeholder="请输入密码" class="password"><br>
				<input type="password" placeholder="请输入确认密码" class="oncePassword"><br>
				<input type="submit" value="确认" class="register" /><br>
			</div>

		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				title: '密码找回',
				single: false
			}
		},
		methods: {
			goBack() {
				this.$router.go(-1);
			}
		}
	}
</script>

<style lang="less" scoped="">
	@import '../../../../common/css/index.less';

	.drag {
		position: fixed;
		top: 0;
		bottom: 0;
		.w(375);
		background: #F0F0F2;
		font-size: 16px;

		.header {
			.w(375);
			.h(50);
			background: #AF6131;
			color: #fff;
			.l_h(50);
			text-align: center;

			.button {
				position: absolute;
				left: 20px;

			}
		}

		.select {
			border: none;
			background: #fff;

			.w(375);
			.h(50);
		}


		.register_input {
			color: black;

			.Court {
				display: inline-block;
			}

			.phoneNumber,
			.password,
			.oncePassword {
				.w(310);
				.h(50);
				margin-top: 20px;
			}

			.verificationCode {
				margin-top: 20px;

				.w(200);
				.h(50);
			}
			.btnclick{
				border: none;
				background: #AF6131;
				.w(90);
				.h(48);
				color: #fff
			}

			.register {
				margin-top: 100px;
				border: none;
				.w(320);
				.h(45);
				background: #AF6131;
				font-size: 16px;
				color: #fff
			}
			input,button{
				border-radius:6px;
			}

		}


	}
</style>
