<template>
  <div id="mine">
    <router-view></router-view>
    <header class="header">
      <div>
        <img src="../../common/img/ban3.png" alt>
        <p class="choose" @click="goindex">登录 / 注册</p>
      </div>
    </header>
    <ul class="items">
      <li @click="goSetting()">设置</li>
      <div id="iconfont1">
        <span class="iconfont">&#xe64a;</span>
      </div>
      <li @click="goNotice()">消息通知</li>
      <div id="iconfont2">
        <span class="iconfont">&#xe64a;</span>
      </div>
      <li @click="jugdeNotice()">关于人民法院公告</li>
      <div id="iconfont3">
        <span class="iconfont">&#xe64a;</span>
      </div>
      <li @click="sever()">客服</li>
      <div id="iconfont4">
        <span class="iconfont">&#xe64a;</span>
      </div>
    </ul>
    <footer>退出登录</footer>
    <ul class="botm">
      <Footer></Footer>
    </ul>
  </div>
</template>

<script>
import Footer from "@/components/common/footer/footer";
export default {
  components: {
    Footer
  },
  methods: {
    goSetting() {
      this.$router.push({ name: "settingDetail" });
    },
    goNotice() {
      this.$router.push({ name: "msgNoRead" });
    },
    jugdeNotice() {
      this.$router.push({ name: "jugdeNotice" });
    },
    sever() {
      this.$router.push({ name: "sever" });
    },
    goindex() {
      this.$router.push({ name: "register" });
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../common/css/index.less";
@import "../../common/font/myfont.css";
#mine {
  .w(375);
  // position: absolute;
  // top: 0;
  // bottom: 0;
  .header {
    .w(375);
    .h(163);
    background: url("../../common/img/ban.png") no-repeat;
    div {
      color: #fff;
      font-size: @fontSize-xL;
      margin-bottom: 10px;
      img {
        .w(57);
        .h(57);
        position: absolute;
        z-index: 100;
        left: 45%;
        top: 4%;
      }
      .choose {
        .w(115);
        .h(22);
        .l_h(22);
        color: #fff;
        font-size: @fontSize-m;
        border: 1px solid #fff;
        text-align: center;
        position: absolute;
        left: 38%;
        top: 14%;
        border-radius: 10px;
      }
    }
  }
  .items {
    .w(375);
    .h(40);
    .l_h(40);
    li {
      .w(375);
      font-size: @fontSize-m;
      color: #000;
      background: #fff;
      margin-bottom: 10px;
      padding-left: 24px;
    }
    #iconfont1 {
      .w(40);
      .h(40);
      position: absolute;
      .top(173);
      right: 0px;
      .iconfont {
        .w(15);
        .h(15);
        display: inline-block;
      }
    }
    #iconfont2 {
      .w(40);
      .h(40);
      position: absolute;
      .top(227);
      right: 0px;
    }
    #iconfont3 {
      .w(40);
      .h(40);
      position: absolute;
      .top(272);
      right: 0px;
    }
    #iconfont4 {
      .w(40);
      .h(40);
      position: absolute;
      .top(323);
      right: 0px;
    }
  }
  footer {
    .w(300);
    .h(40);
    .l_h(40);
    text-align: center;
    background: rgba(36, 147, 237);
    color: #fff;
    font-size: @fontSize-m;
    margin: 0 auto;
    position: relative;
    bottom: -417px;
  }
}
</style>
