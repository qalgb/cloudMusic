// 封装每个接口的api函数
import ajax from './ajax'

// 获取歌单分类标签
export const reqSongListTag = () => ajax.get(`/playlist/hot`)
// 获取歌单推荐
export const reqSongRecommend = () => ajax.get(`/personalized?limit=10`)
// 获取精品歌单
export const reqSongHotList = (tag) => ajax.get('/top/playlist/highquality/?cat='+tag)