// 封装每个接口的api函数
import ajax from "./ajax";

// 获取歌单分类标签
export const reqSongListTag = () => ajax.get(`/playlist/hot`);
// 获取歌单推荐
export const reqSongRecommend = () => ajax.get(`/personalized?limit=10`);
// 获取精品歌单
export const reqSongHotList = (tag) =>
  ajax.get("/top/playlist/highquality/?cat=" + tag);
// 请求所有榜单数据
export const reqRankInfo = () =>
  ajax({
    url: "/toplist",
    method: "GET",
  });
// 请求所有榜单歌曲列表
export const reqRankSongList = (id) =>
  ajax({
    url: `/playlist/detail?${id}`,
    method: "GET",
  });
//请求登录信息
export const reqLoginInfo = (phoneNum, password) =>
  ajax.get(`/login/cellphone?phone=${phoneNum}&password=${password}`);
//获取账户信息
export const reqUserInfo = (cookie) =>
  ajax.get(`/user/account?cookie=${cookie}`);
