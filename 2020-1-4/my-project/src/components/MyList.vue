<template>
<!-- 选中 删除的横线出来 -->
  <li
  
  :class="{
        completed:pv.checked,
        editing:pv.onoff
    }"
  >
    <div class="view">
      <input 
      class="toggle"
       type="checkbox" 
        v-model="pv.checked"
       />
       <!-- 不用v-om的方法这里写个方法 -->
       <!-- @change="checkedChange" -->
      <label 
      @dblclick="changefn"
      >{{pv.txt}}</label>
      <button 
      @click="rm(pv.id)" 
      class="destroy">
      </button>
       
    </div>
    <input
    class="edit"
    ref="edit"
    @keyup.esc="onoff_FN"
    :value="pv.txt"
    @blur="blurFn(pv,$event)"
    />
  </li>
</template>

<script>
export default {
    props:{
        pv:{
            type:Object,
            required:true
        },
        ck:{
            type:Boolean
        },
       
    },
    data(){
        return {
            val:Object.assign({},this.pv)
        }
        },
    methods: {
        //  checkedChange(ev){
        //         const {checked} = ev.target;
        //         const {id} = this.val;
        //         this.val.checked = checked;
        //         this.$emit('cc',id,checked);
        //     }
        //双击
        changefn(){
            
            this.pv.onoff=true;
            console.log(this.pv)
            setTimeout(() => {
                this.$refs.edit.select(); //聚焦
            },);
          
           
        },
        // esc失焦事件 让input框消失
         onoff_FN(){
         this.pv.onoff=false;
        //  console.log(1)
        },
        //失焦事件
        blurFn({txt,onoff},ev){
            console.log(1)
            if(!onoff)return;
             const {value} = ev.target;
              if(value && txt != value){
                this.pv.txt = value;  
                }
            this.pv.onoff=false;
        },
            
        rm(id){
        this.$emit('shanchu',id)
        },
    }
};
</script>

<style scoped>
</style>