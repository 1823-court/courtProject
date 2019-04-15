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
        <input type="text" placeholder="请输入用户名" class="Pname" v-model="Pname" @blur="reg2">
        <p class="tips2" id="tips" v-show="tips2">请输入正确的用户名</p>
        <br>
        <Form :model="formItem">
          <!-- <FormItem label="所在法院"> -->
          <!-- <Select v-model="formItem.select">
            <Option value="beijing">北京人民法院</Option>
            <Option value="shenzhen">深圳人民法院</Option>
            <Option value="shanghai">上海人民法院</Option>
            <Option value="guangzhou">广州人民法院</Option>
          </Select>-->
          <!-- </FormItem> -->
        </Form>
        <input type="text" placeholder="请输入邮箱号" class="phone" v-model="phone" @blur="reg3">
        <p class="tips3" id="tips" v-show="tips3">请输入邮箱号</p>

        <br>
        <input
          type="text"
          placeholder="请输入验证码"
          class="phone_number"
          v-model="phone_number"
          @blur="reg4"
        >
        <a class="code">获取验证码</a>
        <p class="tips4" id="tips" v-show="tips4">验证码有误</p>

        <hr>
        <input type="password" placeholder="请输入密码" class="Password" v-model="Password" @blur="reg5">
        <p class="tips5" id="tips" v-show="tips5">包含6-12位数字字母下划线</p>
        <br>
        <input
          type="password"
          placeholder="请输入确认密码"
          class="Repassword"
          v-model="Repassword"
          @blur="reg6"
        >
        <p class="tips6" id="tips" v-show="tips6">密码不一致,请重新输入</p>
        <br>
        <button @click="register">注册</button>
        <br>
      </div>
    </div>
  </div>
</template>

<script>
import Apiconfig from "../../../../common/api/apiconfig.js";

export default {
  data() {
    return {
      title: "法官注册",
      single: false,
      parties_name: "",
      Pname: "",
      phone: "",
      phone_number: "",
      Password: "",
      Repassword: "",
      t1: /^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/,
      t2: /^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/,
      t3: /^0?(13|14|15|18|17)[0-9]{9}$/,
      t4: /^d{6}$/,
      t5: /^w{6,12}$/,
      tips1: false,
      tips2: false,
      tips3: false,
      tips4: false,
      tips5: false,
      tips6: false,
      formItem: {
        select: ""
      }
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
      var str = this.Pname;
      console.log(str);
      var restr = this.t2;
      if (!restr.test(str) || this.Pname == "") {
        this.tips2 = true;
      } else {
        this.tips2 = false;
      }
    },
    reg3() {
      var str = this.phone;
      console.log(str);
      var restr = this.t3;
      if (!restr.test(str) || this.phone == "") {
        this.tips3 = true;
      } else {
        this.tips3 = false;
      }
    },
    reg4() {
      var str = this.phone_number;
      console.log(str);
      var restr = this.t4;
      if (!restr.test(str) || this.phone_number == "") {
        this.tips4 = true;
      } else {
        this.tips4 = false;
      }
    },
    reg5() {
      var str = this.Password;
      console.log(str);
      var restr = this.t5;
      if (!restr.test(str) || this.Password == "") {
        this.tips5 = true;
      } else {
        this.tips5 = false;
      }
    },
    reg6() {
      var str = this.Repassword;
      console.log(str);
      var restr = this.t6;
      if (this.Repassword !== this.Password || this.Repassword == "") {
        this.tips6 = true;
      } else {
        this.tips6 = false;
      }
    },
    register() {
      let param = new URLSearchParams();
      param.append("", "");
      // this.$axios('http://47.94.236.249:8080/register',{
      this.$axios({
        methods: "post",
        url: "http://47.94.236.249:8080/register",
        data: param
      }).then(data => {
        console.log(data);
      });
    }
  }
};
</script>

<style lang="less" scoped="">
@import "../../../../common/css/index.less";
.ivu-select {
  .w(300);
}
span {
  font-size: @fontSize-L;
}
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
  font-size: @fontSize-L;
  .header {
    .w(375);
    .h(50);
    .l_h(50);
    text-align: center;
    border-bottom: 1px solid #77706c;
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
        .top(20);
        .left(24);
      }
    }
  }

  .register_input {
    .ivu-form .ivu-form-item-label {
      font-size: @fontSize-xL;
    }
    .parties_name,
    .Pname,
    .phone,
    .Password,
    .Repassword {
      .w(300);
      .h(28);
      margin-top: 20px;
      border: none;
      outline: none;
      border-bottom: 1px solid #77706c;
    }
    .phone_number {
      .w(220);
      .h(28);
      margin-top: 20px;
      border: none;
      outline: none;
    }
  }
  #tips {
    .w(150);
    .h(20);
    font-size: @fontSize-s;
    color: @fontColornormal;
    position: absolute;
    color: red;
    .left(136);
  }
  .tips1 {
    .top(67);
  }
  .tips2 {
    .top(124);
  }
  .tips3 {
    .top(176);
  }
  .tips4 {
    .top(248);
  }
  .tips5 {
    .top(299);
  }
  .tips6 {
    .top(360);
  }
  button {
    margin-top: 80px;
    border: none;
    .w(320);
    .h(45);
    color: #fff;
    background: #3297f5;
    font-size: @fontSize-xL;
  }
}
</style>
