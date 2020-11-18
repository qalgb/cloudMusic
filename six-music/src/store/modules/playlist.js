import {
  reqClassIfication,
  reqRecommended,
  reqLatestPlaylist,
  reqCategoryPlaylist
} from "@/api";
// import { Empty } from "ant-design-vue";

export default {
  state: {
    //全部类别标签
    classIfication: [],
    //全部精品分类
    cecommended: [],
    //全部最新分类
    latestPlaylist: [],
    //小类别数据
    categoryPlaylist: [],
  },
  mutations: {
    PLAYLIST_CLASSIFICATION(state, classIfication) {
      state.classIfication = classIfication;
    },
    PLAYLIST_RECOMMENDED(state, cecommended) {
      state.cecommended = cecommended
    },
    PLAYLIST_LATESTPLAYLIST(state, latestPlaylist) {
      state.latestPlaylist = latestPlaylist
    },
    PLAYLIST_LISTDATA(state, categoryPlaylist) {
      state.categoryPlaylist = categoryPlaylist
    }
  },
  actions: {
    //获取歌单分类列表
    async getClassIfication({
      commit
    }) {
      const result = await reqClassIfication();
      if (result.code === 200) {
        commit("PLAYLIST_CLASSIFICATION", result);
      }
    },
    //获取精品推荐歌单
    async getRecommended({
      commit
    }) {
      const result = await reqRecommended();
      if (result.code === 200) {
        commit("PLAYLIST_RECOMMENDED", result)
      }
    },
    //获取NEW歌单
    async getLatestPlaylist({
      commit
    }) {
      const result = await reqLatestPlaylist();
      if (result.code === 200) {
        commit("PLAYLIST_LATESTPLAYLIST", result)
      }
    },
    //分类列表详细数据(英语.华语..)

    async getCategoryPlaylist({
      commit
    }, name) {
      const result = await reqCategoryPlaylist(name);
      if (result.code === 200) {
        commit('PLAYLIST_LISTDATA', result.playlists)
      }
    }



  },
  getters: {
    dataList(state) {
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