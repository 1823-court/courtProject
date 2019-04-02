<template>
  <div class="drag">
    <div class="header">
      <div>
        <div class="button" @click="goBack()">back</div>
        <div class="title">{{title}}</div>
      </div>
      <div class="register_input">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span>姓&nbsp;&nbsp;名：</span>&nbsp;&nbsp;&nbsp;&nbsp;
        <input
          type="text"
          placeholder="请输入你的姓名"
          class="name-style"
          v-model="nameVal"
          @blur="re1"
        >
        <p class="tips1" id="tips"></p>
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span>用户名：</span>&nbsp;&nbsp;&nbsp;
        <input
          type="text"
          placeholder="请输入用户名"
          class="name-style"
          maxlength="20"
          v-model="userVal"
          @blur="re2"
        >
        <p class="tips2" id="tips"></p>
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span>身份证号：</span>&nbsp;&nbsp;&nbsp;
        <input
          type="text"
          placeholder="请输入身份证号"
          class="name-style"
          maxlength="20"
          v-model="idVal"
          @blur="re3"
        >
        <p class="tips3" id="tips"></p>
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span>手机号：</span>&nbsp;&nbsp;
        <input
          type="text"
          placeholder="请输入你的手机号"
          class="phone-number-style"
          v-model="numVal"
          @blur="re4"
        >
        <p class="tips4" id="tips"></p>
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span>验证码：</span> &nbsp;&nbsp;&nbsp;&nbsp;
        <input
          type="text"
          placeholder="请输入你的验证码"
          class="phone-number-style"
          v-model="codeVal"
          @blur="re5"
        >
        <p class="tips5" id="tips"></p>
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span>密码：</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input
          type="password"
          placeholder="请输入密码"
          class="name-style"
          v-model="pasVal"
          @blur="re6"
        >
        <p class="tips6" id="tips"></p>
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span>确认密码：</span>
        <input
          type="password"
          placeholder="请输入确认密码"
          class="name-style"
          v-model="pasaginVal"
          @blur="re7"
        >
        <p class="tips7" id="tips"></p>
        <br>

        <input type="button" value="注册" class="register" @click="reg()">
        <br>
        <router-link tag="a" to="/registerAgreement">同意用户注册协议</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "当事人注册",
      single: false,
      nameVal: "",
      userVal: "",
      idVal: "",
      numVal: "",
      codeVal: "",
      pasVal: "",
      pasaginVal: "",
      t1: "/^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/",
      t2: "/^[a-zA-Z0-9_-]{4,16}$/",
      t3: "/^[1-9]d{5}[1-9]d{3}((0d)|(1[0-2]))(([0|1|2]d)|3[0-1])d{4}$/",
      t4: "/^1([38]d|5[0-35-9]|7[3678])d{8}$",
      t5: " /^d{6}$/",
      t6: "/^w{6,12}$/"
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    re1() {
      var str = this.nameVal;
      var restr = /^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/;
      if (!restr.test(str) || this.nameVal == "") {
        $(".tips1").css({ display: "block" });
        $(".tips1").html("请输入正确的用户名");
      } else {
        $(".tips1").css({ display: "none" });
      }
    },
    re2() {
      var str = this.userVal;
      var restr = /^[a-zA-Z0-9_-]{4,16}$/;
      if (!restr.test(str) || this.userVal == "") {
        $(".tips2").css({ display: "block" });
        $(".tips2").html("请输入正确的用户名");
      } else {
        $(".tips2").css({ display: "none" });
      }
    },
    re3() {
      var str = this.idVal;
      var restr = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{4}$/;
      if (!restr.test(str) || this.idVal == "") {
        $(".tips3").css({ display: "block" });
        $(".tips3").html("请输入正确的身份证号");
      } else {
        $(".tips3").css({ display: "none" });
      }
    },
    re4() {
      var str = this.numVal;
      var restr = /^1([38]\d|5[0-35-9]|7[3678])\d{8}$/;
      if (!restr.test(str) || this.numVal == "") {
        $(".tips4").css({ display: "block" });
        $(".tips4").html("请输入正确的手机号");
      } else {
        $(".tips4").css({ display: "none" });
      }
    },
    re5() {
      var str = this.codeVal;
      var restr = /^\d{6}$/;
      if (!restr.test(str) || this.codeVal == "") {
        $(".tips5").css({ display: "block" });
        $(".tips5").html("验证码有误");
      } else {
        $(".tips5").css({ display: "none" });
      }
    },
    re6() {
      var str = this.pasVal;
      var restr = /^\w{6,12}$/;
      if (!restr.test(str) || this.pasVal == "") {
        $(".tips6").css({ display: "block" });
        $(".tips6").html("包含6-12位数字字母下划线");
      } else {
        $(".tips6").css({ display: "none" });
      }
    },
    re7() {
      if (this.pasaginVal !== this.pasVal || this.pasaginVal == "") {
        $(".tips7").css({ display: "block" });
        $(".tips7").html("密码不一致,请重新输入");
      } else {
        $(".tips7").css({ display: "none" });
      }
    },

    reg() {
		
      if (this.nameVal != "" && this.t1.this.test(this.nameVal)) {
        if (this.userVal != "" && this.t2.this.test(this.userVal)) {
          if (this.idVal != "" && this.t3.test(this.idVal)) {
            if (this.numVal != "" && this.t4.test(this.numVal)) {
              if (this.codeVal != "" && this.t5.test(this.codeVal)) {
                if (this.pasVal != "" && this.t6.test(this.pasVal)) {
                  alert("注册成功");
                } else {
                  alert("密码不符合规则或空密码");
                }
              } else {
                alert("验证码不符合规则或空密码");
              }
            } else {
              alert("身份证号不符合规则或空密码");
            }
          } else {
            alert("用户名不符合规则或空密码");
          }
        } else {
          alert("姓名不符合规则或空密码");
        }
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
  .w(375);
  background: #f0f0f2;
  font-size: 16px;
  .header {
    .w(375);
    .h(50);
    background: #af6131;
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
    input {
      .w(200);
      .h(30);
      margin-top: 20px;
      position: relative;
    }
    .register {
      margin-top: 68px;
      border: none;
      .w(320);
      .h(45);
      background: rgb(175, 97, 49);
      font-size: 16px;
      color: #fff;
    }
  }
  #tips {
    .w(150);
    .h(20);
    font-size: @fontSize-s;
    color: @fontColornormal;
    position: absolute;
    color: red;
    display: none;
    left: 136px;
  }
  .tips1 {
    top: 85px;
  }
  .tips2 {
    top: 139px;
  }
  .tips3 {
    top: 200px;
  }
  .tips4 {
    top: 257px;
  }
  .tips5 {
    top: 313px;
  }
  .tips6 {
    top: 370px;
  }
  .tips7 {
    top: 431px;
  }
}
</style>

