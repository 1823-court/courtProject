<template>
  <div id="contains">
    <header>更换手机号</header>
    <img src="../../../../common/img/arrow-left.png" class="icons" @click="back">
    <section>
      <img class="icon" src="../../../../common/img/shouji.png">
      <p>您当前的手机号为152***3265</p>
      <br>
      <p>更改后个人信息不变，下次可以使用新手机号登录</p>
    </section>

    <article>
      <div class="top">
        <input type="text" placeholder="请输入手机号">
        <span>获取验证码</span>
      </div>
      <div class="btm">
        <input type="text" placeholder="请输入验证码">
      </div>
    </article>
    <footer>确认更换</footer>
    <p class="tip">一个月之内只允许更换一次手机号</p>
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
  background: #fff;
  z-index: 1000;
  header {
    .w(375);
    .h(45);
    .l_h(45);
    text-align: center;
    background: rgba(36, 147, 237);
    color: #fff;
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
  section {
    .w(345);
    font-size: @fontSize-s;
    color: #000;
    margin: 40px auto;
    text-align: center;
    .icon {
      .w(24);
      .h(24);
      margin: 10px auto;
    }
  }
  article {
    .w(375);
    margin-bottom: 90px;
    .top {
      .w(300);
      .h(45);
      .l_h(45);
      margin: 0 auto;
      text-align: center;
      input {
        .w(146);
        .h(33);
        margin-right: -5px;
        padding: 0 2px;
        border: 1px solid rgb(141, 141, 141);
      }
      span {
        display: inline-block;
        .w(78);
        .h(33);
        .l_h(33);
        text-align: center;
        background: rgba(36, 147, 237);
        color: #fff;
        font-size: @fontSize-s;
        border-radius: 5px;
        margin: 0 auto;
      }
    }
    .btm {
      .w(300);
      .h(45);
      .l_h(45);
      margin: 0 auto;
      text-align: center;
      input {
        .w(230);
        .h(33);
        margin-top: 10px;
        border: 1px solid rgb(141, 141, 141);
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
    margin: 0 auto;
    border-radius: 5px;
  }
  .tip {
    .w(345);
    font-size: @fontSize-s;
    color: #000;
    margin: 10px auto;
    text-align: center;
  }
}
</style>
