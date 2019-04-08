<template>
	<div class="drag">
		<div class="header">
			<div>
				<div class="button" @click="goBack()">back</div>
				<div class="title">{{ title }}</div>
			</div>
			<div class="register_input">
				<input type="text" placeholder="请输入姓名" class="parties_name" v-model="parties_name" @blur="reg1" />
				<p class="tips1" id="tips" v-show="tips1">请输入正确的姓名</p>
				<br />
				<input type="text" placeholder="请输入用户名" class="Pname" v-model="Pname" @blur="reg2" />
				<p class="tips2" id="tips" v-show="tips2">请输入正确的用户名</p>

				<br />
				<input type="text" placeholder="请输入身份证号码" class="id_card" v-model="id_card" @blur="reg7" />
				<p class="tips7" id="tips" v-show="tips7">请输入正确的身份证号码</p>

				<br />
				<input type="text" placeholder="请输入手机号" class="phone" v-model="phone" @blur="reg3" />
				<p class="tips3" id="tips" v-show="tips3">请输入正确的手机号</p>

				<br />
				<input type="text" placeholder="请输入验证码" class="phone-number-style" v-model="phone_number" @blur="reg4" />
				<p class="tips4" id="tips" v-show="tips4">请输入正确的验证码</p>

				<br />
				<input type="password" placeholder="请输入密码" class="Password" v-model="Password" @blur="reg5" />
				<p class="tips5" id="tips" v-show="tips5">请输入正确的密码</p>

				<br />
				<input type="password" placeholder="请输入确认密码" class="Repassword" v-model="Repassword" @blur="reg6" />
				<p class="tips6" id="tips" v-show="tips6">两次密码不一致</p>
				<br />
				<input type="submit" value="注册" class="register" />
				<br />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			title: '当事人注册',
			single: false,
			parties_name: '',
			Pname: '',
			phone: '',
			phone_number: '',
			Password: '',
			Repassword: '',
			id_card: '',
			t1: /^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/,
			t2: /^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/,
			t3: /^0?(13|14|15|18|17)[0-9]{9}$/,
			t4: /^d{6}$/,
			t5: /^w{6,12}$/,
			t7: /^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/,
			
			tips1: false,
			tips2: false,
			tips3: false,
			tips4: false,
			tips5: false,
			tips6: false,
			tips7: false
		};
	},
	methods: {
		goBack() {
			this.$router.go(-1);
		},
		reg1() {
			var str = this.parties_name;
			console.log(str);
			var restr = this.t1;
			if (!restr.test(str) || this.parties_name == '') {
				this.tips1 = true;
			} else {
				this.tips1 = false;
			}
		},
		reg2() {
			var str = this.Pname;
			console.log(str);
			var restr = this.t2;
			if (!restr.test(str) || this.Pname == '') {
				this.tips2 = true;
			} else {
				this.tips2 = false;
			}
		},
		reg3() {
			var str = this.phone;
			console.log(str);
			var restr = this.t3;
			if (!restr.test(str) || this.phone == '') {
				this.tips3 = true;
			} else {
				this.tips3 = false;
			}
		},
		reg4() {
			var str = this.phone_number;
			console.log(str);
			var restr = this.t4;
			if (!restr.test(str) || this.phone_number == '') {
				this.tips4 = true;
			} else {
				this.tips4 = false;
			}
		},
		reg5() {
			var str = this.Password;
			console.log(str);
			var restr = this.t5;
			if (!restr.test(str) || this.Password == '') {
				this.tips5 = true;
			} else {
				this.tips5 = false;
			}
		},
		reg6() {
			var str = this.Repassword;
			console.log(str);
			var restr = this.t6;
			if (this.Repassword !== this.Password || this.Repassword == '') {
				this.tips6 = true;
			} else {
				this.tips6 = false;
			}
		},
		reg7() {
			var str = this.id_card;
			console.log(str);
			var restr = this.t7;
			if (!restr.test(str) || this.id_card == '') {
				this.tips7 = true;
			} else {
				this.tips7 = false;
			}
		}
	}
};
</script>

<style lang="less" scoped="">
@import '../../../../common/css/index.less';

.drag {
	position: fixed;
	top: 0;
	bottom: 0;
	background: #fff;
	.w(375);
	// background: #F0F0F2;
	font-size: 16px;

	.header {
		.w(375);
		.h(50);
		color: #000;
		.l_h(50);
		text-align: center;
		border-bottom: 1px solid #af6131;

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

		input {
			.w(300);
			.h(30);
			margin-top: 20px;
			border: none;
			border-bottom: 1px solid #af6131;
		}

		.register {
			margin-top: 100px;
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
		top: 85px;
	}
	.tips2 {
		top: 145px;
	}
	.tips3 {
		top: 265px;
	}
	.tips4 {
		top: 324px;
	}
	.tips5 {
		top: 385px;
	}
	.tips6 {
		top: 443px;
	}
	.tips7 {
		top: 205px;
	}
}
</style>
