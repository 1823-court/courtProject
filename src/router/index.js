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


import Heaving from '../components/judePage/judge/heaving.vue'
import noHeaving from '../components/judePage/judge/noHeaving.vue'
import Detail from 'components/common/detail/detail.vue'
import Pay from 'components/common/pay/pay.vue'

import Judge from 'components/judePage/judge/judge.vue'
import Search from 'components/judePage/search/search.vue'
import Upload from 'components/judePage/upload/upload.vue'
import Mine from 'components/judePage/mine/mine.vue'

export default new Router({

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
            },
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
        // {
        //   path: "/",
        //   redirect: "/privyindex/payPending"
        // }
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
      path: "/judge",
      name: "judge",
      component: Judge,    
      children: [
        {
          path: 'heaving',
          name: 'heaving',
          component: Heaving,
          children:[
            {
              path:'detail',
              component:Detail,
              children:[
                {
                  path:'pay',
                  component:Pay,
                }
              ]
            }
          ]       
        },
        {
          path: 'noHeaving',
          name: 'noHeaving',
          component: noHeaving,
       },
       {
        path:'/',
        redirect:'/judge/heaving'
  
      }
      ]
      
    },
    {
      path: "/search",
      name: "search",
      component: Search
    },
    {
      path: "/upload",
      name: "upload",
      component: Upload
    },
    {
      path: "/mine",
      name: "mine",
      component: Mine
    },
    //{
      // path: "/",
      // redirect: "/privyindex",
			// 模板
     
    //},   
    {
      path:'/',
      redirect:'/judge'

    }
  ]
});


