const express = require('express');//express
const app = express();//启动服务
app.listen(80); //设置端口
const fs = require('fs'); //文件模块
const bodypares = require('body-parser');
const path = require('path')//连接路径模块
const session = require('express-session')//  还不懂

app.use(express.static('www'));//打开静态文件
app.use(bodypares.urlencoded({extended:false}));//转码中文

// 设置cookie
app.use(session({
    secret:'12期',
    name:'session_id',
    cookie:{maxAge:10000},
    resave:false,
    saveUninitialized:true,
    rolling:true
}))

let sql = [
    {
        id:0,
        user:'zzk',
        pw:'123'
    }
]

//失焦判断用户可不可以注册
// const userFn = (req,res)=>{
//     console.log(req.body)
//     const {body} = req;
//     let re = /^[a-zA-Z]\w{5,11}$/;
//     let msgObj = {};
//     if(body.user && re.test(body.user)){
//         let o = sql.find(item=>item.user === body.user);
//         if(o){
//             msgObj.code = 1;
//             msgObj.msg = '用户名已存在';
//         }else{
//             msgObj.code = 0;
//             msgObj.msg = '可以注册';
//         }
//     }else{
//         msgObj.code = 2;
//         msgObj.msg = '请正确输入用户名';
//     }
//     res.json(msgObj);

// }
// app.post('/getName',userFn);
const userFn = (req,res)=>{
    console.log(req.body)//user:'zzk'
    const{body} = req;
    let re = /^[a-zA-Z]\w{5,10}$/;
    let msgObj ={};
    if(body.user && re.test(body.user)){
        let o = sql.find(item=>item.user === body.user);
        if(o){
            msgObj.code = 1;
            msgObj.msg = '老铁，改用户已被注册';
        }else{
            msgObj.code = 0;
            msgObj.msg = '可以注册';
        }
    }else{
        msgObj.code = 2;
        msgObj.msg = '大妹子，用户名不对'
    }
    res.json(msgObj);
}
app.post('/getName',userFn);

// 注册接口

app.post('/register',(req,res)=>{
    const {body:{user,pw}} = req;
    let re = /^[a-zA-Z]\w{5,10}$/;
    let msgObj = {};
    if(user && pw && re.test(user)){
        let o = sql.find(item=>item.user === user)
        if(o){
            msgObj.code = 1;
            msgObj.msg = '老铁，改用户已被注册'
        }else{
            msgObj.code = 0;
            msgObj.msg = '注册成功';
            sql.push({
                id:Date.now(),
                user,
                pw
            })
        }
    }else{
        msgObj.code = 2;
        magObj.msg = '大妹子，用户名不对'
    }
    res.json(msgObj);
})

//登录接口
app.post('/login',(req,res)=>{
    let msgObj = {};
    const {body:{user,pw}} = req;
    if(user && pw){
        let o = sql.find(item=>item.user === user);
        if(o){
            if(o.pw === pw){
                msgObj.code = 0;
                msgObj.msg = '登录ok';
                req.session.userinfo = user; //存到cookie里
            }else{
                msgObj.code = 3;
                msgObj.msg = '用户名或密码错误'
            }

        }else{
            msgObj.code = 1;
            msgObj.msg = '小仙女，你还没注册'
        }
    }else{
        msgObj.code = 2;
        msgObj.msg = '请核对用户信息'
    }
    res.json(msgObj);
})

// app.get('/islogin',(req,res)=>{
//     if(req.session.userinfo){//登录过
//        res.json({
//            code:0,
//            msg:'欢迎回家',
//            user:req.session.userinfo
//        })
//     }else{
//         res.json({
//             code:1,
//             msg:'没登录过'
//         })
//     }
// })

// app.get('/logout',(req,res)=>{
//     req.session.destroy(function(err){
//         console.log(err)
//     });
//     res.send({
//         code:0
//     })
// })

// app.use('*',(req,res)=>{
//     let data = fs.readFileSync(path.resolve('./www/404.html'));
//     res.send(data.toString());
// });
