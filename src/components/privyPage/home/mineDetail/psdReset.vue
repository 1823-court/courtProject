<template>
  <div id="contains">
    <header>密码重置</header>
    <img src="../../../../common/img/arrow-left.png" class="icons" @click="back">

    <form action>
      <p>
        <input placeholder="请输入手机号" type="text">
      </p>
      <div class="top">
        <input type="text" placeholder="请输入手机号">
        <span>获取验证码</span>
      </div>
      <p>
        <input placeholder="请输入旧密码" type="password">
        <img class="eyes" src="../../../../common/img/yanjing.png">
      </p>
      <p>
        <input placeholder="请输入新密码" type="password">
        <img class="eyes" src="../../../../common/img/yanjing.png">
      </p>
      <p>
        <input placeholder="请确认密码" type="password">
        <img class="eyes" src="../../../../common/img/yanjing.png">
      </p>
    </form>
    <footer>重置</footer>
  </div>
</template>

<script>
export default {
  methods: {
    back() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../../../common/css/index.less";
@import "../../../../common/font/myfont.css";
#contains {
  .w(375);
  position: absolute;
  top: 0;
  bottom: 0;
  background: @mybgColor;
  z-index: 1002;
  header {
    .w(375);
    .h(45);
    .l_h(45);
    text-align: center;
    font-size: @fontSize-xL;
    font-weight: 500;
    margin-bottom: 10px;
  }
  .icons {
    .w(15);
    .h(15);
    position: absolute;
    top: 16px;
    left: 20px;
  }

  form {
    .w(345);
    margin: 22px auto;
    .top {
      .w(345);
      .h(45);
      .l_h(45);
      margin: 8px auto;
      text-align: center;
      input {
        .w(246);
        .h(40);
        border-radius: 5px;
        border: 1px solid rgb(141, 141, 141);
      }
      span {
        display: inline-block;
        .w(78);
        .h(40);
        .l_h(40);
        text-align: center;
        background: rgba(36, 147, 237);
        color: #fff;
        font-size: @fontSize-s;
        border-radius: 5px;
        margin: 0 auto;
      }
    }
    p {
      .w(345);
      text-align: center;
      position: relative;
      input {
        .w(330);
        .h(40);
        margin-right: 8px;
        padding: 0 2px;
        border: 1px solid rgb(141, 141, 141);
        border-radius: 5px;
      }
      .eyes {
        .w(20);
        .h(20);
        position: absolute;
        top: 27px;
        right: 25px;
      }
    }
  }
  footer {
    .w(180);
    .h(40);
    .l_h(40);
    text-align: center;
    background: rgba(36, 147, 237);
    color: #fff;
    font-size: @fontSize-m;
    margin: 60px auto;
    border-radius: 5px;
  }
}
</style>
