// 引入api接口函数
import { reqAllMv } from "@/api";
export default {
  // 初始数据
  state: {
    // 全部mv
    allMv: [],
    mvData:[],
  },
  // 修改数据
  mutations: {
    //全部的mv
    RECEIV_ALL_MV(state, allMv) {
      state.allMv = allMv;
    },
  },
  //异步请求
  actions: {
    // 获取mv数据
    async getAllMv({ commit },{area,order}) {
      const result = await reqAllMv(area,order);
      if (result.code === 200) {
        commit("RECEIV_ALL_MV", result.data);
      }
    },
  },
  getters: {},
};
