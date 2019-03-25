import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import payPending from "../components/privyPage/home/payPending";
import noticing from "../components/privyPage/home/noticing";
import noticed from "../components/privyPage/home/noticed";

import privyindex from "../components/privyPage/index";
import privysearch from "../components/privyPage/search.vue";
import privymine from "../components/privyPage/mine";

import payPendingDetail from "../components/privyPage/home/detail/payPendingDetail";
import noticingDetail from "../components/privyPage/home/detail/noticingDetail";
const router = new Router({
  routes: [
    // 首页 搜索页 我的主页面路由
    {
      path: "/privyindex",
      name: "privyindex",
      component: privyindex,
      // 首页里三个嵌套路由
      children: [
        {
          path: "payPending",
          name: "payPending",
          component: payPending,
          // 子路由嵌套路由
          children: [
            {
              path: "payPendingDetail",
              name: "payPendingDetail",
              component: payPendingDetail
            }
          ]
        },
        {
          path: "noticing",
          name: "noticing",
          component: noticing,
          children: [
            {
              path: "noticingDetail",
              name: "noticingDetail",
              component: noticingDetail
            }
          ]
        },
        {
          path: "noticed",
          name: "noticed",
          component: noticed
        },
        {
          path: "/",
          redirect: "/privyindex/payPending"
        }
      ]
    },
    {
      path: "/privysearch",
      name: "privysearch",
      component: privysearch
    },
    {
      path: "/privymine",
      name: "privymine",
      component: privymine
    },
    {
      path: "/",
      redirect: "/privyindex"
    }
  ]
});


export default router;