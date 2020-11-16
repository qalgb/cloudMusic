import { reqClassIfication } from "@/api";

export default {
  state: {
    classIfication: [],
  },
  mutations: {
    RECEIVE_CLASSIFICATION(state, classIfication) {
      state.classIfication = classIfication;
    },
  },
  actions: {
    //获取歌单分类列表
    async getClassIfication({ commit }) {
      const result = await reqClassIfication();
      if (result.code === 200) {
        commit("RECEIVE_CLASSIFICATION", result);
      }
    },
  },
  getters: {},
};
