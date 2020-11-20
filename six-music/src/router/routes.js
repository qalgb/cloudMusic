import Home from "../pages/Home";
import Radio from "@/pages/Radio"
//我的音乐
import MyMusic from "../pages/MyMusic";
import Rank from "../pages/Rank"
import Register from "../pages/Register";
import AudioPlay from '../components/AudioPlay'
import Mv from "../pages/Mv";
import Playlist from "@/pages/Playlist";
import MvVideo from "@/pages/MvVideo";
// 歌单详情
import playListDetail from "@/pages/playListDetail";
import NewDisc from '@/pages/NewDisc';
import Pendant from "@/components/Pendant";
//歌手
import SingerList from "@/pages/SingerList";

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
    component: playListDetail,
  },
  {
    path: "/register",
    component: Register,
    meta: {
      isHide: true
    },
  },
  {
    //yyj
    path: "/playlist",
    component: Playlist,
  },
  {
    // yyj
    path: "/pendant",
    component: Pendant,
  },
  {
    //yyj
    path: "/singerlist",
    component: SingerList,
  },
  {
    path: "/audioplay",
    component: AudioPlay,
    meta: {
      isHide: true
    },
  },
  {
    path: "/audioplay/:id?",
    component: AudioPlay,
    name: 'audioplay'
  },
  {
    path: "/",
    redirect: "/",
  },
];