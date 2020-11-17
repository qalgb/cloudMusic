// 引入Vue
import Vue from "vue";
// 引入App
import App from "./APP.vue";
// 引入router
import router from "./router";
// 引入store
import store from './store'
import { Pagination } from 'element-ui';
Vue.use(Pagination)
// 引入antd组件
import { Button, Icon, Input, Modal, message } from 'ant-design-vue';
// 引入swiper的样式
import 'swiper/css/swiper.css'
// 汉化moment
import moment from 'moment'
Vue.prototype.$moment = moment
moment.locale('zh-cn')

// 设置浏览器提示信息
Vue.config.productionTip = false;
// 设置需要引入的atnd组件
Vue.component(Button.name, Button);
Vue.component(Icon.name, Icon);
Vue.component(Input.TextArea.name, Input.TextArea);
Vue.use(Modal)
Vue.prototype.$message = message

new Vue({
  // 渲染App组件
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
