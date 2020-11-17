import Home from "../pages/Home";
//我的音乐
import MyMusic from "../pages/MyMusic";
import Rank from "../pages/Rank"

import Mv from "../pages/Mv";
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
  {
    path: "/",
    redirect: "/",
  },
];
