import Home from "../pages/Home";
//我的音乐
import MyMusic from "../pages/MyMusic";
import Rank from "../pages/Rank"

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
  }
];
