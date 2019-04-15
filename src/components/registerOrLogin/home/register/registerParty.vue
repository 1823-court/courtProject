<template>
  <div class="drag">
    <div class="header">
      <div>
        <div class="button" @click="goBack()">
          <img src="../../../../common/img/arrow-left.png" class="icons">
        </div>
        <div class="title">{{ title }}</div>
      </div>
      <div class="register_input">
        <input
          type="text"
          placeholder="请输入姓名"
          class="parties_name"
          v-model="parties_name"
          @blur="reg1"
        >
        <p class="tips1" id="tips" v-show="tips1">请输入正确的姓名</p>
        <br>
        <input type="text" placeholder="请输入用户名" class="pname" v-model="pname" @blur="reg2">
        <p class="tips2" id="tips" v-show="tips2">请输入正确的用户名</p>

        <br>
        <input type="text" placeholder="请输入身份证号码" class="pid_card" v-model="pid_card" @blur="reg7">
        <p class="tips7" id="tips" v-show="tips7">请输入正确的身份证号码</p>

        <br>
        <input type="text" placeholder="请输入正确的手机号" class="pphone" v-model="pphone" @blur="reg3">
        <p class="tips3" id="tips" v-show="tips3">请输入正确的邮箱号</p>

        <br>
        <input type="text" placeholder="请输入邮箱" class="pemail" v-model="pemail" @blur="reg4">
        <p class="tips4" id="tips" v-show="tips4">请输入正确的验证码</p>

        <br>
        <input type="password" placeholder="请输入密码" class="password" v-model="password" @blur="reg5">
        <p class="tips5" id="tips" v-show="tips5">请输入正确的密码</p>

        <br>
        <input
          type="password"
          placeholder="请输入确认密码"
          class="repassword"
          v-model="repassword"
          @blur="reg6"
        >
        <p class="tips6" id="tips" v-show="tips6">两次密码不一致</p>
        <br>
        <button @click="register" class="register">注册</button> >
        <br>
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
      parties_name: "",
      pname: "",
      pphone: "",
      pemail: "",
      password: "",
      repassword: "",
      pid_card: "",
      t1: /^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/,
      t2: /^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/,
      t3: /^0?(13|14|15|18|17)[0-9]{9}$/,
      t4: /(\S)+[@]{1}(\S)+[.]{1}(\w)+/,
      t5: /^[a-zA-Z0-9]{6,10}$/,
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
      if (!restr.test(str) || this.parties_name == "") {
        this.tips1 = true;
      } else {
        this.tips1 = false;
      }
    },
    reg2() {
      var str = this.pname;
      console.log(str);
      var restr = this.t2;
      if (!restr.test(str) || this.pname == "") {
        this.tips2 = true;
      } else {
        this.tips2 = false;
      }
    },
    reg3() {
      var str = this.pphone;
      console.log(str);
      var restr = this.t3;
      if (!restr.test(str) || this.pphone == "") {
        this.tips3 = true;
      } else {
        this.tips3 = false;
      }
    },
    reg4() {
      var str = this.pemail;
      console.log(str);
      var restr = this.t4;
      if (!restr.test(str) || this.pemail == "") {
        this.tips4 = true;
      } else {
        this.tips4 = false;
      }
    },
    reg5() {
      var str = this.password;
      console.log(str);
      var restr = this.t5;
      if (!restr.test(str) || this.password == "") {
        this.tips5 = true;
      } else {
        this.tips5 = false;
      }
    },
    reg6() {
      var str = this.repassword;
      console.log(str);
      var restr = this.t6;
      if (this.repassword !== this.password || this.repassword == "") {
        this.tips6 = true;
      } else {
        this.tips6 = false;
      }
    },
    reg7() {
      var str = this.pid_card;
      console.log(str);
      var restr = this.t7;
      if (!restr.test(str) || this.pid_card == "") {
        this.tips7 = true;
      } else {
        this.tips7 = false;
      }
    },

    register() {
      this.$http
        .post("http://106.14.169.217:8000/parties_app/partiesregist/", {
          parties_name: this.parties_name,
          pname: this.pname,
          pphone: this.pphone,
          pemail: this.pemail,
          password: this.password,
          repassword: this.repassword,
          pid_card: this.pid_card
        })
        .then(function(response) {
          console.log(response);
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

.drag {
  position: fixed;
  top: 0;
  bottom: 0;
  background: #fff;
  .w(375);
  // background: #F0F0F2;
  font-size: @fontSize-s;

  .header {
    .w(375);
    .h(50);
    background: #3297f5;
    color: #fff;
    .l_h(50);
    text-align: center;
    border-bottom: 1px solid #ddd;
    font-size: @fontSize-L;
    .button {
      position: absolute;
      .left(20);
      .icons {
        .w(10);
        .h(10);
        position: absolute;
        .top(20);
        .left(24);
      }
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
      border-bottom: 1px solid #726b66;
    }
    .register {
      margin-top: 100px;
      border: none;
      .w(320);
      .h(45);
      background: #3297f5;
      font-size: @fontSize-L;
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
