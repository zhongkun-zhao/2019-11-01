<template>
    <div>
        <p>请登录</p>
        用户名:<input v-model="uname" type="text"/>
        密码:<input v-model="pass" type="password"/>
        <button @click="login">登录</button>
        <hr>
        <button @click="qj">前进</button>
        <button @click="ht">后退</button>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                uname:'',
                pass:''
            }
        },
       
        methods:{
            qj(){
               this.$router.go(1)
               console.log(1)
            },
            ht(){
               this.$router.go(-1)
               console.log(-1)
            },
            login(){
                const {uname,pass} = this;
                setTimeout(() => {
                    if(uname === 'zzk' && pass=== '123'){
                        // 跳转
                        // this.$router.push('/');
                        this.$router.push({
                            path:'/',   //  ?name=白晓
                            query:{
                                name:'zzk'
                            }
                        });


                        // this.$router.push({
                        //     name:'home',
                        //     params:{
                        //         un:'zzk'
                        //     }
                        // });

                        // //替换
                        // this.$router.replace({
                        //     // path:'/',   //  ?name=白晓
                        //     name:'home',
                        //     // params:{
                        //     //     name:'zzk'   // /name/白晓
                        //     // },
                        //     query:{
                        //         name:'zzk'
                        //     }
                        // });
                    }
                }, 1000);
                
            }
        }
    }
</script>

<style scoped>

</style>