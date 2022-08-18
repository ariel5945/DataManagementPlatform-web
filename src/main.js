import Vue from "vue";

import "normalize.css/normalize.css"; // A modern alternative to CSS resets
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import locale from "element-ui/lib/locale/lang/en"; // lang i18n
import "@/styles/index.scss"; // global css
import axios from "axios";
import App from "./App";
import store from "./store";
import router from "./router";
import "@/icons"; // icon
import "@/permission"; // permission control
// 引用fullpage 插件
// import 'fullpage.js/vendors/scrolloverflow';
import VueFullPage from "vue-fullpage.js";
Vue.use(VueFullPage);
//引入swiper
import VueAwesomeSwiper from "vue-awesome-swiper";
// 引入swiper样式
import "swiper/dist/css/swiper.css";
//挂载swiper
Vue.use(VueAwesomeSwiper);
Vue.prototype.$axios = axios;
// 将自动注册所有组件为全局组件
import dataV from "@jiaminghi/data-view";
Vue.use(dataV);
import highcharts from "highcharts";
import highcharts3d from "highcharts/highcharts-3d";
highcharts3d(highcharts);

import { Scrollbar} from 'element-ui'
Vue.use(Scrollbar)
import IScorllView from "vue-iscroll-view"
import IScroll from 'iscroll'
Vue.use(IScorllView,IScroll)
// 自定义组件
import ItemWrap from "./components/itemWrap/index.vue";
import DatePick from "./components/datePick/index.vue"
// 自定义组件
Vue.component("ItemWrap", ItemWrap);
Vue.component("DatePick", DatePick);
/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
if (process.env.NODE_ENV === "production") {
  const { mockXHR } = require("../mock");
  mockXHR();
}

import BaiduMap from "vue-baidu-map";
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: "biLwg95WYWib3rpxKdcKHrejuVYRKBA8",
});

// set ElementUI lang to EN
Vue.use(ElementUI, { locale });
// 如果想要中文版 element-ui，按如下方式声明
// Vue.use(ElementUI)

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  router,
  store,
  render: (h) => h(App),
});
