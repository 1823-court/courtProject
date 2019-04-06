<template>
  <div id="contains">
    <p class="time">2017-06-06</p>
    <div class="content" @click="goDetail()">
      <div class="tit">
        <h4>公告名称：公司法人变更</h4>
        <p>公告类别：开庭传票</p>
        <p>案号（2017）桂0620民初668号&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
        <p>
          当事人：
          <span>张三三</span>
        </p>
      </div>
      <img src="../../../common/img/content1.png">
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goDetail() {
      this.$router.push({ name: "noticingDetail" });
    }
  },
  components: {}
};
</script>
<style lang="less" scoped>
@import "../../../common/css/index.less";
@import "../../../common/font/myfont.css";
#contains {
  .w(375);
  .time {
    .w(90);
    .h(25);
    .l_h(25);
    text-align: center;
    font-size: @fontSize-m;
    color: @fontColornormal;
  }
  .content {
    .w(375);
    .h(128);
    margin-top: 8px;
    padding-top: 10px;
    background: #fff;
    font-size: @fontSize-s;
    display: flex;
    h4 {
      color: #333;
      font-size: @fontSize-m;
    }
    p {
      color: #666;
      font-size: @fontSize-s;
      span {
        color: @indexFontcolor;
      }
    }
    img {
      .w(120);
      .h(105);
      margin-right: 16px;
    }
    .tit {
      padding-top: 15px;
      .w(249);
      .l_h(20);
      padding-left: 28px;
    }
  }
}
</style>
