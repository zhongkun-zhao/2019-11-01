<template>
  <div class="about">
  <router-link tag="button" to="/">Home</router-link> |
   <router-link  tag="button" to="/about/1">About1</router-link>
    <router-link  tag="button" to="/about/2">About2</router-link>
    <h1> 这是about页</h1> 
    <p>$route.params.id是{{$route.params.id}}</p>
    <div v-if="$route.params.id == 1">
      这个是1111的页面（About1动态路由）
    </div>
    <div v-if="$route.params.id == 2">
      这个是2222的页面（About2动态路由）
    </div>
  </div>
</template>
<script>
export default {
  created(){
    console.log('组件加载')
  },
  // 复用组件触发
  beforeRouteUpdate (to, from, next) {
    console.log('组件复用触发beforeRouteUpdate守卫')
    next()
  },
   // 离开组件触发
  // beforeRouteLeave (to, from, next) {
  //   const b = confirm('主仁，要离开我ma')
  //   next()
  // },



}
</script>