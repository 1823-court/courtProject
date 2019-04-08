<template>
  <div id="contains">
    <header>修改用户名</header>
    <span>保存</span>
    <img src="@/common/img/arrow-left.png" class="icons" @click="back">
    <div class="wrap">您的原用户名是：公道自在人心</div>
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
  background: #f5f5f5;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 1000;
  header {
    .w(375);
    .h(45);
    .l_h(45);
    text-align: center;
    font-size: @fontSize-L;
    font-weight: 500;
    margin-bottom: 10px;
    background: #fff;
  }
  span {
    font-size: @fontSize-m;
    color: rgba(36, 147, 237);
    margin-left: 100px;
    position: absolute;
    top: 13px;
    right: 20px;
  }
  .icons {
    .w(12);
    .h(12);
    position: absolute;
    top: 16px;
    left: 20px;
  }
  .wrap {
    .w(375);
    .h(45);
    .l_h(45);
    text-align: center;
    font-size: @fontSize-L;
    font-weight: 500;
    margin-bottom: 10px;
    background: #fff;
  }
}
</style>
