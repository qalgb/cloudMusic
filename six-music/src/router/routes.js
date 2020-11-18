import Home from "../pages/Home";
//我的音乐
import MyMusic from "../pages/MyMusic";
import Rank from "../pages/Rank";
import Register from "../pages/Register";
import Mv from "../pages/Mv";
import Playlist from "@/pages/Playlist";
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
    path: "/register",
    component: Register,
    meta: { isHide: true },
  },
  {
    path: "/playlist",
    component: Playlist,

  },
  {
    path: "/",
    redirect: "/",
  },
];
