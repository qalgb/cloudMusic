// 引入api接口函数
import { reqMvVideo } from "@/api";
export default {
  // 初始数据
  state: {
    // 全部mv
    mvUrl: {},
  },
  // 修改数据
  mutations: {
    //mv视频
    RECEIV_MV_VIDEO(state, mvUrl) {
      state.mvUrl = mvUrl;
    },
  },
  //异步请求
  actions: {
    // 获取mv的url地址
    async getMvVideo({commit},id){
      const result = await reqMvVideo(id);
      if (result.code === 200) {
        commit("RECEIV_MV_VIDEO", result.data);
      }
    }
  },
  getters: {
  },
};
