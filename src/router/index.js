import { createRouter, createWebHashHistory } from 'vue-router';
import layOut from '../views/LayOut/layOut.vue';
import store from '../store/index.js'

// 路由配置
const routes = [
  // 登录页面
  {
    path:"/login",
    name:"login",
    component: () => import("../views/pages/login.vue")
  },
  {
    pacth:"/",
    name:"layOut",
    component:layOut,
    // 子路由 嵌套路由
     children:[
      {
        path:"/users",
        name:"users",
        component:() => import("../views/pages/usersList.vue")
      },
      {
        path:"/roles",
        name:"roles",
        component:() => import("../views/pages/rolesList.vue")
      },
      {
        path:"/goods",
        name:"goods",
        component: () => import("../views/pages/goodsList.vue")
      }
    ]
  }
];

// 生成hash路由对象
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// 路由守卫
router.beforeEach((to,form,next)=>{
  // 判断是否登录
  console.log("store",store.state.uInfo)
  const uInfo = store.state.uInfo.userInfo
  if (!uInfo){
    // 未登录
    if (to.path === "/login"){
      next()
      return
    }
    next("/login")
  }else{
    next()
  }

})

// 暴露路由对象
export default router;
