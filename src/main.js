// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from './axios'
import './common/css/reset.css'
import './common/js/flexble.js'
import store from  './store'
Vue.config.productionTip = false
Vue.prototype.$axios = Axios
//图片懒加载
import LazyLoad from 'vue-lazyload'
Vue.use(LazyLoad, {
//   error: require('@/assets/logo.png'),  //错误的时候显示图片
//   loading: require('@/assets/logo.png'),  // 正在加载中的图片
//   attempt: 1  // 每次加载几张
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
	store,
  components: { App },
  template: '<App/>'
})
