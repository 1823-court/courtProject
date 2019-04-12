<template>
  <div id="contains">
    <router-view></router-view>
    <header>消息中心</header>
    <img src="../../../../common/img/arrow-left.png" class="icons" @click="back()">
    <div class="msg">
      <router-link to="/privymine/msgNoticeDetail/msgNoRead" tag="div" active-class="sel">未读消息</router-link>
      <router-link to="/privymine/msgNoticeDetail/msgReaded" tag="div" active-class="sel">已读消息</router-link>
    </div>
    <router-view></router-view>
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
  z-index: 999;
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
    .w(10);
    .h(10);
    position: absolute;
    .top(19);
    .left(25);
  }
  .msg {
    .w(345);
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 2px solid #ddd;
    div {
      .w(130);
      .h(45);
      .l_h(45);
      text-align: center;
      font-size: @fontSize-L;
      color: #000;
    }
    .sel {
      border-bottom: 2px solid #5c6bc0;
    }
  }
}
</style>
