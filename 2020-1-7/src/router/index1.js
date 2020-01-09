import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  //编程导航
  {
    path:'/login',
    component:() => import('../views/login.vue')
  },
  // 动态路由
  {
   path: '/about/:id',
    component: () => import( '../views/About.vue'),
    // beforeRouteEnter (to, from, next) {
    //   console.log('进去路由的时候触发beforeRouteEnter守卫，放在index上')
    // }
  },
  {
  path: '/about',
  component: () => import( '../views/About.vue')
  },
  // 嵌套路由
  {
    path:'/public/',
    component:() => import('../views/public.vue'),
    children:[
      {
        path:'p1',//  /public/p1  * 不要加 /不然就不匹配
        component:() => import('../views/p1.vue')
      },
      {
        path:'p2',
        component:()=> import('../views/p2.vue')
      },
      //如果进入/public下没有指定的children,默认添加一个组件，可以在path上写个''
      {
        path:'',
        component: () => import('../views/p3.vue')
      }
    ]
  },
  {
    path:'/p4',
    name:'p4',
    props:true,
    component:()=> import('../views/p4.vue')
  },
  {
    path:'/p5',
    name:'p5',
    //当做一个传递数据的钩子
    props:(route)=>({
      n:route.params.nn
    }),
    component:()=> import('../views/p5.vue')
  },
  // 重定向的三种写法
  {
   path:'/p6',
    redirect:to=>{
      return '/p4'
    }   
  },
  // { path: '/p6', redirect: '/p4' },
  // { path: '/p6', redirect: { name: 'p4' }}

]





const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// 全局守卫
router.beforeEach((to,from,next)=>{
// console.log('切换路由触发守卫')
  next()
})

export default router



/* 
$route
    获取路由的信息（属性）

    this.$route.parmas

    $router
    跳转路由的方法(方法)

    动态路由:
      主体一样，但是部分内容不一样，可以使用动态路由
      写法:
        /about/:id 匹配下面几种路由(这个id是自定义的)
          /about/1
          /about/2
          ...

    使用:
      $route.params.id   
      切换的时候不会触发一些钩子函数，比如created，可以使用watch监听

    watch:{
      '$route'(){

      }
    }

    // 课件 p1 p2 p3 
    嵌套路由:
      在路由配置中使用children:[{path:'x'}]  匹配的是  /parent/x
      注意的是parent组件中需要写上router-view 要不然子组件渲染不出来
      如果进入parent下没有指定的children,又要默认添加一个组件，可以在path上写个''

    // login
    编程导航:
      $router.push()
      $router.replace()
      $router.go()
        可以传字符串和对象 
        '/'
        {
          path:'/'
          name:'home',
          query:{
            name:'白晓'   -> /?name=白晓
          },
          params:{
            nn:'白晓'  -> 注意的是路由上不会显示nn，但是可以通过$route.params.nn去获取
          }
        }

       重定向:
        { path: '/a', redirect: { name: 'foo' }}
        { path: '/p6', redirect: '/p4' }
        { path:'/p6',
          redirect:to=>{
              return '/p4'}  
        },


      路由传参:
        可以在路由配置项中配置一个props,如果为true，那么子组件可以通过
        props去接收parmas参数
          可以看Home.vue中的 p4

*/