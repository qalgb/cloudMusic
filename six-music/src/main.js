// 引入Vue
import Vue from "vue";
// 引入App
import App from "./APP.vue";
// 引入router
import router from "./router";
// 引入store

import store from "./store";
// 引入antd组件
import { Button, Icon } from "ant-design-vue";
// 引入swiper的样式
import "swiper/css/swiper.css";

// 设置浏览器提示信息
Vue.config.productionTip = false;
// 设置需要引入的atnd组件
Vue.component(Button.name, Button);
Vue.component(Icon.name, Icon);

new Vue({
  // 渲染App组件
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
