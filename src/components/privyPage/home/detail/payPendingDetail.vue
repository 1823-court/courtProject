<template>
  <div id="contains">
    <header>
      <img src="../../../../common/img/arrow-left.png" class="icons" @click="back">
      <h3>公告费用支付</h3>
    </header>
    <section>
      <div class="line">
        <p>所在法院：</p>
        <select>
          <option>请选择所在法院</option>
          <option>北京人民法院</option>
          <option>上海人民法院</option>
          <option>广州人民法院</option>
          <option>深圳人民法院</option>
        </select>
      </div>
      <div class="line">
        <p>当事人：</p>
        <input type="text" placeholder="请输入当事人">
      </div>
      <div class="line">
        <p>状&nbsp;&nbsp;&nbsp;&nbsp;态：</p>
        <select>
          <option>正常</option>
          <option>加急</option>
        </select>
      </div>
      <div class="line">
        <p>登报区域：</p>
        <input readonly="true" placeholder="全国性报纸">
      </div>
      <div class="line">
        <p>报&nbsp;&nbsp;&nbsp;&nbsp;社：</p>
        <select>
          <option></option>
          <option>人民日报</option>
          <option>扬州晚报</option>
        </select>
      </div>
      <div class="line">
        <p>版&nbsp;&nbsp;&nbsp;&nbsp;面：</p>
        <select>
          <option></option>
          <option>主版</option>
          <option>侧边栏</option>
        </select>
      </div>
      <div class="line">
        <p>费用标准：</p>
        <select>
          <option>费用标准</option>
          <option>222</option>
          <option>2345</option>
        </select>
      </div>
      <div class="line">
        <p>发票明细：</p>
        <input type="text" placeholder="请输入发票明细">
      </div>
      <div class="line">
        <p>寄送地址：</p>
        <input type="text" placeholder="请输入地址">
      </div>
    </section>
    <footer>
      <p>支&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;付</p>
    </footer>
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
#contains {
  .w(375);
  position: absolute;
  top: -7px;
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
      .w(10);
      .h(10);
      position: absolute;
      .top(20);
      .left(24);
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
  footer {
    p {
      .w(269);
      .h(40);
      margin: 0 auto;
      background: rgba(36, 147, 237, 0.5);
      .l_h(40);
      text-align: center;
      color: #fff;
      font-size: @fontSize-L;
      margin-top: 25px;
    }
  }
}
</style>
