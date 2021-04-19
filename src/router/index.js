import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "@/views/Login";
import adminIndex from "@/admin/adminIndex";
import adminBlog from "@/admin/child/adminBlog";
import adminBlogEditor from "@/admin/child/adminBlogEditor";
import adminType from "@/admin/child/adminType";
import adminTypeEditor from "@/admin/child/adminTypeEditor";
import adminUser from "@/admin/child/adminUser";
import adminUserEditor from "@/admin/child/adminUserEditor";
import BlogIndex from "@/views/BlogIndex";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Tabcontorle from "@/components/Tabcontorle";
import Blog from "@/views/Blog";
import About from "@/views/About";
import adminView from "@/admin/child/adminView";
import adminView2 from "@/admin/child/adminView2";
import Friend from "@/views/Friend";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/adminIndex",
    name: "adminIndex",
    component: adminIndex,
    children:[
      {
        path: "/adminBlog",
        name: "adminBlog",
        component: adminBlog
      },
      {
        path: "/adminBlogEditor",
        name: "adminBlogEditor",
        component: adminBlogEditor
      },
      {
        path: "/adminType",
        name: "adminType",
        component: adminType
      },
      {
        path: "/adminTypeEditor",
        name: "adminTypeEditor",
        component: adminTypeEditor
      },
      {
        path: "/adminUser",
        name: "/adminUser",
        component: adminUser
      },
      {
        path: "/adminUserEditor",
        name:"/adminUserEditor",
        component: adminUserEditor
      },
      {
        path: "/adminView",
        name:"/adminView",
        component: adminView
      },
      {
        path: "/adminView2",
        name:"/adminView2",
        component: adminView2
      },
    ]
  },
  {
    path: "/BlogIndex",
    name:"/BlogIndex",
    component: BlogIndex,
    children: [
      {
        path: "/Footer",
        name:"/Footer",
        component: Footer
      },
      {
        path: "/Header",
        name:"/Header",
        component: Header
      },
      {
        path: "/Tabcontorle",
        name:"/Tabcontorle",
        component: Tabcontorle
      },
    ]
  },
  {
    path: "/about",
    name: "/about",
    component:About
  },
  // {
  //   path: "/Blog",
  //   name: "Blog",
  //   component: Blog
  // },
  // 增加路由部分
  {
    path: "/BlogDetail/:blogId",
    component: Blog
  },
  {
    path: "/Friend",
    component: Friend,
    name: '/Friend'
  }
];

const router = new VueRouter({
  routes
});

export default router;
