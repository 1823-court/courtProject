<template>
  <div id="contains">
    <header>
      <img src="../../../../common/img/arrow-left.png" class="icons" @click="back">
      <h3>公告详情</h3>
    </header>
    <article>
      <p>版面照片：</p>
      <img class="pic" src="../../../../common/img/con1.png">
      <img class="pic" src="../../../../common/img/con1.png">
      <img class="pic" src="../../../../common/img/con1.png">
    </article>
    <section>
      <div class="line">
        <p class="tit">公告类别：</p>
        <p class="btomline">
          <span>开庭传票</span>
        </p>
      </div>
      <div class="line">
        <p class="tit">法院名称：</p>
        <p class="btomline">
          <span>北京朝阳第一法院</span>
        </p>
      </div>
      <div class="line">
        <p class="tit">案件号：</p>
        <p class="btomline">
          <span>(2017)桂0620民初668号</span>
        </p>
      </div>
      <div class="line">
        <p class="tit">当事人：</p>
        <p class="btomline">
          <span>张三三</span>
        </p>
      </div>
      <div class="line">
        <p class="tit">公告进展：</p>
        <p class="lastline">
          <span class>公告3天</span>
        </p>
      </div>
    </section>
    <footer>
      <p @click="goPay()">去支付</p>
    </footer>
  </div>
</template>

<script>
export default {
  methods: {
    back() {
      this.$router.go(-1);
      // this.$router.push("/privyindex/noticing");
    },
    goPay() {
      this.$router.push({ name: "payPendingDetail" });
    }
  },
  components: {}
};
</script>

<style lang="less" scoped>
@import "../../../../common/css/index.less";
@import "../../../../common/font/myfont.css";
#contains {
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 1300;
  background: @mybgColor;
  header {
    .w(375);
    .h(46);
    .l_h(46);
    text-align: center;
    h3 {
      font-size: @fontSize-xL;
      font-weight: 400;
    }
    .icons {
      .w(10);
      .h(10);
      position: absolute;
      top: 20px;
      left: 24px;
    }
  }
  article {
    .w(340);
    .h(200);
    margin: 20px auto;
    p {
      font-size: @fontSize-L;
      color: rgb(51, 51, 51);
      margin-bottom: 18px;
    }
    .pic {
      .w(100);
      .h(149);
      margin-right: 12px;
      float: left;
    }
  }
  section {
    .w(340);
    .h(250);
    margin: 20px auto;
    .line {
      .w(340);
      .h(45);
      display: flex;
      justify-content: center;
      align-items: center;
      .tit {
        .w(86);
        .h(28);
        .l_h(28);
        text-align: left;
        margin-bottom: -20px;
        font-size: @fontSize-L;
        color: rgb(51, 51, 51);
      }
      .btomline {
        .w(230);
        .h(28);
        border-bottom: 1px solid rgb(216, 216, 216);
        text-align: center;
        font-size: @fontSize-m;
        color: rgb(102, 102, 102);
        span {
          position: relative;
          bottom: -8px;
          margin: 0 auto;
          display: inline-block;
          text-align: center;
        }
      }
      .lastline {
        .w(230);
        .h(28);
        text-align: left;
        font-size: @fontSize-m;
        color: rgb(102, 102, 102);
        span {
          position: relative;
          bottom: -16px;
          margin: 0 auto;
          display: inline-block;
        }
      }
    }
  }
  footer {
    p {
      .w(269);
      .h(40);
      margin: 0 auto;
      background: rgba(36, 147, 237);
      .l_h(40);
      text-align: center;
      color: #fff;
      font-size: @fontSize-L;
      margin-top: 25px;
    }
  }
}
</style>