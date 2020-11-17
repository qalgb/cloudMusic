import Home from "../pages/Home";
//我的音乐
import MyMusic from "../pages/MyMusic";
import Rank from "../pages/Rank"
import AudioPlay from '../components/AudioPlay'

import Mv from "../pages/Mv";
export default [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/home/mymusic",
    component: MyMusic,
  },
  {
    path: "/home/rank",
    component: Rank,
  },
  {
    path: "/mv",
    component: Mv,
  },
  {
    path: "/musicplay",
    component: AudioPlay,
  },
  {
    path: "/",
    redirect: "/",
  },
  
];
