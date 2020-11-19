// 管理首页所有数据
// 引入api接口函数
import { reqSongRecommend, reqSongListTag, reqSongHotList, reqNewSongList,reqBanners,reqDiscList,reqTopList } from '@/api'
export default {
  state: {
    // 歌单分类标签
    songListTag: [],
    // 歌单推荐
    songRecommendList: [],
    // 精品歌单
    hotSongList: [],
    // 新歌
    newSongList: [],
    // banner
    bannerList: [],
    // 新碟
    discList: [],
    // 排行榜摘要
    topList: []
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
    },
    // 新歌列表
    RECEIVE_NEW_SONG_LIST (state, newSongList) {
      state.newSongList = newSongList.slice(0,27)
    },
    // banners
    RECEIVE_BANNERS_LIST (state, bannerList) {
      state.bannerList = bannerList
    },
    // 新碟
    RECEIVE_DISC_LIST (state, discList) {
      state.discList = discList
    },
    // 排行榜
    RECEIVE_TOP_LIST (state, topList) {
      state.topList = topList.slice(0,5)
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
    },
    // 新歌列表
    async getNewSongList ({ commit }, code) {
      const result = await reqNewSongList(code)
      if (result.code === 200) {
        commit('RECEIVE_NEW_SONG_LIST', result.data)
      }
    },
    // banners
    async getBannerList ({ commit }) {
      const result = await reqBanners()
      if (result.code === 200) {
        commit ('RECEIVE_BANNERS_LIST', result.data.blocks[0].extInfo.banners)
      }
    },
    // 新碟
    async getDiscList ({ commit }, area) {
      const result = await reqDiscList(area)
      if (result.code === 200) {
        commit ('RECEIVE_DISC_LIST', result.albums)
      }
    },
    // 排行榜
    async getTopList ({ commit }) {
      const result = await reqTopList()
      if (result.code === 200) {
        commit('RECEIVE_TOP_LIST', result.list)
      }
    }
  },
  getters: {}
}