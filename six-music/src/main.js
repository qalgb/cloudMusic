// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App.vue'
// 引入router
import router from './router'
// 引入store
// import store from './store'
import { Pagination } from 'element-ui';

// 设置浏览器提示信息
Vue.config.productionTip = false
Vue.use(Pagination)
new Vue({
  // 渲染App组件
  render: h => h(App),
  router,
  // store
}).$mount('#app')