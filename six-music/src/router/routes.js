import Home from "../pages/Home";
//我的音乐
import MyMusic from "../pages/MyMusic";
import Rank from "../pages/Rank";
import Register from "../pages/Register";
import AudioPlay from '../components/AudioPlay'
import Mv from "@/pages/Mv";
import Playlist from "@/pages/Playlist";
import MvVideo from "@/pages/MvVideo"
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
    path: "/mvvideo",
    component: MvVideo,
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
    path: "/register",
    component: Register,
    meta: { isHide: true },
  },
  {
    path: "/playlist",
    component: Playlist,

  },
  {path: "/audioplay/:id?",
    component: AudioPlay,
  },
  {
    path: "/",
    redirect: "/",
  },
];
