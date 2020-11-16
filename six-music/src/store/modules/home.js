// 管理首页所有数据
// 引入api接口函数
import { reqSongRecommend, reqSongListTag, reqSongHotList } from '@/api'
export default {
  state: {
    // 歌单分类标签
    songListTag: [],
    // 歌单推荐
    songRecommendList: [],
    // 精品歌单
    hotSongList: []
  },
  mutations: {
    // 直接修改歌单分类标签
    RECEIVE_SONG_LIST (state, songListTag) {
      state.songListTag = songListTag.slice(0,5)
    },
    // 直接修改歌单推荐数组
    RECEIVE_SONG_RECOMMEND_LIST (state, songRecommendList) {
      state.songRecommendList = songRecommendList
    },
    // 精品歌单
    RECEIVE_HOT_SONG_LIST (state, hotSongList) {
      state.hotSongList = hotSongList.slice(0,15)
    }
  },
  actions: {
    // 异步请求，获取歌单分类标签
    async getSongList ({ commit }) {
      const result = await reqSongListTag()
      if (result.code === 200) {
        commit('RECEIVE_SONG_LIST', result.tags)
      }
    },
    // 异步请求，获取歌单推荐数据
    async getSongRecommendList ({ commit }) {
      const result = await reqSongRecommend()
      if (result.code === 200) {
        commit('RECEIVE_SONG_RECOMMEND_LIST', result.result)
      }
    },
    // 获取精品歌单数据
    async getHotSongList ({ commit },tag) {
      const result = await reqSongHotList(tag)
      if (result.code === 200) {
        commit('RECEIVE_HOT_SONG_LIST', result.playlists)
      }
    }
  },
  getters: {}
}