const box = document.querySelector('.body');
const lis = box.querySelectorAll('li');
const head = document.querySelector('.head')
//console.log(head);

/*
    
    findIndex(callback)
        找到回调函数中return后符合条件的索引值，找不到为-1
    callback(数组每项,索引,all)


    问题:
        当滚轮的时候，window.onscroll触发的次数非常多
        如果是触底去请求服务器，那么会在同一时间请求若干次
        这样大大增加了服务器的压力，也降低了用户的体验


        所以解决这个问题的方案有2个
        第一个:（停下来才触发）  防抖
            事件触发的频率很高，但是只要停下来再加载

        第二个:（降频率） 节流
            每隔固定时间再加载图片 ，比如每隔200s
*/

function minEle(lis){
    // ary 就是每个li被内容撑开的高度
    let ary = [...lis].map(ele=>ele.scrollHeight);
    // min 就是ary中最矮的那个li
    let min = Math.min(...ary);
    // 找到最矮的那个li的索引
    let index = ary.findIndex(item=>item === min);
   return {
       //返回了3个值  ele:最短的元素,index:最短的索引,min:最短的值
      ele:lis[index],
      index,
      min
  }
}

function render(){
    fetch('./data.json')
    .then(aa=>aa.json())
    .then(ary=>{    

    ary.forEach((item,i)=>{
        //循环找到最矮的那个li 对象结构赋值 这里要给最矮的那个li查如元素
    let {ele} = minEle(lis);
    //console.log(ele);
    //创建div 把div的格式给创建的这个div
    let div = document.createElement('div');
    div.className = 'img_box';
    // 创建img，把获取数据中的每个item 的路径给这个img
    let img = document.createElement('img');
    img.src = item.pic;  
   //创建p 把格式和内容给p
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    p1.className = 'desc';//格式
    p2.className = 'author';
    p1.innerText = item.desc;
    p2.innerText = item.author;//内容
    // div中传入这几个元素
    div.append(img);
    div.append(p1);
    div.append(p2);
    //在把创建好的div查入到 最矮的li中
    ele.append(div)
    // css格式中设置了透明度 ，这里价格定时器 为了出动画效果
    setTimeout(() => {
        img.style.opacity = 1;
    });
    });
    });
}
render()// 渲染
// 获取可是区的高度
let iH = window.innerHeight;
// 节流事件
window.onscroll = throttling(fn,500)
function fn(){
    // li最短距离 同上
    let {min} = minEle(lis);
    // 滚动条距离
    let scroll = window.pageYOffset;
    console.log(1);
    // 如果可是高度加滚动条高度大于li最矮高度+上面head的高度就重新渲染
    if(window.pageYOffset+iH>=min+head.offsetHeight){
        console.log('触底了');
        render();
    }
}
//封装的防抖事件函数
function debounce(cb,time){
    let timer;
    return function(...arg){
        //当事件触发的时候就先关闭上次的timer
        if(timer){
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            cb.call(this,...arg);
        }, time);
    }
}
// 封装的节流函数
function throttling(cb,time){
    let prevtime = 0,
    timer;
    return function(...arg){
        let nowTime = +new Date;
        // console.log(nowTime - prevtime)
        if(nowTime - prevtime > time){
            cb.call(this,...arg);
        }else{
            clearInterval(timer);
            timer = setTimeout(() => {
                // console.log(+new Date - prevtime);
                if(+new Date - prevtime > time){
                    cb.call(this,...arg);
                }
            }, time);
        }
        prevtime = nowTime;
    }
}