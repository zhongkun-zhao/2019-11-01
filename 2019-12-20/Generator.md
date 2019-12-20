## Generator

- 调用Generator函数后，该函数并不执行，返回的也不是函数运行的结果，而是**指向内部状态**的指针对象，也就是遍历对象（Iterator Object）

- 总结一下，调用Generator 函数，返回一个遍历器对象，代表Generator 函数的内部指针，一开始函数不会执行，因为它是个状态对象

### 如何让Generator函数执行

- 每次调用遍历器对象的next方法，就返回一个有着value和done两个属性的对象。{value:xxx,done:false}

- value属性表示当前内部状态的值是 yield或者return表达式后面那个表达式的值。

- done属性石一个布尔值，表示是否遍历结束，false代表没有结束，true代表结束


## for of 
- 统一遍历api  for of 

- 一个数据结构只要部署了Symbol.iterator属性，就被视为有iterator 接口，就可以用for...of循环遍历它的成员。
- 也就是说 for...of循环内部调用的是数据结构的Symbol.iterator方法。

    要遍历key -> ary.keys()
    要遍历value -> ary.values()
    都要遍历 -> ary.entries()

-  字符串，数组，Map，Set,querySelectorAll都有Symbol.iterator

- 对象没有遍历节后，但是可以添加一个遍历接口

## Symbol.iterator
- Iterator 的作用有三个：一是为各种数据结构，提供一个统一的、简便的访问接口；二是使得数据结构的成员能够按某种次序排列；三是 ES6 创造了一种新的遍历命令for...of循环，Iterator 接口主要供for...of消费。

## onabort  当网络中断的时候触发
## xhr.abort()  强行中断