<template>
	<div class="box">
	<img src="../../assets/logo.png">
	<div class="modal" v-show="show">
		<div class="modalFrame">
			<div class="modalF"><a @click='goDetail()'>法官</a></div>
			<div class="modalF"><a @click='goParty()'>当事人</a></div>
		</div>
		<!-- <RegisterJudge></RegisterJudge> -->
	</div>
	<div class="tab">

		<ul>
			<li v-for="(item,index) in tabBar" :key=index>
				<router-link :to="item.path">
					<span @click="handleAppear()">{{item.name}}</span>
				</router-link>

			</li>
		</ul>
	</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				show:false
				,
				tabBar: [{
						name: "注册",
						path: "/register"
					},
					{
						name: "登录",
						path: "/login"
					},
					{
						name: "客服",
						path: "/customerService"
					},

				]
			}
		},
		methods: {
			handleAppear(){
				this.show=!this.show
			},
			handleToggle(index) {
				this.$emit("handleToggle", index)
			},
			goDetail() {
				console.log('跳转')
				this.$router.push('/registerJudge')
				// alert(2222)
			},
			goParty() {
				console.log('跳转')
				this.$router.push('/registerParty')
				// alert(2222)
			}
			
		}
	}
</script>

<style lang="less" scoped="">
@import '../../common/css/index.less';
	img{
		margin-left: 90px;
		margin-top: 30px
	}

	.tab {
		.w(375);
		.h(100);
		position: fixed;
		bottom: 0;
		color: #fff;
		ul {
			width: 100%;
			height: 100%;
			display: flex;
			justify-content:space-around;
			li{
				.w(50);
				.h(50);
				border-radius: 50%;
				background: gold;
			}
			a {
				width: 100%;
				height: 100%;
		
				display: flex;
				flex-direction: column;
				justify-content: space-around;
				align-items: center;
				font-size: @fontSize-L;
			}

		}
	}
	
	
	.modal {
		.w(375);
		.h(300);
		display: flex;
		justify-content: space-around;
		align-items: center;
	
		.modalFrame {
			.w(280);
			.h(150);
			background: blueviolet;
			display: flex;
			justify-content: space-around;
			align-items: center;
			background: blueviolet;
			font-size: 16px;
			
	
			.modalF {
				.w(50);
				.h(50);
				.l_h(50);
				border-radius: 50%;
				background: gold;
				text-align: center
			}
	
		}
	}
	
</style>
