
<template>
  <div class="drag">
    <div class="header">
      <div>
        <div class="button" @click="goBack()">
          <img src="../../../../common/img/arrow-left.png" class="icons">
        </div>
        <div class="title">{{title}}</div>
      </div>
      <div class="register_input">
        <div class="img">
          <img src="../../../../common/img/login_top.png" alt>
        </div>
        <input type="text" placeholder="请输入手机号码" class="phone" v-model="phone" @blur="reg1">
        <p class="tips1" id="tips" v-show="tips1">请输入正确的手机号</p>
        <br>
        <input
          type="text"
          placeholder="请输入验证码"
          class="phone_number"
          v-model="phone_number"
          @blur="reg2"
        >
        <p class="tips2" id="tips" v-show="tips2">请输入正确的验证码</p>

        <br>

        <input type="submit" value="登录" class="register">
        <br>

        <router-link tag="a" to="/loginParty">用户名身份证登录</router-link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <router-link tag="a" to="/registerSpecification">立即注册</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "短信验证登录",
      single: false,
      phone: "",
      phone_number: "",
      t1: /^0?(13|14|15|18|17)[0-9]{9}$/,
      t2: /^d{6}$/,
      tips1: false,
      tips2: false
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    reg1() {
      var str = this.phone;
      console.log(str);
      var restr = this.t1;
      if (!restr.test(str) || this.phone == "") {
        this.tips1 = true;
      } else {
        this.tips1 = false;
      }
    },
    reg2() {
      var str = this.phone_number;
      console.log(str);
      var restr = this.t2;
      if (!restr.test(str) || this.phone_number == "") {
        this.tips2 = true;
      } else {
        this.tips2 = false;
      }
    }
  }
};
</script>

<style lang="less" scoped="">
@import "../../../../common/css/index.less";

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
    .l_h(50);
    text-align: center;
    color: #fff;
    background: #3297f5;
    .title {
      font-size: @fontSize-xL;
    }
    .button {
      position: absolute;
      left: 20px;
      .icons {
        .w(10);
        .h(10);
        position: absolute;
        .top(-55);
        .left(24);
      }
    }
  }

  img {
    .w(72);
    .h(72);
    margin: 75px auto;
  }

  .register_input {
    color: black;

    input {
      .w(300);
      .h(30);
      margin-top: 20px;
      border: none;
      outline: none;
      border-bottom: 1px solid #999999;
    }

    .register {
      margin-top: 41px;
      border: none;
      .w(320);
      .h(45);
      color: #fff;
      background: #3297f5;
      font-size: @fontSize-L;
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
    top: 312px;
  }
  .tips2 {
    top: 370px;
  }
}
</style>
