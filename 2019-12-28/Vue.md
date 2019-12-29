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
  - el:'挂载元素'，
  - data(存数据)：在**new Vue**下值为***对象***
  - 输出数据应 双花括号 {{数据名称}} 小胡子
  