<template>
    <header class="header" >
                <h1>todos</h1>
                <input 
                    class="new-todo" 
                    placeholder="请输入内容"
                    @keyup.13="enter"
                    v-model="val"
                >
            </header>
</template>

<script>

    export default {
         data(){
            return {
                val:''
            }
        },
        methods: {
            enter(){
                this.$emit('cv',this.val);
                this.val='';
            }
        },
    }
</script>

<style scoped>

</style>