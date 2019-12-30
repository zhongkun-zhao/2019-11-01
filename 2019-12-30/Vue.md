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

- v-on：(缩写@) 事件名="事件函数|简单语法"
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
- .trim 去前后空格
- .number 转为数字
- .lazy 把oninput转成了onchange
- 