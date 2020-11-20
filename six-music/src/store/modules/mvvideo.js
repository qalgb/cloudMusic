// 引入api接口函数
import { reqMvVideo, reqMvDetail } from "@/api";
export default {
  // 初始数据
  state: {
    // mv地址
    mvUrl: '',
    // mv详情
    mvDetail:{}
  },
  // 修改数据
  mutations: {
    //mv视频
    RECEIV_MV_VIDEO (state, mvUrl) {
      state.mvUrl = mvUrl
    },
    // mv详情
    RECEIV_MV_DETAIL (state, mvDetail) {
      state.mvDetail = mvDetail
    }
  },
  //异步请求
  actions: {
    // 获取mv的url地址
    async getMvVideo({commit},id){
      const result = await reqMvVideo(id);
      if (result.code === 200) {
        commit("RECEIV_MV_VIDEO", result.data.url);
      }
    },
    // mv详情
    async getMvDetail({commit},id){
      const result = await reqMvDetail(id);
      if (result.code === 200) {
        commit("RECEIV_MV_DETAIL", result.data);
      }
    }
  },
  getters: {

  },
};
