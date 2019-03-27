<template>
	<div class="drag">
		<div class="header">
			<div>
				<div class="button" @click="goBack()">back</div>
				<div class="title">{{title}}</div>
			</div>
			<div class="textbox">

	
				<!-- <p style="white-space: pre-line;">{{ message }}</p> -->
				<br>
				<textarea  placeholder="请输入您想要反馈的内容"></textarea><br>
				<span style="font-size: 12px;">手机号 ：</span><input type="text" placeholder="请输入您的联系手机号">
				<input type="submit" value="提交" class="register" /><br>
				<!-- <Radio v-model="single">Radio</Radio> -->

			</div>
		<p class="footer" style="color:deeppink;">客服电话：400-321-4898</p>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				title: '意见反馈',
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
	@import '../../common/css/index.less';

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
			.footer{
				margin-top: 60px;
			}
		}


		.textbox {
			color: black;

			.Court {
				display: inline-block;
			}

			input {
				.w(260);
				.h(30);
				margin-top: 20px;
			}

	

			.register {
				margin-top: 30px;
				border: none;
				.w(200);
				.h(45);
				background: #AF6131;
				font-size: 16px;
				color: #fff
			}

			input,
			button {
				border-radius: 6px;
			}
			textarea{
				.w(320);
				.h(282);
			}
		

		}


	}
</style>
