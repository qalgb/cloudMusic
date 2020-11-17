// 管理首页所有数据
// 引入api接口函数
import { reqSongRecommend, reqSongListTag, reqSongHotList,reqRadioList, reqRadioName, reqNewDiscList } from '@/api'
export default {
  state: {
    // 歌单分类标签
    songListTag: [],
    // 歌单推荐
    songRecommendList: [],
    // 精品歌单
    hotSongList: [],
    //电台分类
    radioList:[],
    //分类后的电台
    radioName:[],
    //新专辑列表
    newDiscList:{}
    
  },
  mutations: {
    //获取新专辑列表
    RECEIVE_NEWDISC_LIST(state,newDiscList){
      state.newDiscList=newDiscList.slice(0,20)
    },
    //获取分类后的电台
    RECEIVE_RADIO_NAME(state,radioName){
      state.radioName=radioName
    },
    //获取电台分类列表
    RECEIVE_RADIO_LIST (state,radioList) {
      state.radioList=radioList
    },
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
    //异步获取新专辑列表
    async getNewDiscList({commit}){
      const result=await reqNewDiscList()
      if(result.code===200){
        commit('RECEIVE_NEWDISC_LIST',result.albums)
      }
    },
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
    //获取电台列表
    async getRadioList({ commit }){
      const result =await reqRadioList()
      if(result.code===200){
        commit('RECEIVE_RADIO_LIST',result.categories)
      }
    },
    //获取分类后的电台
    async getRadioName({commit}){
      const result = await reqRadioName()
      if(result.code===200){
        commit('RECEIVE_RADIO_NAME',result.djRadios)
      }
    }
  },
  getters: {}
}