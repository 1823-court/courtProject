<template>
	<div class="drag">
		<div class="header">
			<div>
				<div class="button" @click="goBack()">back</div>
				<div class="title">{{title}}</div>
			</div>
		</div>
		<div class="footer">
			<div class="footer_left" @click="goBackTo()">{{tabOne}}</div>
			<div class="footer_right" @click="goBackOk()">{{tabTwo}}</div>

		</div>
		<br>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>如果你无法简洁的表达你的想法, 那只说明你还不够了解它。<br>&nbsp;&nbsp;&nbsp;&nbsp;——阿尔伯特·爱因斯坦 ​​​​</span>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				title: '用户注册协议',
				single: false,
				tabOne:'不同意',
				tabTwo:'同意'
			}
		},
		methods: {
			goBackOk(){
				alert('等待跳转')
				this.$router.go(-1);
			},
			goBackTo(){
				alert('请同意')
				// this.$router.go(-1);
			},
			goBack() {
				this.$router.go(-1);
			},
			
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
		.footer{
			.w(375);
			.h(50);
			display: flex;
			justify-content: space-around;
			align-items: center;
			background: #fff;
			position:absolute;
			bottom: 0;
			border-top: 1px solid #ccc;
			.footer_left,.footer_right{
				.w(287);
				.h(50);
				text-align: center;
				.l_h(50);

			}
			.footer_left{
				border-right: 1px solid #ccc;

			}
			
		}
		


	}
</style>
