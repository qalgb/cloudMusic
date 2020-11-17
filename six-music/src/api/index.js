// 封装每个接口的api函数
import ajax from './ajax'
// 获取歌单分类标签
export const reqSongListTag = () => ajax.get(`/playlist/hot`)
// 获取歌单推荐
export const reqSongRecommend = () => ajax.get(`/personalized?limit=10`)
// 获取精品歌单
export const reqSongHotList = (tag) => ajax.get('/top/playlist/highquality/?cat='+tag)
// 请求所有榜单数据
export const reqRankInfo = () => ajax({
  url: '/toplist',
  method: 'GET'
})
// 请求所有榜单歌曲列表
export const reqRankSongList = (id) => ajax({
  url:`/playlist/detail?${id}`,
  method: 'GET',
})
//请求电台的分类标签
export const reqRadioList=()=>ajax.get(`/dj/catelist`)
//请求分类后的电台
export const reqRadioName=()=>ajax.get(`/dj/recommend/type?type=3`)
//请求新专辑的列表
export const reqNewDiscList=()=>ajax.get(`/album/new?area=ALL`)
