import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
/* Layout */
import Layout from "@/layout";

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: "/login",
    component: () => import("@/views/login/index"),
    hidden: true,
  },

  {
    path: "/404",
    component: () => import("@/views/404"),
    hidden: true,
  },

  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: () => import("@/views/dashboard/index"),
        meta: { title: "首页概况", icon: "dashboard" },
        // title 侧边导航标题； icon 标题icon 名称
      },
    ],
  },
  {
    path: "/retail",
    component: Layout,
    redirect: "/retail",
    name: "Retail",
    meta: { title: "网络零售", icon: "el-icon-s-help" },
    children: [
      {
        path: "overview",
        name: "Overview",
        component: () => import("@/views/retail/overview"),
        meta: { title: "总体概况" },
      },
      {
        path: "realAnalyze",
        name: "RealAnalyze",
        component: () => import("@/views/retail/realAnalyze"),
        meta: { title: "实物行业分析" },
      },
      {
        path: "nonPhysical",
        name: "NonPhysical",
        component: () => import("@/views/retail/nonPhysical"),
        meta: { title: "非实物行业分析" },
      },
      {
        path: "platform",
        name: "Platform",
        component: () => import("@/views/retail/platform"),
        meta: { title: "平台分析" },
      },
    ],
  },
  {
    path: "/commerce",
    component: Layout,
    redirect: "/commerce",
    name: "Commerce",
    meta: { title: "三农电商", icon: "el-icon-s-help" },
    children: [
      {
        path: "farmerProduct",
        name: "FarmerProduct",
        component: () => import("@/views/commerce/farmerProduct"),
        meta: { title: "农产品网络零售" },
      },
      {
        path: "farmerAssets",
        name: "FarmerAssets",
        component: () => import("@/views/commerce/farmerAssets"),
        meta: { title: "农资网络零售" },
      },
    ],
  },
  {
    path: "/market",
    component: Layout,
    redirect: "/market",
    name: "Market",
    meta: { title: "市场主体", icon: "el-icon-s-help" },
    children: [
      {
        path: "enterprise",
        name: "Enterprise",
        component: () => import("@/views/market/enterprise"),
        meta: { title: "网络零售企业库" },
      },
      {
        path: "shop",
        name: "Shop",
        component: () => import("@/views/market/shop"),
        meta: { title: "网络零售店铺库" },
      },
    ],
  },
  {
    path: "/live",
    component: Layout,
    redirect: "/live",
    name: "Live",
    meta: { title: "直播分析", icon: "el-icon-s-help" },
    children: [
      {
        path: "allCases",
        name: "AllCases",
        component: () => import("@/views/live/allCases"),
        meta: { title: "总体情况" },
      },
      {
        path: "livePlatform",
        name: "LivePlatform",
        component: () => import("@/views/live/livePlatform"),
        meta: { title: "平台分析" },
      },
    ],
  },
  {
    path: "/nested",
    component: Layout,
    redirect: "/nested/menu1",
    name: "Nested",
    meta: {
      title: "Nested",
      icon: "nested",
    },
    children: [
      {
        path: "menu1",
        component: () => import("@/views/nested/menu1/index"), // Parent router-view
        name: "Menu1",
        meta: { title: "Menu1" },
        children: [
          {
            path: "menu1-1",
            component: () => import("@/views/nested/menu1/menu1-1"),
            name: "Menu1-1",
            meta: { title: "Menu1-1" },
          },
          {
            path: "menu1-2",
            component: () => import("@/views/nested/menu1/menu1-2"),
            name: "Menu1-2",
            meta: { title: "Menu1-2" },
            children: [
              {
                path: "menu1-2-1",
                component: () =>
                  import("@/views/nested/menu1/menu1-2/menu1-2-1"),
                name: "Menu1-2-1",
                meta: { title: "Menu1-2-1" },
              },
              {
                path: "menu1-2-2",
                component: () =>
                  import("@/views/nested/menu1/menu1-2/menu1-2-2"),
                name: "Menu1-2-2",
                meta: { title: "Menu1-2-2" },
              },
            ],
          },
          {
            path: "menu1-3",
            component: () => import("@/views/nested/menu1/menu1-3"),
            name: "Menu1-3",
            meta: { title: "Menu1-3" },
          },
        ],
      },
      {
        path: "menu2",
        component: () => import("@/views/nested/menu2/index"),
        name: "Menu2",
        meta: { title: "menu2" },
      },
    ],
  },
  // 外链
  // {
  //   path: 'external-link',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
  //       meta: { title: 'External Link', icon: 'link' }
  //     }
  //   ]
  // },

  // 404 page must be placed at the end !!!
  { path: "*", redirect: "/404", hidden: true },
];

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes,
  });

const router = createRouter();

export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}
// const router = new VueRouter({
//   routes,
// });
// routes.beforeEach((to, from, next) => {
//   if (to.path === "/login") return next();
//   const tokenStr = window.sessionStorage.getItem("token");
//   if (!tokenStr) return next("/login");
//   next();
// });
export default router;
