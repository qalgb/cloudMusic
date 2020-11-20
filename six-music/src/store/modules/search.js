// 引入api接口函数
import { reqSearchCon, reqSearchKeyword } from "@/api";
export default {
  // 初始数据
  state: {
    // 全部mv
    searchDetail: [],
    hots:[],
  },
  // 修改数据
  mutations: {
    RECEIVE_SEARCH_DETAIL(state, searchDetail) {
      state.searchDetail = searchDetail.slice(0,10)
    },
    RECEIVE_HOTS(state, hots) {
      state.hots = hots.slice(0,5)
    }
  },
  //异步请求
  actions: {
    // 获取mv数据
    async getSearchDetail({ commit },keyWord) {
      const result = await reqSearchCon(keyWord);
      if (result.code === 200) {
        commit("RECEIVE_SEARCH_DETAIL", result.result.songs);
      }
    },
    async getHots({ commit }) {
      const result = await reqSearchKeyword();
      if (result.code === 200) {
        commit("RECEIVE_HOTS", result.result.hots);
      }
    }
  },
  getters: {},
};
