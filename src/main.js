import Vue from "vue";
import App from "./App";
import "./common/css/reset.css";
import Font from "./common/font/iconfont";
import Demo from "./common/font/demo.css";
import router from "./router";
import "jquery";
import "../node_modules/swiper/dist/css/swiper.min.css";
import Axios from "./axios";
import axios from "./axios";
import store from "./store";
Vue.prototype.$axios = Axios;
import iView from "iview";
import querystring from "querystring";
import "iview/dist/styles/iview.css";
import $ from "jquery";
Vue.config.productionTip = false;
Vue.use(iView);
//图片懒加载
import LazyLoad from "vue-lazyload";
Vue.use(LazyLoad, {
  //   error: require('@/assets/logo.png'),  //错误的时候显示图片
  //   loading: require('@/assets/logo.png'),  // 正在加载中的图片
  //   attempt: 1  // 每次加载几张
});
/* eslint-disable no-new */

const baseURL = process.env.NODE_ENV === "production" ? "/" : "/api";
const http = axios.create({
  baseURL: baseURL,
  timeout: 10000,
  withCredentials: true,
  headers: { "X-Requested-With": "XMLHttpRequest" },
  transformRequest: [
    data => {
      return querystring.stringify(data);
    }
  ]
});
Vue.prototype.$http = http;
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});
