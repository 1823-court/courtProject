import Vue from 'vue'
import App from "./App";
import "./common/css/reset.css";
import Font from './common/font/iconfont';
import Demo from './common/font/demo.css';
import router from "./router";
import'jquery';


import Axios from './axios'
import store from  './store'
Vue.prototype.$axios = Axios
Vue.config.productionTip = false;

//图片懒加载
import LazyLoad from 'vue-lazyload'
Vue.use(LazyLoad, {
//   error: require('@/assets/logo.png'),  //错误的时候显示图片
//   loading: require('@/assets/logo.png'),  // 正在加载中的图片
//   attempt: 1  // 每次加载几张
})
/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: {App},
  template: "<App/>"
});
