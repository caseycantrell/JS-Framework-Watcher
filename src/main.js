import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";

// import the es6 version
import "zingchart/es6";
// import the component AFTER ZingChart since it is a DIRECT dependency
import zingchartVue from "zingchart-vue";

import "bootstrap-icons/font/bootstrap-icons.css";

Vue.component("zingchart", zingchartVue);

axios.defaults.baseURL = process.env.NODE_ENV === "development" ? "http://localhost:8080" : "/";

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
