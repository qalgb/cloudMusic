import Home from "../pages/Home";
//我的音乐
import MyMusic from "../pages/MyMusic";
import Rank from "../pages/Rank"
import Mv from "../pages/Mv";
// 歌单详情
import playListDetail from '@/pages/playListDetail'
export default [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/mymusic",
    component: MyMusic,
  },
  {
    path: "/rank",
    component: Rank,
  },
  {
    path: "/mv",
    component: Mv,
  },
  // 歌单详情
  {
    path: "/playlist:keyword?",
    component: playListDetail
  },
  {
    path: "/",
    redirect: "/",
  },
];
