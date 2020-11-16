import { reqClassIfication } from "@/api";
// import { Empty } from "ant-design-vue";

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
      console.log(result);
      if (result.code === 200) {
        commit("RECEIVE_CLASSIFICATION", result);
      }
    },
  },
  getters: {
    dataList(state) {
      console.log(Object.keys(state.classIfication.categories));

      return (
        Object.keys(state.classIfication.categories).reduce((pre, item1) => {
          pre.push(
            state.classIfication.sub.filter(
              (item) => item.category === item1 * 1
            )
          );

          return pre;
        }, []) || []
      );
    },
    categories(state) {
      return state.classIfication.categories || {};
    },
  },
};
