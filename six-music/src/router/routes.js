import Home from "../pages/Home";
//我的音乐
import MyMusic from "../pages/MyMusic";
import NewDisc from '../pages/NewDisc';
import Radio from '../pages/Radio';
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
    path: "/mv",
    component: Mv,
  },
  {
    path: "/",
    redirect: "/",
  },
  
];
