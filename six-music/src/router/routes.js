import Home from "../pages/Home";
import MyMusic from "../pages/MyMusic";
import NewDisc from '../pages/Home/NewDisc';
import Radio from '../pages/Home/Radio';

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
    path: "/",
    redirect: "/",
  },
];
