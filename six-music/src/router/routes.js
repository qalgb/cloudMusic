import Home from "../pages/Home";
import MyMusic from "../pages/MyMusic";
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
    path: "/mv",
    component: Mv,
  },
  {
    path: "/",
    redirect: "/",
  },
  
];
