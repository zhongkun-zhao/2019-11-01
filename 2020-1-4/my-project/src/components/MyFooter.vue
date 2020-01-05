<template>
<footer class="footer" >
    <span class="todo-count">
        <strong>{{wxz}}</strong>
        <span>条未选中</span>
     
    </span>
    <ul 
        class="filters"
    >
        <li>
            <a 
                href="#/all" 
                :class="{selected:hash1 === '#/all'}"                
            >全部</a>
        </li>
        <li>
            <a 
                href="#/unchecked"  
              :class="{ selected:hash1 === '#/unchecked'}"
            >未选中</a>
        </li>
        <li>
            <a 
              href="#/checked"
              :class="{ selected:hash1 === '#/checked'}"
            >已选中</a>
        </li>
    </ul>
</footer> 
</template>

<script>
    export default {
        data(){
         return{
           
             }
        },
        //  created(){
        //     window.onhashchange = ()=>{
        //         this.hash = window.location.hash;
        //     }
        // },
        props:['data','hash1'],
        methods: {
           
        },
        computed: {
            wxz(){
                return this.data.filter(item=>!item.checked ).length
            }
        },
    }
</script>

<style >

</style>