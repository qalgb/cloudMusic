import Home from "../pages/Home";
//我的音乐
import MyMusic from "../pages/MyMusic";
import Rank from "../pages/Rank"
// mv
import Mv from "../pages/Mv";
import MvVideo from "../pages/MvVideo"
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
    path: "/home/rank",
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
  {
    path: "/",
    redirect: "/",
  },
  
];
