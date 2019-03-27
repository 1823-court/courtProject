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

//---login
import ForgetPassword from "../components/registerOrLogin/home/login/forgetPassword";
const router = new Router({
  routes: [
		{
		  path: "/register",
		  name: "register",
		  component: Register,
		},
		{
		path: "/registerJudge",
		name: "registerJudge",
		component: RegisterJudge,
		},
			{
		path: "/registerParty",
		name: "registerParty",
		component: RegisterParty,
		},
					{
		path: "/registerAgreement",
		name: "registerAgreement",
		component: RegisterAgreement,
		},
		{
		  path: "/login",
		  name: "login",
		  component: Login
		},
				{
		path: "/forgetPassword",
		name: "forgetPassword",
		component: ForgetPassword,
		},
		{
		  path: "/customerService",
		  name: "customerService",
		  component: CustomerService
		},
    {
      path: "/",
      redirect: "/register"
    }
  ]
});
export default router;