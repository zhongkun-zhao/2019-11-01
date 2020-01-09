<template>
  <div class="home">
   <router-link tag="button" to="/about/1">About1</router-link>
   <router-link tag="button" to="/about/2">About2</router-link>
   <hr>
   <router-link tag="button" to="/public">public</router-link>
   <hr>
   <router-link tag="button" to="/login">login</router-link>
   <hr>
   <button @click="qj">前进</button>
   <button @click="ht">后退</button>
   <hr>
   <router-link tag="button" :to="{name:'p4',params:{n:'赵忠坤'}}" >p4</router-link>
    <router-link tag="button" :to="{name:'p5',params:{nn:'白晓'}}">p5</router-link>
  <router-link tag="button" to="/p6">p6</router-link>
   <hr>
 <h1>这是主页</h1>
 
  </div>

</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  methods:{
     qj(){
          this.$router.go(1)
          console.log(1)
      },
      ht(){
          this.$router.go(-1)
          console.log(-1)
      },
  },
   created(){
          console.log(this.$route.params.un)
        },
  components: {
    HelloWorld
  }
}
</script>
