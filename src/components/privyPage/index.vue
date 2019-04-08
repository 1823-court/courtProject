<template>
  <div id="wraps">
    <SearchInput></SearchInput>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in imgs" :key="index">
          <img :src="item.url" class="slidepic">
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
    <div class="head">
      <router-link tag="div" to="/privyindex/payPending" active-class="sels">待付费</router-link>
      <router-link tag="div" to="/privyindex/noticing" active-class="sels">待付费公告</router-link>
      <router-link tag="div" to="/privyindex/noticed" active-class="sels">已公告</router-link>
    </div>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Swiper from "swiper";
import Footer from "@/components/common/footer/footer";
import SearchInput from "@/components/common/searchInput/searchInput";
export default {
  data() {
    return {
      imgs: []
    };
  },
  components: {
    Footer,
    SearchInput
  },
  methods: {
    getdata() {
      setTimeout(() => {
        this.imgs = [
          { url: require("@/common/img/banner1.png") },
          { url: require("@/common/img/banner2.png") },
          { url: require("@/common/img/banner3.png") }
        ];
      }, 10);
      // this.$nextTick(() => {
      //   this.initswiper();
      // });
    },
    initswiper() {
      // 在挂载完成的钩子函数初始化轮播图 不能在created里初始化 因为这里涉及dom操作 created里还没有dom元素
      var mySwiper = new Swiper(".swiper-container", {
        loop: true, // 循环模式选项
        autoplay: true,
        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination"
        }
      });
    }
  },
  created() {
    this.getdata();
  },
  updated() {
    this.initswiper();
  }
};
</script>

<style lang="less" scoped>
@import "../../common/css/index.less";
#wraps {
  .w(375);
  background: @mybgColor;
  .swiper-wrapper {
    .w(375);
    .h(230);
    img {
      .w(375);
      .h(230);
    }
    .swiper-pagination-bullet-active {
      background: #fff !important;
    }
  }
  .head {
    .w(375);
    .h(35);
    .l_h(35);
    font-size: @fontSize-m;
    color: #666;
    background: @whiteColor;
    display: flex;
    div {
      .w(130);
      text-align: center;
    }
    .sels {
      background: #fff;
      color: @indexFontcolor;
    }
  }
}
</style>
