<template>
  <div id="contain">
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
  </div>
</template>

<script>
export default {
  methods: {
    back() {
      this.$router.go(-1);
    }
  },
  components: {}
};
</script>

<style lang="less" scoped>
@import "../../../../common/css/index.less";
@import "../../../../common/font/myfont.css";
#contain {
  .w(375);
  position: absolute;
  top: 0px;
  bottom: 0;
  background: @mybgColor;
  z-index: 1300;
  header {
    .w(375);
    .h(48);
    .l_h(48);
    text-align: center;
    h3 {
      font-size: @fontSize-xL;
      font-weight: 400;
    }
    .icons {
      .w(24);
      .h(24);
      position: absolute;
      top: 10px;
      left: 5px;
    }
  }
  .line {
    .w(350);
    .h(35);
    padding-left: 15px;
    margin-top: 16px;
    display: flex;
    justify-content: space-around;
    p {
      .w(70);
      .h(35);
      .l_h(35);
      font-size: @fontSize-m;
      color: @fontColornormal;
    }
    select {
      .w(250);
      .h(35);
      border-radius: 6px;
      font-size: @fontSize-s;
    }
    input {
      .w(250);
      .h(35);
      font-size: @fontSize-s;
      color: @fontColornormal;
      border-radius: 5px;
      border: 1px solid #ddd;
      outline: none;
    }
  }
}
</style>
