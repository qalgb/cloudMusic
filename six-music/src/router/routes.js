import Home from "../pages/Home";
//我的音乐
import MyMusic from "../pages/MyMusic";
import Rank from "../pages/Rank";
import Register from "../pages/Register";
import AudioPlay from '../components/AudioPlay'
import Mv from "@/pages/Mv";
import Playlist from "@/pages/Playlist";
import MvVideo from "@/pages/MvVideo"
import Radio from "@/pages/Radio"
// 歌单详情
import playListDetail from "@/pages/playListDetail";
import NewDisc from '../pages/NewDisc';
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
    path:"/newdisc",
    component:NewDisc,
  }, 
  {
    path:"/radio",
    component:Radio,
  },
  {
    path: "/rank",
    component: Rank,
  },
  {
    path: "/mv/mvvideo",
    component: MvVideo,
  },
  {
    path: "/mv",
    component: Mv,
  },
  // 歌单详情
  {
    path: "/playlistdetail:keyword?",
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
  {
    path: "/audioplay",
    component: AudioPlay,
    meta:{isHide:true},
    name:'audioplay'
  },
  {
    path: "/",
    redirect: "/",
  },
];
