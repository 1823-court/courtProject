
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
        <input type="text" placeholder="请输入用户名/身份证" class="pname" v-model="pname" @blur="reg1">
        <p class="tips1" id="tips" v-show="tips1">请输入正确的用户名</p>

        <hr>
        <input type="password" placeholder="请输入密码" class="password" v-model="password" @blur="reg2">
        <p class="tips2" id="tips" v-show="tips2">请输入正确的密码</p>

        <router-link tag="a" to="/loginShortMessage">忘记密码</router-link>
        <hr>

        <input type="button" value="登录" class="register" @click="goParty">
        <br>

        <router-link tag="a" to="/loginPartyMessage">邮箱验证登录</router-link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <router-link tag="a" to="/registerSpecification">立即注册</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "当事人登录",
      single: false,
      pname: "",
      password: "",
      t1: /^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/,
      t2: /^w{6,12}$/,
      tips1: false,
      tips2: false
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    reg1() {
      var str = this.pname;
      console.log(str);
      var restr = this.t1;
      if (!restr.test(str) || this.pname == "") {
        this.tips1 = true;
      } else {
        this.tips1 = false;
      }
    },
    reg2() {
      var str = this.password;
      console.log(str);
      var restr = this.t2;
      if (!restr.test(str) || this.password == "") {
        this.tips2 = true;
      } else {
        this.tips2 = false;
      }
    },
    goParty() {
      this.$router.push({ path: "/privyindex/payPending" });
    },
    login() {
      this.$http
        .post("http://106.14.169.217:8000/parties_app/login/", {
          pname: this.pname,
          password: this.password
        })
        .then(function(response) {
          console.log(response);
          this.$router.push({ path: "/privyindex" });
        })

        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>

<style lang="less" scoped="">
@import "../../../../common/css/index.less";

hr {
  .w(300);
  margin: 0 auto;
}

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
    .l_h(50);
    text-align: center;
    color: #fff;
    background: #3297f5;

    .title {
      font-size: @fontSize-xL;
    }
    .button {
      position: absolute;
      .left(20);
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
    .pname {
      .w(300);
      .h(30);
      margin-top: 20px;
      border: none;
      outline: none;
    }

    .password {
      .w(230);
      .h(30);
      margin-top: 20px;
      border: none;
      outline: none;
    }

    .register {
      margin-top: 41px;
      border: none;
      color: #fff;
      background: #3297f5;
      .w(320);
      .h(45);
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
    top: 325px;
  }
  .tips2 {
    top: 385px;
  }
}
</style>
