## Vue
- MVC全名是Model View Controller，是模型(model)－视图(view)－控制器(controller)的缩写
- MVVM是Model-View-ViewModel的简写。它本质上就是MVC 的改进版

- 难点：父子组件的传递，路由的配置和使用，生命周期，vuex，逻辑，做项目。

> https://cn.vuejs.org/

- 渐进式(弱主张，逐渐学习，有过程的学习，vue全家桶：vue,vue-router,vuex,vue-cli) JavaScript 框架

## 使用vue
 - 引 vue
 - 在html里挂载一个根元素
   ```
   <div id="app"></div>
   ```
 - 实例化vue -> new Vue({})

 - 配置参数
  - el:'挂载元素'，(不能挂body，html上)
  - data(存数据)：在**new Vue**下值为***对象***
  - 输出数据应 双花括号 {{数据名称}} 小胡子

## 指令
  - 为了方便开发者开发，vue中使用了指令，这些指令包含了很多元素身上的属性和js的一些内置方法

- v-text -> innerText
- v-html -> innerHtml
- v-show -> display:block/none true/false 布尔值

- v-if 看下布尔值是否为true，为true就渲染，false就不渲染

- v-else 限制：上面必须是v-if或者v-else-if  

-  v-else-if 限制：前一兄弟元素必须有 v-if 或 v-else-if。

## v-on：(缩写@) 事件名="事件函数|简单语法"
    一般事件函数放在methodes下
    - $event 
       如果不传参，一个参数就是事件对象 ***如果传了参，还想拿到事件对象，需要在模板中的事件函数内传一个
- 修饰符 .13 .enter .stop .prevent ...

- 解绑事件可以使用
  ```
      @mousedown="onoff && down($event)"
      当onoff是真的就添加事件，假的就解除事件
  ```

- v-for="val,key in 数据"  遍历对象或者数组
    如果是数组val就是数组的成员，key就是索引
    如果是对象val键值，key键名

### v-bind
- 如果说属性需要**动态操作**，那么就使用v-bind:xx  缩写:  :
- :style="{属性名:属性值（可以为数据）}"
- :style="[{属性名1:属性值1（可以为数据）},{属性名2:属性值2（可以为数据）}]"
- :class="{类名:布尔值}"
-  v-bind="{data:1}"  没有具体的属性可以使用       v-bind=对象（批量设置属性）

### v-model
- 双向数据绑定（数据驱动视图，视图也可以改变数据）
- 绑v-model的目的就是想让用户操作界面的时候，顺便帮我操作数据
   只要是遇到了表单元素，就要思考一下是否使用v-model

- .trim 去前后空格
- .number 转为数字
- .lazy 把oninput转成了onchange

## gitter  setter 
- 数据拦截（劫持）  双向数据绑定
-  Object.defineProperty(obj, prop, desc)
```
let obj = {}; 
let num = 2;
Object.defineProperty(obj,'age',{
    // value:2,
    // writable:false,  //属性不可被修改
    // enumerable:false, //属性是否可以被枚举
    // configurable:false, //是否可以被删除
    get(){
        //读取这个属性的时候触发
        console.log('读了');
        //return后的内容就是读操作后的结果,这个结果返给age（必须写return）
        return num;
    },
    set(val){
        //当写操作（这个属性）的是时候触发(可以没有return的) val接收aeg的值
        console.log('写操作');
        console.log(val)//1
        num = val;
    }
})
console.log(obj.age);
obj.age = 1;
console.log(obj.age);
```

## computed:数据的第二次处理
- 管道符：（数据的第二次处理） |

- 局部注册
   filters:{
     fn(val管道符之前的值){
        return 基于管道符之前的值进行二次处理
     }
   }
- 全局注册
   Vue.filter('名字',function(val管道符之前的值){
     return 基于管道符之前的值进行二次处理
   })

- 全局注册了之后，只要当前Vue实例下的所有组件都能享受到这个全局注册的过滤器
- 局部注册，只有当前这个组件才能享受

- 全局注册的过滤器 要放在 new Vue 的上面

- 如果全局和局部都注册了相同的名字的过滤器，那么优先级最高的是局部。

## watch 
- computed和watch的区别是什么？
  -  watch（只有数据发生改变才触发，还可以进行深度监听）、computed（上来就触发    一次，数据改变再继续触发）都是监听数据

- watch监听的都是data中的数据

- watch默认只能监听一层数据，如果有多层是监听不到的 ,如果想深度监听 需要加       deep:true //深度监听

## ref
-  为了让你快速定位一个元素或者组件

- 定义:元素或者组件上添加一个ref的属性即可
    <div ref="box">
- 获取: this.$refs.box

## v-cloak 
- 加载的时候不显示小胡子

## 组件 1
- 定义子组件：
  ```
    Vue.component('组件的名字',{
       template:`<div></div>`,
      })
  ```
- 组件的名字如果是直接引vue.js，那么尽量不要使用驼峰命名,
  因为命名之后，使用子组件的时候会报错，如果非要使用 把子组件改成烤串命名

- ***注册组件必须在new Vue上方***


## 父子组件的传递:
  1.子组件上写一个v-bind:自定义*行间属性*="父级中的数据"
  2.子组件（对象）上定义一个props的属性，属性的值可以为数组也可以为对象
      如果是数组['第一步自定义行间属性名字']
          props:['fnum']
  3.直接用{{}} + props中的名字就可以使用了
          {{ fnum }}

  简单总结:
      (1)往子组件的行间属性上传值

## 注册方式
- 第一种注册组件方式:
  Vue.component('btn',btn);

- 第二种注册组件方式:components
  components:{
    btn //key为btn，val为叫btn
  }