// 引入Vue
import Vue from "vue";
// 引入VueRouter
import VueRouter from "vue-router";
// 引入routes
import routes from "./routes";
// 重新修改push和replace
const pushOrigin = VueRouter.prototype.push;
VueRouter.prototype.push = function(location, onComplete = () => {}, onAbort) {
  return pushOrigin.call(this, location, onComplete, onAbort);
};
const replaceOrigin = VueRouter.prototype.replace;
VueRouter.prototype.replace = function(
  location,
  onComplete,
  onAbort = () => {}
) {
  return replaceOrigin.call(this, location, onComplete, onAbort);
};

// 声明使用路由器
Vue.use(VueRouter);
// 实例化路由器并暴露
const router = new VueRouter({
  mode: "hash",
  routes,
  // 解决路由跳转到滚动的位置
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
});
export default router;
