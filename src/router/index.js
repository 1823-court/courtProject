import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
// ------------------------------LennieGao--------------------------------------------
import Register from "../components/registerOrLogin/register";
import Login from "../components/registerOrLogin/login";
import CustomerService from "../components/registerOrLogin/customerService";
// ---register
import RegisterJudge from "../components/registerOrLogin/home/register/registerJudge";
import RegisterParty from "../components/registerOrLogin/home/register/registerParty";
import RegisterAgreement from "../components/registerOrLogin/home/register/registerAgreement";
import payPending from "../components/privyPage/home/payPending";
import noticing from "../components/privyPage/home/noticing";
import noticed from "../components/privyPage/home/noticed";
import privyindex from "../components/privyPage/index";
import privysearch from "../components/privyPage/search.vue";
import privymine from "../components/privyPage/mine";
import payPendingDetail from "../components/privyPage/home/detail/payPendingDetail";
import noticingDetail from "../components/privyPage/home/detail/noticingDetail";
import settingDetail from "../components/privyPage/home/mineDetail/settingDetail";
import updateName from "../components/privyPage/home/mineDetail/updateName";
import psdReset from "../components/privyPage/home/mineDetail/psdReset";
import changeNum from "../components/privyPage/home/mineDetail/changeNum";
import msgNoticeDetail from "../components/privyPage/home/mineDetail/msgNoticeDetail";
import msgReaded from "../components/privyPage/home/mineDetail/msgReaded";
import msgNoRead from "../components/privyPage/home/mineDetail/msgNoRead";
import jugdeNotice from "../components/privyPage/home/mineDetail/jugdeNotice";
import sever from "../components/privyPage/home/mineDetail/sever";
import ForgetPassword from "../components/registerOrLogin/home/login/forgetPassword"
import Heaving from '../components/judePage/judge/heaving.vue'
import noHeaving from '../components/judePage/judge/noHeaving.vue'
import Detail from 'components/judePage/judge/detail/detail.vue'
import Pay from 'components/judePage/judge/pay/pay.vue'
import Judge from 'components/judePage/judge/judge.vue'
import Search from "components/judePage/search/search.vue"
import Upload from 'components/judePage/upload/upload.vue'
import Mine from 'components/judePage/mine/mine.vue'

export default new Router({
  routes: [
    //登录
    {
      path: "/register",
      name: "register",
      component: Register
    },
    {
      path: "/registerJudge",
      name: "registerJudge",
      component: RegisterJudge
    },
    {
      path: "/registerParty",
      name: "registerParty",
      component: RegisterParty
    },
    {
      path: "/registerAgreement",
      name: "registerAgreement",
      component: RegisterAgreement
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/forgetPassword",
      name: "forgetPassword",
      component: ForgetPassword
    },
    {
      path: "/customerService",
      name: "customerService",
      component: CustomerService
    },
    {
      path: "/",
      redirect: "/register"
    },
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
      component: privymine,
      children: [
        {
          path: "settingDetail",
          name: "settingDetail",
          component: settingDetail,
          children: [
            {
              path: "updateName",
              name: "updateName",
              component: updateName
            },
            {
              path: "psdReset",
              name: "psdReset",
              component: psdReset
            },
            {
              path: "changeNum",
              name: "changeNum",
              component: changeNum
            }
          ]
        },
        {
          path: "msgNoticeDetail",
          name: "msgNoticeDetail",
          component: msgNoticeDetail,
          children: [
            {
              path: "msgReaded",
              name: "msgReaded",
              component: msgReaded
            },
            {
              path: "msgNoRead",
              name: "msgNoRead",
              component: msgNoRead
            },
            {
              path: "/",
              redirect: "/privymine/msgNoticeDetail/msgNoRead"
            }
          ]
        },
        {
          path: "jugdeNotice",
          name: "jugdeNotice",
          component: jugdeNotice
        },
        {
          path: "sever",
          name: "sever",
          component: sever
        },
        {
          path: "noHeaving",
          name: "noHeaving",
          component: noHeaving,
          children: [
            {
              path: "upload",
              name: "upload",
              component: Upload
            }
          ]
        }
      ]
    },
    {
      path: "/judge",
      name: "judge",
      component: Judge,
      children: [
        {
          path: "heaving",
          name: "heaving",
          component: Heaving,
          children: [
            {
              path: "detail",
              component: Detail,
              children: [
                {
                  path: "pay",
                  component: Pay
                }
              ]
            }
          ]
        },
        {
          path: "noHeaving",
          name: "noHeaving",
          component: noHeaving
        },
        {
          path: "/",
          redirect: "/judge/heaving"
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
    }
  ]
});

//{
// path: "/",
// redirect: "/privyindex",
// 模板

//},   
