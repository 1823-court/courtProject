<template>
  <div id="contains">
    <header>修改用户名</header>
    <img src="../../../../common/img/arrow-left.png" class="icons" @click="back">
    <ul class="wrap">
      <p>您的原用户名是：公道自在人心</p>
      <input type="text" placeholder="请输入您的新用户名">
    </ul>
     <footer>修改</footer>
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
    background: rgb(175, 97, 49);
    color: #fff;
    font-size: @fontSize-xL;
    font-weight: 500;
    margin-bottom: 10px;
  }
  .icons {
    .w(24);
    .h(24);
    position: absolute;
    top: 10px;
    left: 5px;
  }
  .wrap {
    .w(230);
      margin: 0 auto;
    p {
      .w(200);
      .h(22);
      .l_h(22);
      font-size: @fontSize-m;
      color: #000;
      margin-top: 60px;
      margin-bottom: 10px;
    }
    input {
    display: inline-block;
      .w(230);
      .h(40);
      box-sizing: border-box;
      padding: 0 5px;
     
    }
  }
  footer{
   .w(180);
    .h(40);
    .l_h(40);
   text-align: center;
   background: rgb(175, 97, 49);
    color: #fff;
   font-size:@fontSize-m;
   margin: 200px auto;
   border-radius: 5px;
  }
}
</style>
