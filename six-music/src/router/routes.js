import Home from "../pages/Home";
//我的音乐
import MyMusic from "../pages/MyMusic";
import Rank from "../pages/Rank";
import Register from "../pages/Register";
import AudioPlay from '../components/AudioPlay'
import Mv from "@/pages/Mv";
import MvVideo from "@/pages/MvVideo"
import Playlist from "@/pages/Playlist";
// 歌单详情
import playListDetail from "@/pages/playListDetail";
import NewDisc from '../pages/NewDisc';

import Radio from "@/pages/Radio"
// 搜索
import Search from '@/pages/Search'

export default [
  {
    path: "/",
    component: Home,
  },
  //搜索
  {
    path: '/search',
    component: Search,
    name: 'search'
  },
  {
    path: "/mymusic",
    component: MyMusic,
  },
  {
    path: "/newdisc",
    component: NewDisc,
  },
  {
    path: "/radio",
    component: Radio,
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
    meta: { isHide: true },
    name: 'audioplay'
  },
  {
    path: "/audioplay/:id?",
    component: AudioPlay
  },
  {
    path: "/",
    redirect: "/",
  },
];
