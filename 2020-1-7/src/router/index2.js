import Vue from 'vue'
import VueRouter from 'vue-router'

import BeforEach from '../components/beforeEach.vue'

console.log(BeforEach)

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    component: BeforEach
  },
  {
    path:'/b1',
    component:() => import('../components/b1.vue'),
    beforeEnter: (to, from, next) => {
      if(from.fullPath ==='/b2' && to.fullPath ==='/b1'){
            next('/');
            alert('局部守卫进入b1会被拦截进根')
          }else{
            next()
          }
      }
  },
  {
    path:'/b2',
    component:()=>import('../components/b2.vue')
  },
  {
    path:'/foo',
    component:() => import('../components/foo.vue')
  },
  {
    path:'/foo/:id',
    component:()=>import('../components/foo.vue')
  },
  {
    path:'/login',
    component:()=>import('../components/login.vue')
  },
  {
    path:'*',
    component: () => import('../components/404.vue')
  }
  
]

const router = new VueRouter({
  mode:'history',
  routes
})
export default router

/* 
next(); 执行之后的路由跳转
  next(false) 中断路由跳转
  next('/') 等同于push  或者使用  next({ path: '/' })

  如果有全局和局部，那么全局优先级大

  全局的beforeEach(要切换路由的时候触发)

  组件中的beforeRouteLeave 离开组件的时候触发
  复用组件使用beforeRouteUpdate去进行监听

  路由中的beforeEnter 进入路由的时候触发


  导航被触发。
    在失活的组件里调用离开守卫。
    调用全局的 beforeEach 守卫。
    在重用的组件里调用 beforeRouteUpdate 守卫 (2.2+)。
    在路由配置里调用 beforeEnter。
    解析异步路由组件。
    在被激活的组件里调用 beforeRouteEnter。
    调用全局的 beforeResolve 守卫 (2.5+)。
    导航被确认。
    调用全局的 afterEach 钩子。
    触发 DOM 更新。
    用创建好的实例调用 beforeRouteEnter 守卫中传给 next 的回调函数。
*/