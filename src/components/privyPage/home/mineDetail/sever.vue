<template>
  <div id="contains">
    <router-view></router-view>
    <header>意见反馈</header>
    <img src="../../../../common/img/arrow-left.png" class="icons" @click="back()">
    <div class="myTxt">
      <textarea placeholder="请输入您要反馈的内容" cols="49" rows="15"></textarea>
      <div class="num">
        <p>
          手机号：
          <input type="text" placeholder="请输入您的手机号">
        </p>
      </div>
    </div>
    <footer>提交</footer>
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
  z-index: 1300;
  background: @mybgColor;
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
  .myTxt {
    .w(375);
    .h(300);
    padding-top: 20px;
    text-align: center;
    background: rgb(245, 240, 245);
    .num {
      .w(375);
      margin: 0 auto;
      p {
        color: rgb(131, 126, 126);
        font-size: @fontSize-m;
        input {
          .w(272);
          .h(30);
          border: 1px solid rgb(124, 121, 121);
        }
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
    margin: 118px auto;
    border-radius: 5px;
  }
}
</style>
