// 引入Vue
import Vue from "vue";
// 引入App
import App from "./App.vue";
// 引入router
import router from "./router";
// 引入store
import store from "./store";
// 引入antd组件
import {
  Button,
  Icon,
  Input,
  Modal,
  message,
  Dropdown,
  Menu,
  Pagination,
  Checkbox,
  Layout,
  Slider,
  Row,
  Col,
  InputNumber,
} from "ant-design-vue";
// 引入swiper的样式
import "swiper/css/swiper.css";
// 汉化moment
import moment from "moment";
Vue.prototype.$moment = moment;
moment.locale("zh-cn");

// 引入图片懒加载
import VueLazyload from "vue-lazyload";
// 引入懒加载图片
import loading from "./assets/images/loading.gif";
Vue.use(VueLazyload, {
  loading,
});

// 引入视频播放插件
import "./assets/css/video.css";
import VideoPlayer from "vue-video-player";
require("video.js/dist/video-js.css");
require("vue-video-player/src/custom-theme.css");
Vue.use(VideoPlayer);

// 设置浏览器提示信息
Vue.config.productionTip = false;
// 设置需要引入的atnd组件
Vue.component(Button.name, Button);
Vue.component(Icon.name, Icon);
Vue.component(Input.TextArea.name, Input.TextArea);
Vue.component(Dropdown.name, Dropdown);
Vue.component(Pagination.name, Pagination);
Vue.use(Modal);
Vue.use(Layout);
Vue.use(Menu);
Vue.use(Checkbox);
Vue.use(Slider);
Vue.use(Row);
Vue.use(Col);
Vue.use(InputNumber);
Vue.prototype.$message = message;

new Vue({
  // 渲染App组件
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
