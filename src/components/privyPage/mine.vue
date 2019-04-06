<template>
  <div id="mine">
    <router-view></router-view>
    <header>我的</header>
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
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../common/css/index.less";
@import "../../common/font/myfont.css";
#mine {
  .w(375);
  position: absolute;
  top: 0;
  bottom: 0;
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
      top: 46px;
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
      top: 96px;
      right: 0px;
    }
    #iconfont3 {
      .w(40);
      .h(40);
      position: absolute;
      top: 146px;
      right: 0px;
    }
    #iconfont4 {
      .w(40);
      .h(40);
      position: absolute;
      top: 196px;
      right: 0px;
    }
  }
  footer {
    .w(300);
    .h(40);
    .l_h(40);
    text-align: center;
    background: rgb(175, 97, 49);
    color: #fff;
    font-size: @fontSize-m;
    margin: 0 auto;
    position: relative;
    bottom: -417px;
  }
}
</style>
