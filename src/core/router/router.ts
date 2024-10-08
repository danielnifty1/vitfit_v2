
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
// import isAuthenticated from "../../helpers/authenticate";
// nav components
const NavBar=()=>import("../../components/HeaderFile.vue")
const HomeView=()=>import( "../../components/HomeView.vue");
const programslide=()=>import( "../../components/programslide.vue");
const testimonialview=()=>import( "../../components/testimonialView.vue");
const FooterFile=()=>import("../../components/FooterFile.vue");
const ServicePage=()=>import("../../components/ServicePage.vue");
const Programpage=()=>import( "../../components/ProgramPage.vue");
const ProgramDetailpage=()=>import( "../../components/ProgramDetailsPage.vue");


const AboutPage=()=>import( "../../components/AboutPage.vue");
const Bookappointment=()=>import( "../../components/BookAppointmentPage.vue");
const Bookappointment2=()=>import( "../../components/BookAppointmentPage2.vue");
const Bookappointment3=()=>import( "../../components/BookAppointmentPage3.vue");

const successfullPage=()=>import ("../../components/successPage.vue")




const contactpage=()=>import( "../../components/ContactPage.vue");
// const buttons=()=>import("../../components/Buttons.vue");
// const BreadCrumb=()=>import("../../components/BreadCrumb.vue");

const Regform=()=>import("../../components/SignupPage.vue");
const LoginPage=()=>import("../../components/LoginPage.vue");
// const OtpPage=()=>import("../../components/OtpPage.vue");


const routes: Array<RouteRecordRaw> = [
  { path: "/", redirect: "/home" },
//   { path: "/home", name: "page.home", components: {default:HomeView, NavBar: NavBar,programslide:programslide,FooterPage: FooterFile } },
  { path: "/home", name: "page.home", components: {default:HomeView, NavBar: NavBar,programslide:programslide,testimonialview:testimonialview,FooterFile:FooterFile}, },
  { path: "/services", name: "services", components: {default:ServicePage, NavBar: NavBar,FooterFile: FooterFile } },
  { path: "/programs", name: "programs", components: {default:Programpage, NavBar: NavBar,FooterFile: FooterFile } },
  { path: "/programdetail", name: "programs Details", components: {default:ProgramDetailpage, NavBar: NavBar,FooterFile: FooterFile } },

  { path: "/about", name: "About Us", components: {default:AboutPage, NavBar: NavBar,FooterFile: FooterFile } },


//   { path: "/services",name:"Programs", components: { default: Servicespage, NavBar: HeaderFile, banner: BreadCrumb, FooterPage: FooterFile, } },
   { path: "/contact",name:"Contact", components: { default: contactpage,NavBar: NavBar, FooterFile: FooterFile, } },
   { path: "/appointment",name:"Book Appointment", components: { default: Bookappointment,NavBar: NavBar, FooterFile: FooterFile, } },
   { path: "/appointment2",name:"Book Appointment Step 2", components: { default: Bookappointment2,NavBar: NavBar, FooterFile: FooterFile, } },
   { path: "/appointment3",name:"Book Appointment Step 3", components: { default: Bookappointment3,NavBar: NavBar, FooterFile: FooterFile, } },

   { path: "/successful",name:"Book Appointment Successful", components: { default: successfullPage,NavBar: NavBar, FooterFile: FooterFile, } },
//   { path: "/signup", components: { default: Regform, NavBar: HeaderFile, FooterPage: FooterFile,buttons:buttons } },
//    { path: "/verify-email",name:"verify", components: { default: OtpPage, NavBar: HeaderFile, FooterPage: FooterFile, } },

  { path: "/login", components: {default:LoginPage,NavBar:NavBar,FooterFile:FooterFile  }},
  { path: "/signup", components: { default: Regform, NavBar:NavBar,FooterFile: FooterFile } },
//   { path: "/register", components: { default: RegisterPage, banner: banner, FooterPage: FooterPage, } },

  // { path: "/secure/transfer", components: { dashheader: dashheader, sideBar:sideBar,default:transfer,baldash:dashboard  }},
  {
    path: "/:catchAll(.*)",
    // components: { default: HomeView, FooterPage: FooterFile, NavBar: NavBar } ,
    components: { default: HomeView, NavBar: NavBar } ,

  },

];

const history = createWebHistory();
// const authenticate=isAuthenticated()
const router = createRouter({
  history,
  routes,

  linkActiveClass:'activepage',
});

router.beforeEach((route) => {
  if (route.meta && route.meta.requireAuth == true) {
 
    // if (authenticate == true) {
    //   return;
    // } else {
    //   return (route.path = "/login");
    // }
  } else {
    return;
  }
});

export default router;
