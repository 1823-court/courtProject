<template>
	<div class="drag">
		<div class="header">
			<div>
				<div class="button" @click="goBack()">back</div>
				<div class="title">{{title}}</div>
			</div>
			<div class="register_input">
				<div class="img">
					<img src="../../../../common/img/login_top.png" alt="">
				</div>
				<input type="text" placeholder="请输入用户名/身份证" class="Pname" v-model="Pname" @blur="reg1">
				<p class="tips1" id="tips" v-show="tips1">请输入正确的用户名</p>

				<hr>
				<input type="password" placeholder="请输入密码" class="Password" v-model="Password" @blur="reg2">
				<p class="tips2" id="tips" v-show="tips2">请输入正确的密码</p>

				<router-link tag="a" to="/loginShortMessage">忘记密码</router-link>
				<hr>

				<input type="submit" value="登录" class="register" /><br>
				<router-link tag="a" to="/loginShortMessage">短信验证登录</router-link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<router-link tag="a" to="/registerAgreement">立即注册</router-link>

			</div>

		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				title: '法官登录',
				single: false,
				Pname: '',
				Password: '',
				t1: /^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/,
				t2: /^w{6,12}$/,
				tips1: false,
				tips2: false,
			}
		},
		methods: {
			goBack() {
				this.$router.go(-1);
			},
			reg1() {
				var str = this.Pname;
				console.log(str);
				var restr = this.t1;
				if (!restr.test(str) || this.Pname == '') {
					this.tips1 = true;
				} else {
					this.tips1 = false;
				}
			},
			reg2() {
				var str = this.Password;
				console.log(str);
				var restr = this.t2;
				if (!restr.test(str) || this.Password == '') {
					this.tips2 = true;
				} else {
					this.tips2 = false;
				}
			},
		}
	}
</script>

<style lang="less" scoped="">
	@import '../../../../common/css/index.less';

	hr {
		.w(300);
		margin: 0 auto;
		
	};

	.drag {
		position: fixed;
		top: 0;
		bottom: 0;
		background: #fff;
		.w(375);
		font-size: 16px;

		.header {
			.w(375);
			.h(50);
			color: #000;
			.l_h(50);
			text-align: center;

			.button {
				position: absolute;
				left: 20px;
			}
		}

		img {
			.w(72);
			.h(72);
			margin: 75px auto;
		}

		.register_input {
			color: black;

			.Pname {
				.w(300);
				.h(30);
				margin-top: 20px;
				border: none;
			}

			.Password {
				.w(230);
				.h(30);
				margin-top: 20px;
				border: none;
			}

			.register {
				margin-top: 41px;
				border: none;
				.w(320);
				.h(45);
				background: #94c4f1;
				font-size: 16px;
			}
		}
		#tips {
			.w(150);
			.h(20);
			font-size: @fontSize-s;
			color: @fontColornormal;
			position: absolute;
			color: red;
			// display: none;
			left: 136px;
		}
		.tips1 {
			top: 325px;
		}
		.tips2 {
			top: 385px;
		}
	}
</style>
