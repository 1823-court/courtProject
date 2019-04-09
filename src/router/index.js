import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
// ------------------------------LennieGao--------------------------------------------

const payPending = () => import("../components/privyPage/home/payPending");
const noticing = () => import("../components/privyPage/home/noticing");
const noticed = () => import("../components/privyPage/home/noticed");
const privyindex = () => import("../components/privyPage/index");
const privymine = () => import("../components/privyPage/mine");
const privysearch = () => import("../components/privyPage/search.vue");
const payPendingDetail = () =>
  import("../components/privyPage/home/detail/payPendingDetail");
const noticingDetail = () =>
  import("../components/privyPage/home/detail/noticingDetail");
const nopayingDetail = () =>
  import("../components/privyPage/home/detail/nopayingDetail");
const settingDetail = () =>
  import("../components/privyPage/home/mineDetail/settingDetail");
const updateName = () =>
  import("../components/privyPage/home/mineDetail/updateName");
const psdReset = () =>
  import("../components/privyPage/home/mineDetail/psdReset");
const changeNum = () =>
  import("../components/privyPage/home/mineDetail/changeNum");
const msgNoticeDetail = () =>
  import("../components/privyPage/home/mineDetail/msgNoticeDetail");
const msgReaded = () =>
  import("../components/privyPage/home/mineDetail/msgReaded");
const msgNoRead = () =>
  import("../components/privyPage/home/mineDetail/msgNoRead");
const jugdeNotice = () =>
  import("../components/privyPage/home/mineDetail/jugdeNotice");
const sever = () => import("../components/privyPage/home/mineDetail/sever");
const ForgetPassword = () =>
  import("../components/registerOrLogin/home/login/forgetPassword");
const Heaving = () => import("../components/judePage/judge/heaving.vue");
const noHeaving = () => import("../components/judePage/judge/noHeaving.vue");
const Detail = () => import("components/judePage/judge/detail/detail.vue");
const Pay = () => import("components/judePage/judge/pay/pay.vue");
const Judge = () => import("components/judePage/judge/judge.vue");
const Search = () => import("components/judePage/search/search.vue");
const Upload = () => import("components/judePage/upload/upload.vue");
const Mine = () => import("components/judePage/mine/mine.vue");
const Footer = () => import("@/components/common/footer/footer");

import Register from "../components/registerOrLogin/register";
import CustomerService from "../components/registerOrLogin/customerService";
// ---register
import RegisterJudge from "../components/registerOrLogin/home/register/registerJudge";
import RegisterParty from "../components/registerOrLogin/home/register/registerParty";
import RegisterAgreement from "../components/registerOrLogin/home/register/registerAgreement";
import RegisterSpecification from "../components/registerOrLogin/home/register/registerSpecification";


// ---login
import LoginJudge from "../components/registerOrLogin/home/login/loginJudge";
import LoginParty from "../components/registerOrLogin/home/login/loginParty";
import LoginShortMessage from "../components/registerOrLogin/home/login/loginShortMessage";
import LoginPartyMessage from "../components/registerOrLogin/home/login/loginPartyMessage"

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
		  path: "/registerSpecification",
		  name: "registerSpecification",
		  component: RegisterSpecification,
		},
		

		//----------------------login--------
		  {
		  path: "/loginJudge",
		  name: "loginJudge",
		  component: LoginJudge
		},
		  {
		  path: "/loginParty",
		  name: "loginParty",
		  component: LoginParty
		},
		  {
		  path: "/loginShortMessage",
		  name: "loginShortMessage",
		  component: LoginShortMessage
		},
		 {
		  path: "/loginPartyMessage",
		  name: "loginPartyMessage",
		  component: LoginPartyMessage
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
      // component: privyindex,
      // beforeEnter:(to,from,next)=>{

      // },
      components: {
        // 命名视图
        default: privyindex,
        footer: Footer
      },
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
          component: noticed,
          children: [
            {
              path: "nopayingDetail",
              name: "nopayingDetail",
              component: nopayingDetail
            }
          ]
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
      // component: privysearch
      components: {
        // 命名视图
        default: privysearch,
        footer: Footer
      }
    },
    {
      path: "/privymine",
      name: "privymine",
      // component: privymine,
      components: {
        // 命名视图
        default: privymine,
        footer: Footer
      },
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
