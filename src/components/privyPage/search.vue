<template>
  <div id="search">
    <header>搜索</header>
    <input type="text" class="searchs" placeholder="请输入查询案号 / 姓名">
    <img src="@/common/img/mysousuo.png" class="mysousuo">
    <article>
      <p class="title">已刊登最新公告</p>
      <div class="content" @click="goDetail()">
        <div class="tit">
          <h4>公告名称：公司法人变更</h4>
          <p>公告类别：开庭传票</p>

          <p>
            当事人：
            <span>张三三</span>
          </p>
          <p>案号（2017）桂0620民初668号&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
        </div>
        <img src="@/common/img/content1.png">
      </div>
    </article>
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
    goDetail() {
      this.$router.push({ name: "payPendingDetail" });
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../common/css/index.less";
@import "../../common/font/myfont.css";
#search {
  .w(375);
  header {
    .w(375);
    .h(45);
    .l_h(45);
    background: @indexFontcolor;
    font-size: @fontSize-xL;
    color: #fff;
    font-weight: 500;
    text-align: center;
  }
  .mysousuo {
    position: absolute;
    .w(25);
    .h(25);
    top: 67px;
    right: 26px;
  }
  .searchs {
    .w(347);
    .h(35);
    position: relative;
    background: #fff;
    margin-left: 3.5%;
    border-radius: 5px;
    border: 0;
    outline: 0;
  }
  ::-webkit-input-placeholder {
    font-size: @fontSize-m;
    color: #666;
  }
  article {
    .w(375);
    .title {
      .w(300);
      .h(35);
      .l_h(35);
      text-align: center;
      margin: 0 auto;
      color: @indexFontcolor;
      font-size: @fontSize-xL;
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
}
</style>
