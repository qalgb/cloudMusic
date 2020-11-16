<<<<<<< HEAD
// 引入Mv组件
import Home from '@/pages/Home'
export default [
   // Trade路由组件
   {
    path: '/',
    component: Home,
    
  },
]
=======
import Home from "../pages/Home";
import MyMusic from "../pages/MyMusic";

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
    path: "/",
    redirect: "/",
  },
];
>>>>>>> master
