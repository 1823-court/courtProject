<template>
  <div class="footer">
    <router-link tag="li" to="/privyindex" active-class="sel">
      <img src="@/common/img/footer1.png" alt>首页
    </router-link>

    <router-link tag="li" to="/privysearch" active-class="sel">
      <img src="@/common/img/foot2.png" alt>搜索
    </router-link>
    <router-link tag="li" to="/privymine" active-class="sel">
      <img src="@/common/img/footer3.png" alt>我的
    </router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sel: false
    };
  }
};
</script>

<style lang="less" scoped>
@import "~@/common/css/index.less";
.footer {
  .w(375);
  .h(65);
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #fff;
  border-top: 1px solid #bbb;
  img {
    .w(25);
    .h(25);
    margin-left: 0.12rem;
  }
  .sel {
    color: @indexFontcolor;
  }
  li {
    font-size: @fontSize-L;
    color: @fontColornormal;
  }
}
</style>
